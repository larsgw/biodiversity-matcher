const guessData = {}
const cache = {}

const data = {
    'Anthophila (bijen)': {
        '<i>Andrena</i> (zandbijen)': 1345710,
        '<i>Apis mellifera</i> (honingbij)': 1341976,
        '<i>Bombus</i> (hommels)': {
            '<i>Bombus hortorum</i> (tuinhommel)': 1340542,
            '<i>Bombus humilis</i> (heidehommel)': 1340523,
            '<i>Bombus hypnorum</i> (boomhommel)': 1340513,
            '<i>Bombus jonellus</i> (veenhommel)': 1340308,
            '<i>Bombus lapidarius</i> (steenhommel)': 1340301,
            '<i>Bombus pascuorum</i> (akkerhommel)': 1340405,
            '<i>Bombus pratorum</i> (weidehommel)': 1340305,
            '<i>Bombus terrestris</i>-complex (aardhommels)': '1340503,1340298,5870368,4496017',
            '<i>Psithyrus</i> (koekoekshommels)': '1340434,1340362,1340527,1340506,1340344,1340333,1340418',
            other: 1340278
        },
        '<i>Chelostoma</i> (klokjesbijen)': 1334493,
        '<i>Colletes</i> (zijdebijen)': 1348504,
        '<i>Dasypoda hirtipes</i> (pluimvoetbij)': 1345858,
        '<i>Lasioglossum/Halictus</i> (groefbijen)': {
            '<i>Halictus rubicundus</i> (roodpotige groefbij)': 1353453,
            '<i>Halictus scabiosae</i> (breedbandgroefbij)': 1353395,
            other: '1347978,1353501'
        },
        '<i>Panurgus</i> (roetbijen)': 1352891,
        other: '7901,4334,7905,7908,7911,4345'
    },
    'Syrphidae (zweefvliegen)': {
        '<i>Anasimyia/Eurimyia lineata</i>': 10366531,
        '<i>Cheilosia</i> (gitjes)': {
            '<i>Cheilosia fraterna</i> (moerasgitje)': 1540067,
            other: 1539835
        },
        '<i>Chrysotoxum</i> (fopwespen)': {
            '<i>Chrysotoxum bicinctum</i> (donkere fopwesp)': 1536009,
            other: 1535870,
        },
        '<i>Episyrphus balteatus</i> (snor-/marmelade-/pyjamazweefvlieg)': 1536449,
        '<i>Eristalinus</i> (vlekogen)': 1542672,
        '<i>Eristalis</i> (bijvliegen)': {
            '<i>Eristalis intricaria</i> (hommelbijvlieg)': 1541262,
            other: 1491190
        },
        '<i>Eumerus</i> (bollenzweefvliegen)': 1534472,
        '<i>Eupeodes</i> (kommazwevers)': {
        '<i>Eupeodes corollae</i> (terrasjeskommazwever)': 1540742,
        '<i>Eupeodes latifasciatus</i> (gele kommazwever)': 1540691,
            other: 1540675
        },
        '<i>Helophilus</i> (pendelzweefvliegen)': {
            '<i>Helophilus hybridus</i> (moeraspendelzweefvlieg)': 5071368,
            '<i>Helophilus pendulus</i> (gewone pendelzweefvlieg)': 5071352,
            '<i>Helophilus trivittatus</i> (citroenspendelzweefvlieg)': 5071382
        },
        '<i>Melanostoma</i> (driehoekzweefvliegen)': {
            '<i>Melanostoma mellinum</i> (gewone driehoekzweefvlieg)': 5766554,
            '<i>Melanostoma scalare</i> (slanke driehoekzweefvlieg)': 5766556,
            other: 1533169
        },
        '<i>Orthonevra</i> (glimmers)': 1537455,
        '<i>Platycheirus</i> (platvoetjes)': 1542996,
        '<i>Pyrophaena</i>': {
            '<i>Pyrophaena granditarsa</i> (klompvoetje)': 5886305,
            '<i>Pyrophaena rosarum</i> (vlinderstrikje)': 4294542
        },
        '<i>Rhingia campestris</i> (gewone snuitvlieg)': 1537412,
        '<i>Scaeva</i> (halvemaanzwevers)': {
        '<i>Scaeva pyrastri</i> (witte halvemaanzwever)': 1537719,
        '<i>Scaeva selenitica</i> (gele halvemaanzwever)': 1537717
        },
        '<i>Sericomyia</i> (veenzweefvliegen)': {
        '<i>Sericomyia lappona</i> (donkere veenzweefvlieg)': 1538831,
        '<i>Sericomyia silentis</i> (hoogveenzweefvlieg)': 1538798
        },
        '<i>Sphaerophoria</i> (langlijven)': 1539106,
        '<i>Syritta pipiens</i> (menuetzweefvlieg)': 1544431,
        '<i>Syrphus</i> (bandzweefvliegen)': 1444606,
        '<i>Volucella</i> (reuzen)': {
            '<i>Volucella bombylans</i> (hommelreus)': 1541763,
            other: 1483491
        },
        '<i>Xylota/Chalcosyrphus</i> (bladlopers)': '1541512,1533584',
        other: 6920
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

function isExcluded (taxon, exclude) {
    const parents = ['kingdomKey', 'phylumKey', 'classKey', 'orderKey', 'familyKey', 'genusKey', 'speciesKey']
    return exclude.some(id => parents.some(parent => taxon[parent].toString() === id))
}

const selection = document.getElementById('selection')
const taxaSelect = document.getElementById('taxaSelect')
const guess = document.getElementById('guess')
const giveup = document.getElementById('giveup')
const taxaGuess = document.getElementById('taxaGuess')

const licenses = ['CC_BY_4_0', 'CC_BY_NC_4_0', 'CC0_1_0']

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

        const url = new URL('https://api.gbif.org/v1/occurrence/search')
        const options = {
            mediaType: 'StillImage',
            taxonKey: taxon.split(','),
            country: 'NL',
            license: licenses,
            // photo_license: licenses,
            occurrenceStatus: 'PRESENT',
            // locale: 'nl'
        }

        const urlOptions = new URLSearchParams()
        for (const key in options) {
            for (const value of [].concat(options[key])) {
                urlOptions.append(key, value)
            }
        }

        url.search = urlOptions.toString()

        const data = await fetch(url).then(response => response.json())

        let results = data.results ?? []
        results = results.filter(result => !isExcluded(result, exclude))

        if (results.length === 0) {
            return undefined
        }
        cache[key] = results
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
          name: data[data.taxonRank.toLowerCase()]
        }
    }

    // Update images
    const figure = document.createElement('figure')
    const container = document.createElement('div')
    for (const photo of data.media) {
        if (photo.type !== 'StillImage') {
            continue
        }

        const figure = document.createElement('figure')

        const img = document.createElement('img')
        img.src = photo.identifier.replace('original', 'large')
        figure.appendChild(img)

        const figcaption = document.createElement('figcaption')
        figcaption.innerText = `© ${photo.rightsHolder} (${photo.license})`
        figure.appendChild(figcaption)

        container.appendChild(figure)
    }
    figure.appendChild(container)
    const figcaption = document.createElement('figcaption')
    const a = document.createElement('a')
    a.href = `https://www.gbif.org/occurrence/${data.key}`
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
