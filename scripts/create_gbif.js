const fetch = require('node-fetch')
const util = require('util')

const API_BASE = 'https://api.gbif.org/v1/'
const LANGUAGE_MAP = {
  nld: 'nl',
  eng: 'en'
}

function fetchJson (url) {
  return fetch(url).then(response => response.json())
}

async function addTaxon (taxonKey, taxa) {
  if (taxa[taxonKey]) {
    return
  }

  const taxon = await fetchJson(`${API_BASE}species/${taxonKey}`)

  if (taxon.acceptedKey) {
    await addTaxon(taxon.acceptedKey, taxa)
  } else {
    taxa[taxonKey] = taxon
  }
}

async function fetchTaxa (taxonKey, place, languages) {
  const baseUrl = `${API_BASE}occurrence/search?facet=taxonKey&country=${place}&taxonKey=${taxonKey}&year=0,9999&occurrenceStatus=present&basisOfRecord=HUMAN_OBSERVATION&limit=0`

  const results = {}
  const pageSize = 100
  let offset = 0

  while (true) {
    const url = `${baseUrl}&facetLimit=${pageSize}&facetOffset=${offset}`
    const response = await fetchJson(url).then(response => response.facets[0].counts)

    for (const { name } of response) {
      addTaxon(name, results)
    }

    if (response.length < pageSize) {
      return Object.values(results)
    } else {
      offset += pageSize
    }
  }
}

async function fetchNames (taxonKey, place, languages) {
  const baseUrl = `${API_BASE}species/${taxonKey}/vernacularNames`

  const results = {}
  const pageSize = 100
  let offset = 0

  while (true) {
    const url = `${baseUrl}?limit=${pageSize}&offset=${offset}`
    const response = await fetchJson(url)

    for (const name of response.results) {
      const language = LANGUAGE_MAP[name.language]
      if (!results[language]) { results[language] = {} }
      results[language][name.country] = name.vernacularName
    }

    if (response.results.length < pageSize) {
      const names = languages
        .filter(language => results[language])
        .map(language => {
          const localName = results[language][place]
          const generalName = results[language]['']
          const foreignName = Object.values(results[language])[0]

          return [language, localName || generalName || foreignName]
        })
        .filter(([language, name]) => name)
      return names.length ? Object.fromEntries(names) : null
    } else {
      offset += pageSize
    }
  }
}

async function main (taxonKey, place, ...languages) {
  const taxa = await fetchTaxa(taxonKey, place, languages)
  const taxaById = {}
  const taxaByParent = {}

  // Make map of taxa
  for (const gbifTaxon of taxa) {
    const taxon = {
      scientificName: gbifTaxon.canonicalName,
      taxonRank: gbifTaxon.rank.toLowerCase(),
      taxa: gbifTaxon.key,
      children: []
    }

    const names = await fetchNames(gbifTaxon.key, place, languages)
    if (names) {
      taxon.vernacularName = names
    }

    taxaById[gbifTaxon.key] = taxon

    if (!taxaByParent[gbifTaxon.parentKey]) taxaByParent[gbifTaxon.parentKey] = []
    taxaByParent[gbifTaxon.parentKey].push(taxon)
  }

  // Attach children
  for (const id in taxaByParent) {
    if (id in taxaById) {
      taxaById[id].children.push(...taxaByParent[id])
    }
  }

  // Handle (empty) nodes, leafs
  for (const id in taxaById) {
    const taxon = taxaById[id]
    taxon.children.sort((a, b) => a.scientificName > b.scientificName ? 1 : a.scientificName < b.scientificName ? -1 : 0)
    if (taxon.children.length === 0) {
      delete taxon.children
    } else if (taxon.taxonRank !== 'species') {
      delete taxon.taxa
    }
  }

  const config = {
    metadata: {
      title: Object.fromEntries(languages.map(l => [l, ''])),
      description: Object.fromEntries(languages.map(l => [l, ''])),
      languages
    },
    provider: {
      type: 'gbif',
      defaultOptions: {
        licenses: ['CC_BY_4_0', 'CC_BY_NC_4_0', 'CC0_1_0'],
        country: place
      }
    },
    taxa: taxaById[taxonKey].children
  }

  console.log(util.inspect(config, {
    maxArrayLength: null,
    maxStringLength: null,
    depth: null
  }))
}

main(...process.argv.slice(2))
