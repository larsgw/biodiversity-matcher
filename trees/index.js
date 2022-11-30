const guessData = {}
const cache = {}

const data = {
  Tree: {
    'Acer (esdoorn)': {
        'Acer platanoides (Noorse esdoorn)': 54763,
        'Acer pseudoplatanus (Gewone esdoorn)': 119791
    },
    'Aesculus hippocastanum (Witte paardenkastanje)': 84298,
    'Alnus glutinosa (Zwarte els)': 966205,
    'Betula (berk)': {
        'Betula pendula (Ruwe berk)': 83992,
        'Betula pubescens (Zachte berk)': 119061
    },
    'Carpinus betulus (Haagbeuk)': 55801,
    'Castanea sativa (Tamme kastanje)': 121763,
    'Catalpa bignonioides (Trompetboom)': 50859,
    'Cedrus libani (Libanonceder)': 136150,
    'Crataegus (meidoorn)': {
        'Crataegus laevigata ‘Paul Scarlet’ (Tweestijlige rode meidoorn)': 54428,
        'Crataegus monogyna (Eenstijlige meidoorn)': 51147,
    },
    'Corylus colurna (Boomhazelaar)': 367960,
    'Fagus sylvatica (Gewone beuk)': 54227,
    'Fraxinus excelsior (Gewone es)': 125440,
    'Gleditsia triacanthos (Valse christusdoorn)': 54797,
    'Juglans regia (Walnoot, okkernoot)': 63935,
    'Larix kaempferi (Japanse lariks)': 143786,
    'Liquidambar styraciflua (Amberboom)': 49658,
    'Picea (Spar)': {
        'Picea abies (Fijnspar)': 63567,
        other: 63573,
    },
    'Pinus sylvestris (Grove den)': 58722,
    'Platanus x hispanica (Gewone plataan)': 552449,
    'Populus x canadensis (Canadese populier)': 181684,
    'Prunus avium (Zoete kers)': 61964,
    'Pseudotsuga menziesii (Douglasspar)': 48256,
    'Pterocarya fraxinifolia (Vleugelnoot)': 371700,
    'Quercus (eik)': {
        'Quercus robur (Zomereik)': 56133,
        'Quercus rubra (Amerikaanse eik)': 49005
    },
    'Robinia pseudoacacia (Robinia (Gewone acacia))': 56088,
    'Salix alba (Schietwilg)': 54841,
    'Sophora japonica (Honingboom)': 53945,
    'Sorbus aucuparia (Gewone lijsterbes)': 56063,
    'Tilia (linde)': {
        'Tilia x europaea (Hollandse linde)': 410499,
        'Tilia platyphyllos (Zomerlinde, Grootbladige linde)': 169761
    },
    'Ulmus minor (Veldiep)': 79461
  },
  'Fungi': {
    'Zadelzwam': 940028,
    'Gewone oesterzwam': 48494,
    'Reuzenzwam': 157989,
    'Eikhaas': 53714,
    'Echte honingzwam': 55950,
    'Goudvliesbundelzwam': 351817,
    'Paarse korstzwam': 118036,
    'Echte vuurzwam': 125136,
    'schubbige bundelzwam': 153445,
    'Gewone elfenbankje': 54134,
    'Porseleinzwam': 55964,
    'Echte tonderzwam': 127510,
    'Gesteelde lakzwam': 125932,
    'Fluweelpootje': 67594,
    'Berkendoder': 775410,
    'Dennenvoetzwam': 118084,
    'Biefstukzwam': 123897,
    'Zwavelzwam': 53713,
    'Ruige weerschijnzwam': 194483,
    'Dikrandtonderzwam': 63509,
    'Harslakzwam': 328280,
    'Korsthoutskoolzwam': 128051
  }
}

function getPaths (data, prefix) {
    if (typeof data === 'object') {
        const paths = []
        for (const taxon in data) {
            paths.push(...getPaths(data[taxon], prefix.concat(taxon)))
        }
        return paths
    } else {
        return [prefix.concat(data)]
    }
}

const taxaPaths = getPaths(data, []).reduce((paths, path) => {
    paths[path.pop()] = path
    return paths
}, {})

function appendTaxaToForm (taxa, element, type) {
    for (const taxon in taxa) {
        if (typeof taxa[taxon] === 'object') {
            const group = document.createElement('fieldset')
            const legend = document.createElement('legend')
            if (type === 'checkbox') {
                const label = document.createElement('label')
                const input = document.createElement('input')
                input.type = type
                input.checked = true
                input.addEventListener('change', function () {
                    group.disabled = !group.disabled
                    const guessEquivalent = document.querySelector(`[data-taxon="${taxon}"]`)
                    guessEquivalent.disabled = group.disabled
                })
                label.appendChild(input)
                const text = document.createTextNode(taxon)
                label.appendChild(text)
                legend.appendChild(label)
            } else {
                group.dataset.taxon = taxon
                legend.innerText = taxon
            }
            group.appendChild(legend)
            appendTaxaToForm(taxa[taxon], group, type)
            element.appendChild(group)
        } else {
            const label = document.createElement('label')
            const box = document.createElement('input')
            box.type = type
            box.name = 'taxon'
            box.checked = true
            box.value = taxa[taxon]
            label.appendChild(box)
            const text = document.createTextNode(taxon)
            label.appendChild(text)
            element.appendChild(label)
        }
    }
}

function randomSample (array) {
    return array[Math.floor(Math.random() * array.length)]
}

function isEnabled (element) {
    if (element.disabled) {
        return false
    } else if (element.tagName === 'FORM') {
        return true
    }

    return isEnabled(element.parentNode)
}

