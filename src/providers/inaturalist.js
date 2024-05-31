import { Provider } from './provider.js'
import { Taxon } from '../taxon.js'
import { formatUrl } from '../util.js'

export class iNaturalistProvider extends Provider {
    async fetchQuestions (category, options) {
        if (!this.cache[category]) {
            this.cache[category] = { page: 1, questions : [] }
        }

        const urlOptions = {
            photos: true,
            taxon_id: options.taxon.taxa.join(','),
            place_id: options.placeId,
            license: options.licenses.join(','),
            photo_license: options.licenses.join(','),
            quality_grade: 'research',
            locale: options.vernacularNameLanguage,
            per_page: 50,
            page: this.cache[category].page
        }

        const excludedTaxa = options.taxon.getChildTaxa()
        if (excludedTaxa.length) {
            urlOptions.without_taxon_id = excludedTaxa.join(',')
        }

        // Fetch data
        const data = await fetch(formatUrl('https://api.inaturalist.org/v1/observations', urlOptions))
            .then(response => response.json())

        // Filter and process data
        this.cache[category].page++

        if (data.results != null && data.results.length) {
            this.cache[category].questions.push(...data.results.map(result => this._parseResult(result, options)))

            return true
        }

        return false
    }

    _parseResult (result, options) {
        return {
            taxon: new Taxon({
                id: result.taxon.id,
                scientificName: result.taxon.name,
                taxonRank: result.taxon.rank,
                vernacularName: {
                    [options.vernacularNameLanguage]: result.taxon.preferred_common_name
                }
            }),
            url: result.uri,
            images: result.photos.map(media => this._parseMedia(media))
        }
    }

    _parseMedia (media) {
        return {
            src: media.url.replace('square', 'large'),
            thumbnail: media.url,
            caption: media.attribution
        }
    }

    getCachedQuestions (category) {
        return this.cache[category]?.questions
    }

    hasCachedQuestions (category) {
        return this.cache.hasOwnProperty(category) && this.cache[category].questions.length > 0
    }
}
