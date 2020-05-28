const guessData = {}
const cache = {}

const taxa = {
    Chelicerata: {
        Pycnogonida: 'Q19106',
        Xiphosura: 'Q19430',
        Arachnida: {
            Scorpionida: 'Q19125', // (Scorpiones), other 'Q30749508'
            Opiliones: 'Q19116',
            Pseudoscorpionida: 'Q19119', // (Pseudoscorpiones), other 'Q35135521'
            Aranea: 'Q1357',
            Acari: {
                Acariformes: 'Q1341457',
                Parasitiformes: {
                    Mesostigmata: 'Q1240844',
                    Ixodida: 'Q10304508'
                }
            }
        }
    },
    Myriapoda: {
        Diplopoda: 'Q167367',
        Pauropoda: 'Q217512',
        Symphyla: 'Q244147',
        Chilopoda: 'Q43447'
    },
    Crustacea: {
        Branchiopoda: {
            Anostraca: 'Q853383',
            Cyclestherida: 'Q768012', // (Diplostraca), other 'Q21217579'
            Notostraca: 'Q3344541',
            Cladocera: 'Q391240'
        },
        Branchiura: 'Q841641',
        Copepoda: 'Q189973',
        Ostracoda: 'Q276412',
        Theostraca: {
            Cirripeda: {
                Sessilia: 'Q3175015',
                Pedunculata: 'Q3689',
                Rhizocephala: 'Q2341208'
            }
        },
        Malacostraca: {
            Isopoda: 'Q206338',
            Amphipoda: 'Q193418',
            Mysidacea: 'Q13411080', // (Mysida), other 'Q1208947'
            Decapoda: {
                Caridea: 'Q80117',
                Astacidea: 'Q929163',
                Anomura: 'Q526867',
                Brachyura: 'Q40802'
            }
        }
    }
}

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
                })
                label.appendChild(input)
                const text = document.createTextNode(taxon)
                label.appendChild(text)
                legend.appendChild(label)
            } else {
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

appendTaxaToForm(taxa, taxaSelect, 'checkbox')
appendTaxaToForm(taxa, taxaGuess, 'radio')

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

function getSparql (taxon) {
    return `SELECT ?taxon ?taxonName ?taxonLabel ?species ?speciesLabel ?image WHERE {
        BIND(wd:${taxon} AS ?taxon)
        ?taxon wdt:P225 ?taxonName .
        ?species wdt:P171+ ?taxon .
        ?species wdt:P105 wd:Q7432 .
        ?species wdt:P18 ?image .
        FILTER REGEX(STR(?image), "\.(jpg|jpeg|png|gif)$", "i")
        SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
    } LIMIT 10`
}

async function getGuessData (taxon) {
    if (!(taxon in cache) || cache[taxon].length === 0) {
        const url = wdk.sparqlQuery(getSparql(taxon))
        const json = await fetch(url).then(response => response.json())
        const data = wdk.simplify.sparqlResults(json)
        if (data.length === 0) {
            console.log(taxon)
        }
        cache[taxon] = data
    }

    const guessData = randomSample(cache[taxon])
    cache[taxon].splice(cache[taxon].indexOf(guessData), 1)

    return guessData
}

async function getImageData (image) {
    const filename = decodeURIComponent(image.replace(/^.+\//, ''))
    const url = new URL('https://commons.wikimedia.org/w/api.php')
    url.search = new URLSearchParams({
        action: 'query',
        titles: `File:${filename}`,
        prop: 'imageinfo',
        iiprop: 'url|extmetadata',
        format: 'json',
        origin: '*'
    }).toString()
    return fetch(url.href)
        .then(response => response.json())
        .then(response => Object.values(response.query.pages)[0].imageinfo[0])
}

function createCredits (data, element) {
    if (data.extmetadata.Artist) {
        element.innerHTML = data.extmetadata.Artist.value
    }

    element.appendChild(document.createTextNode(' via '))
    const link = document.createElement('a')
    link.href = data.descriptionurl
    link.innerText = 'Wikimedia'
    element.appendChild(link)
    element.appendChild(document.createTextNode(' / '))

    const license = document.createElement('a')
    if (data.extmetadata.LicenseUrl) {
        license.href = data.extmetadata.LicenseUrl.value
    }
    if (data.extmetadata.LicenseShortName) {
        license.innerText = data.extmetadata.LicenseShortName.value
    } else {
        license.innerText = 'unknown'
    }
    element.appendChild(license)
}

selection.onsubmit = async function (e) {
    e.preventDefault()
    const taxon = getTaxon(selection)
    guessData.data = await getGuessData(taxon)
    guessData.imageData = await getImageData(guessData.data.image)

    const figure = document.createElement('figure')
    const img = document.createElement('img')
    img.src = guessData.data.image.replace(/^http:/, 'https:')
    figure.appendChild(img)
    const caption = document.createElement('caption')
    createCredits(guessData.imageData, caption)
    figure.appendChild(caption)

    if (selection.images.firstChild) {
        selection.images.removeChild(selection.images.firstChild)
    }
    while (guess.result.firstChild) {
        guess.result.removeChild(guess.result.lastChild)
    }

    selection.images.appendChild(figure)
}

guess.onsubmit = function (e) {
    e.preventDefault()
    const { taxon, species } = guessData.data
    if (taxon.value === guess.taxon.value) {
        guess.result.dataset.success = true
        guess.result.innerHTML = `That is correct!
This is a <i>${species.label}</i>, part of <i>${taxon.name}</i>`
        if (taxon.name !== taxon.label) {
            guess.result.innerHTML += ` (${taxon.label})`
        }
    } else {
        guess.result.dataset.success = false
        guess.result.innerText = `Guess again.`
    }
}