function getTaxon (form) {
    const taxa = Array.prototype.filter
        .call(selection.taxon, input => input.checked && isEnabled(input))
        .map(input => input.value)

    const taxon = randomSample(taxa)
    const season = form.season.value
    const showSeason = taxaPaths[taxon].includes('Tree')
    return [taxon, showSeason ? season : '']
}

const selection = document.getElementById('selection')
const taxaSelect = document.getElementById('taxaSelect')
const guess = document.getElementById('guess')
const giveup = document.getElementById('giveup')
const taxaGuess = document.getElementById('taxaGuess')

const licenses = ['cc-by', 'cc-by-nc', 'cc0', 'cc-by-sa', 'cc-by-nc-sa']

async function getGuessData (taxon, season) {
    const key = taxon + '|' + season

    if (!(key in cache) || cache[key].length === 0) {
        const exclude = []
        if (taxaPaths[taxon].slice(-1)[0] === 'other') {
            let group = taxa
            for (const name of taxaPaths[taxon]) {
                if (!group[name] || name === 'other') {
                    break
                }

                group = group[name]
            }
            for (const name in group) {
                if (name !== 'other') {
                    exclude.push(group[name])
                }
            }
        }

        const url = new URL('https://api.inaturalist.org/v1/observations')
        const options = {
            photos: true,
            taxon_id: taxon,
            license: licenses,
            photo_license: licenses,
            quality_grade: 'research',
            locale: 'nl',
            per_page: 10
        }
        console.log(season)
        if (season) {
            options.month = season
        }
        if (exclude.length) {
            options.without_taxon_id = exclude
        }
        url.search = new URLSearchParams(options).toString()

        const data = await fetch(url).then(response => response.json())
        if (data.results == null || data.results.length === 0) {
            return undefined
        }
        cache[key] = data.results
    }

    const guessData = randomSample(cache[key])
    cache[key].splice(cache[key].indexOf(guessData), 1)

    return guessData
}

selection.onsubmit = async function (e) {
    e.preventDefault()

    delete selection.images.dataset.success
    while (selection.images.firstChild) {
        selection.images.removeChild(selection.images.lastChild)
    }
    while (guess.result.firstChild) {
        guess.result.removeChild(guess.result.lastChild)
    }

    // Get data
    const [taxon, season] = getTaxon(selection)
    const taxonName = taxaPaths[taxon].slice(-1)[0]
    const data = await getGuessData(taxon, season)

    if (!data) {
        selection.images.dataset.success = false
        selection.images.innerHTML = `No images found for ${taxonName}`
        return
    }

    // Update state
    guessData.data = {
        taxon: {
          name: taxonName,
          label: taxonName,
          value: taxon
        },
        species: {
          name: data.taxon.name,
          label: data.taxon.preferred_common_name
        }
    }

    // Update images
    const figure = document.createElement('figure')
    const container = document.createElement('div')
    for (const photo of data.photos) {
        const figure = document.createElement('figure')

        const img = document.createElement('img')
        img.src = photo.url.replace('square', 'large')
        figure.appendChild(img)

        const figcaption = document.createElement('figcaption')
        figcaption.innerText = photo.attribution
        figure.appendChild(figcaption)

        container.appendChild(figure)
    }
    figure.appendChild(container)
    const figcaption = document.createElement('figcaption')
    const a = document.createElement('a')
    a.href = data.uri
    a.innerText = 'Observation link (spoilers)'
    figcaption.appendChild(a)
    figure.appendChild(figcaption)

    selection.images.appendChild(figure)
}

function createTaxonLabel (taxon) {
    const base = `<i>${taxon.name}</i>`
    return taxon.name === taxon.label || taxon.label === undefined ? base : base + ` (${taxon.label})`
}

function createSpeciesLabel (species, taxon) {
    return `This is a ${createTaxonLabel(species)}`
}

function getCommonParent (guess, expected) {
    let i = 0
    while (taxaPaths[guess][i] === taxaPaths[expected][i]) {
        i++
    }

    return taxaPaths[guess][i - 1]
}

guess.onsubmit = function (e) {
    e.preventDefault()
    const { taxon, species } = guessData.data
    if (taxon.value === guess.taxon.value) {
        guess.result.dataset.success = true
        guess.result.innerHTML = `That is correct! ${createSpeciesLabel(species, taxon)}`
        return
    }

    guess.result.dataset.success = false
    const commonParent = getCommonParent(guess.taxon.value, taxon.value)

    if (commonParent) {
        guess.result.innerText = `This is indeed ${commonParent}, but a different subtaxon.`
    } else {
        guess.result.innerText = `Guess again.`
    }
}

giveup.onclick = function () {
    guess.result.dataset.success = false
    const { taxon, species } = guessData.data
    guess.result.innerHTML = createSpeciesLabel(species, taxon)
}

const params = new URLSearchParams(location.search)
let taxa = data

if (params.has('taxon')) {
    taxa = params.getAll('taxon').reduce((taxa, taxon) => {
        const steps = taxon.replace(/\b./g, m => m.toUpperCase()).split('.')
        const last = steps.pop()

        let cursor = data
        let copy = taxa
        for (const step of steps) {
            cursor = cursor[step]
            copy = copy[step] || (copy[step] = {})
        }
        copy[last] = cursor[last]

        return taxa
    }, {})
}

if (params.has('season')) {
    selection.season.value = params.get('season')
}

appendTaxaToForm(taxa, taxaSelect, 'checkbox')
appendTaxaToForm(taxa, taxaGuess, 'radio')
