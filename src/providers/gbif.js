import { Provider } from './provider.js'
import { Taxon } from '../taxon.js'
import { formatUrl } from '../util.js'

export class GbifProvider extends Provider {
    async fetchQuestions (category, options) {
        if (!this.cache[category]) {
            this.cache[category] = { offset: 0, questions : [] }
        }

        let success = false
        let done = false
        let counter = 0

        while (!success && !done) {
            const urlOptions = {
                mediaType: 'StillImage',
                taxonKey: options.taxon.taxa,
                country: options.country,
                license: options.licenses,
                occurrenceStatus: 'PRESENT',
                limit: 50,
                offset: this.cache[category].offset
            }

            if (options.lifestage === 'adult') {
                urlOptions.lifeStage = 'Adult'
            } else if (options.lifestage === 'nymph') {
                urlOptions.lifeStage = 'Nymph'
            }

            // Fetch data
            const data = await fetch(formatUrl('https://api.gbif.org/v1/occurrence/search', urlOptions))
                .then(response => response.json())

            // Filter and process data
            let results = data.results ?? []
            this.cache[category].offset += results.length

            const excludedTaxa = options.taxon.getChildTaxa()
            for (const result of results) {
                if (!['SPECIES', 'SUBSPECIES', 'VARIETY'].includes(result.taxonRank)) {
                    continue
                }

                if (excludedTaxa.length && this._isResultExcluded(result, excludedTaxa)) {
                    continue
                }

                const parsedResult = this._parseResult(result)

                if (parsedResult.images.length === 0) {
                    continue
                }

                this.cache[category].questions.push(parsedResult)
                success = true
            }

            counter++
            done = data.endOfRecords || counter > 10
        }

        return success
    }

    _isResultExcluded (result, exclude) {
        const parents = ['kingdomKey', 'phylumKey', 'classKey', 'orderKey', 'familyKey', 'genusKey', 'speciesKey']
        return exclude.some(id => parents.some(parent => result[parent] === id))
    }

    _parseResult (result) {
        const taxon = {
            id: result.acceptedTaxonKey,
            scientificName: result[result.taxonRank.toLowerCase()],
            taxonRank: result.taxonRank.toLowerCase(),
            // vernacularName
        }

        if (!taxon.scientificName && result.infraspecificEpithet) {
            taxon.scientificName = taxon.scientificName + ' ' + result.infraspecificEpithet
        } else if (!taxon.scientificName) {
            taxon.scientificName = result.scientificName
        }

        return {
            taxon: new Taxon(taxon),
            url: `https://www.gbif.org/occurrence/${result.key}`,
            images: result.media.map(media => this._parseMedia(media)).filter(media => media !== null)
        }
    }

    _parseMedia (media) {
        if (media.type !== 'StillImage' || !media.identifier) {
            return null
        }

        const image = {
            src: media.identifier,
            thumbnail: media.identifier,
            caption: `© ${media.rightsHolder}`
        }

        if (image.src.startsWith('https://inaturalist-open-data.s3.amazonaws.com/photos/')) {
            image.src = image.src.replace('original', 'large')
            image.thumbnail = image.thumbnail.replace('original', 'square')
        } else if (image.src.startsWith('https://observation.org/photos/')) {
            image.thumbnail = image.thumbnail + '?w=200&h=150'
        }

        if (media.license) {
            let license = media.license
            if (license.match(/https?:\/\/creativecommons\.org\/licenses\//)) {
                const [clauses, version] = license.replace(/\/$/, '').split('/').slice(-2)
                license = `CC ${clauses.toUpperCase()} ${version}`
            } else if (license.match(/https?:\/\/creativecommons\.org\/publicdomain\//)) {
                const [version] = license.replace(/\/$/, '').split('/').slice(-1)
                license = `CC0 ${version}`
            }
            image.caption = `${image.caption} (${license})`
        }

        return image
    }

    getCachedQuestions (category) {
        return this.cache[category]?.questions
    }

    hasCachedQuestions (category) {
        return this.cache.hasOwnProperty(category) && this.cache[category].questions.length > 0
    }
}
