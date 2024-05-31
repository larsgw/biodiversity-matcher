import { Provider } from './provider.js'
import { Taxon } from '../taxon.js'
import { formatUrl } from '../util.js'
import wbk from 'wikibase-sdk'

const wdk = wbk({
  instance: 'https://www.wikidata.org',
  sparqlEndpoint: 'https://query.wikidata.org/sparql'
})

function formatTaxa (taxa) {
  return taxa.map(taxon => 'wd:' + taxon).join(' ')
}

function getImageFilename (url) {
  return 'File:' + decodeURIComponent(url.replace(/^.+\//, ''))
}

function stripHtml (html) {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  return doc.body.textContent || ''
}

export class WikimediaProvider extends Provider {
  async fetchQuestions (category, options) {
    if (!this.cache[category]) {
      this.cache[category] = { offset: 0, questions : [] }
    }

    const results = await this._fetchQuestions(category, options)

    this.cache[category].offset += results.length

    if (results.length) {
      // Process the data
      results.forEach(result => {
        result.image = getImageFilename(result.image)
      })

      const imageInfo = await this._fetchImageInfo(results)
      const questions = results.map(result => {
        result.image = imageInfo[result.image]
        return this._parseResult(result, options)
      })

      this.cache[category].questions.push(...questions)

      return true
    }

    return false
  }

  _fetchQuestions (category, options) {
    let excludeQuery = ''
    const excludedTaxa = options.taxon.getChildTaxa()
    if (excludedTaxa.length) {
      excludeQuery = `MINUS {
        VALUES ?e { ${formatTaxa(excludedTaxa)} }
        ?taxon wdt:P171+ ?e
      }`
    }

    const labelLanguage = options.vernacularNameLanguage || 'en'

    const query = `SELECT ?taxon ?taxonName ?taxonLabel ?image WHERE {
      VALUES ?category { ${formatTaxa(options.taxon.taxa)} }
      ?taxon wdt:P105 wd:Q7432 .
      ?taxon wdt:P171+ ?category .
      ${excludeQuery}
      ?taxon wdt:P225 ?taxonName .
      ?taxon wdt:P18 ?image .
      FILTER REGEX(STR(?image), "\.(jpg|jpeg|png|gif)$", "i")
      SERVICE wikibase:label { bd:serviceParam wikibase:language "${labelLanguage}". }
    } LIMIT 10 OFFSET ${this.cache[category].offset}`

    // Fetch data
    const url = wdk.sparqlQuery(query)
    return fetch(url)
      .then(response => response.json())
      .then(wdk.simplify.sparqlResults)
  }

  _fetchImageInfo (results) {
    const url = formatUrl('https://commons.wikimedia.org/w/api.php', {
      action: 'query',
      titles: results.map(result => result.image).join('|'),
      prop: 'imageinfo',
      iiprop: 'url|extmetadata',
      format: 'json',
      origin: '*'
    })

    return fetch(url.href)
      .then(response => response.json())
      .then(response => {
        const data = {}
        const images = Object.values(response.query.pages)
        for (const image of images) {
          data[image.title] = image.imageinfo[0]
        }
        return data
      })
  }

  _parseResult (result, options) {
    const language = options.vernacularNameLanguage || 'nl'

    return {
      taxon: new Taxon({
        id: result.taxon.value,
        scientificName: result.taxon.name,
        taxonRank: 'species',
        vernacularName: { [language]: result.taxon.label }
      }),
      url: result.image.descriptionurl,
      images: [
        {
          src: result.image.url,
          thumbnail: result.image.url,
          caption: this._getCaption(result.image.extmetadata)
        }
      ]
    }
  }

  _getCaption (data) {
    let caption = 'Wikimedia'

    if (data.Artist) {
      caption = stripHtml(data.Artist.value) + ' via Wikimedia'
    }

    if (data.LicenseShortName) {
      caption += ' / ' + data.LicenseShortName.value
    }

    return caption
  }

  getCachedQuestions (category) {
    return this.cache[category]?.questions
  }

  hasCachedQuestions (category) {
    return this.cache.hasOwnProperty(category) && this.cache[category].questions.length > 0
  }
}
