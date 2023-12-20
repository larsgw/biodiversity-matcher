const guessData = {}
const cache = {}

const data = {
    'Anthophila (bijen)': {
        '<i>Anthidium/Anthidiellum</i> (wolbijen)': 504741,
        '<i>Andrena</i> (zandbijen)': {
            '<i>Andrena hattorfiana</i> (knautiabij)': 424814,
            other: 57669
        },
        '<i>Apis mellifera</i> (honingbij)': 47219,
        '<i>Bombus</i> (hommels)': {
            '<i>Bombus hortorum</i> (tuinhommel)': 121989,
            '<i>Bombus hypnorum</i> (boomhommel)': 61803,
            '<i>Bombus lapidarius</i> (steenhommel)': 57619,
            '<i>Bombus pascuorum</i> (akkerhommel)': 55637,
            '<i>Bombus pratorum</i> (weidehommel)': 124910,
            '<i>Bombus terrestris</i>-complex (aardhommels)': '57516,1092510',
            '<i>Psithyrus</i> (koekoekshommels)': 538893,
            other: 52775
        },
        '<i>Chelostoma</i> (klokjesbijen)': 357471,
        '<i>Dasypoda hirtipes</i> (pluimvoetbij)': 746682,
        '<i>Hylaeus</i> (maskerbijen)': 359239,
        '<i>Lasioglossum/Halictus</i> (groefbijen)': {
            '<i>Halictus scabiosae</i> (breedbandgroefbij)': 415589,
            other: 335597
        },
        '<i>Macropis europaea</i> (slobkousbij)': 188686,
        '<i>Megachile</i> (behangersbijen)': 125786,
        '<i>Nomada</i> (wespbijen)': 53648,
        '<i>Osmia/Hoplitis</i> (metselbijen)': 465612,
        '<i>Sphecodes</i> (bloedbijen)': 61891,
        other: 630955
    },
    'Syrphidae (zweefvliegen)': {
        '<i>Anasimyia/Eurimyia lineata</i>': 1144215,
        '<i>Cheilosia</i> (gitjes)': 124483,
        '<i>Chrysotoxum</i> (fopwespen)': 119997,
        '<i>Episyrphus balteatus</i> (snor-/marmelade-/pyjamazweefvlieg)': 52482,
        '<i>Eristalis</i> (bijvliegen)': {
            '<i>Eristalis intricaria</i> (hommelbijvlieg)': 497713,
            other: 52491
        },
        '<i>Eristalinus</i> (vlekogen)': 145541,
        '<i>Eupeodes</i> (kommazwevers)': 69190,
        '<i>Helophilus</i> (pendelzweefvliegen)': 52487,
        '<i>Melanostoma</i> (driehoekzweefvliegen)': 70406,
        '<i>Merodon equestris</i> (narcissenvlieg)': 194786,
        '<i>Myathropa florea</i> (doodskopzweefvlieg)': 70211,
        '<i>Rhingia campestris</i> (gewone snuitvlieg)': 355014,
        '<i>Scaeva pyrastri</i> (witte halvemaanzwever)': 52160,
        '<i>Sericomyia</i> (veenzweefvliegen)': 68133,
        '<i>Sphaerophoria</i> (langlijven)': 52964,
        '<i>Syritta pipiens</i> (menuetzweefvlieg)': 81979,
        '<i>Syrphus</i> (bandzweefvliegen)': 52489,
        '<i>Volucella</i> (reuzen)': {
            '<i>Volucella pellucens</i> (ivoorzweefvlieg)': 52480,
            '<i>Volucella zonaria</i> (stadreus)': 343983,
            other: 52481
        },
        '<i>Xylota/Chalcosyrphus</i> (bladlopers)': 488420,
        other: 49995
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
                label.innerHTML = taxon
                label.prepend(input)
                legend.appendChild(label)
            } else {
                group.dataset.taxon = taxon
                legend.innerHTML = taxon
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
            label.innerHTML = taxon
            label.prepend(box)
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

    return randomSample(taxa)
}

const selection = document.getElementById('selection')
const taxaSelect = document.getElementById('taxaSelect')
const guess = document.getElementById('guess')
const giveup = document.getElementById('giveup')
const taxaGuess = document.getElementById('taxaGuess')

const licenses = ['cc-by', 'cc-by-nc', 'cc0', 'cc-by-sa', 'cc-by-nc-sa']

function getTaxonIds (group) {
    if (typeof group === 'object') {
        const ids = []
        for (const name in group) {
            ids.push(...getTaxonIds(group[name]))
        }
        return ids
    }

    return [group]
}

async function getGuessData (taxon) {
    const key = taxon

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
                    exclude.push(...getTaxonIds(group[name]))
                }
            }
        }

        const url = new URL('https://api.inaturalist.org/v1/observations')
        const options = {
            photos: true,
            taxon_id: taxon,
            place_id: 7506,
            license: licenses,
            photo_license: licenses,
            quality_grade: 'research',
            locale: 'nl',
            per_page: 10
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
    const submitButton = selection.querySelector('button[type="submit"]')
    submitButton.disabled = true

    delete selection.images.dataset.success
    while (selection.images.firstChild) {
        selection.images.removeChild(selection.images.lastChild)
    }
    while (guess.result.firstChild) {
        guess.result.removeChild(guess.result.lastChild)
    }

    // Get data
    const taxon = getTaxon(selection)
    const taxonName = taxaPaths[taxon].slice(-1)[0]
    const data = await getGuessData(taxon)

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

    submitButton.disabled = false
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
        guess.result.innerHTML = `This is indeed ${commonParent}, but a different subtaxon.`
    } else {
        guess.result.innerHTML = `Guess again.`
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
