const guessData = {}
const cache = {}

const data = {
    Monocotyledoneae: {
        Poaceae: 'Q43238',
        Cyperaceae: {
            Carex: 'Q158501',
            other: 'Q155843',
        },
        Juncaceae: {
            Juncus: 'Q158480',
            Luzula: 'Q157588',
            other: 'Q156169'
        }
    },
    Dicotyledoneae: {
        Ranunculaceae: {
            Ranunculus: 'Q146130',
            other: 'Q145869'
        },
        Superrosids: {
            Fabiden: {
                Fabaceae: {
                    Trifolium: 'Q101538',
                    Vicia: 'Q147337',
                    other: 'Q44448'
                },
                Rosaceae: {
                    Rubus: 'Q602740',
                    Prunus: 'Q190545',
                    Potentilla: 'Q156512',
                    other: 'Q46299'
                }
            },
            Brassicaceae: {
                Cardamine: 'Q147299',
                other: 'Q156888'
            }
        },
        Superasterids: {
            Lamiiden: {
                Boraginaceae: {
                    Myosotis: 'Q147149',
                    other: 'Q26568'
                },
                Lamiaceae: {
                    Lamium: 'Q146675',
                    other: 'Q53476'
                }
            },
            Campanuliden: {
                Caryophyllales: {
                    Caryophyllaceae: {
                        Silene: 'Q116209',
                        Stellaria: 'Q156694',
                        Cerastium: 'Q157483',
                        other: 'Q25995'
                    },
                    Polygonaceae: {
                        Rumex: 'Q157264',
                        Persicaria: 'Q159000',
                        other: 'Q156117'
                    }
                },
                Asteraceae: {
                    Cirsium: 'Q1638558',
                    Centaurea: 'Q156414',
                    other: 'Q25400'
                },
                Apiaceae: 'Q145794'
            }
        }
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
    return randomSample(taxa)
}

function getSparql (taxon, exclude) {
    const excludeQuery = exclude.length
        ? `MINUS {
               VALUES ?e { ${exclude.map(taxon => 'wd:' + taxon).join(' ')} }
               ?s wdt:P171+ ?e
           }`
        : ''

    return `SELECT ?t ?tName ?tLabel ?s ?sName ?sLabel ?image WHERE {
        BIND(wd:${taxon} AS ?t)
        ?t wdt:P225 ?tName .
        ?s wdt:P105 wd:Q7432 .
        ?s wdt:P171+ ?t .
        ${excludeQuery}
        ?s wdt:P225 ?sName .
        ?s wdt:P18 ?image .
        FILTER REGEX(STR(?image), "\.(jpg|jpeg|png|gif)$", "i")
        SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
    } LIMIT 10`
}

const selection = document.getElementById('selection')
const taxaSelect = document.getElementById('taxaSelect')
const guess = document.getElementById('guess')
const giveup = document.getElementById('giveup')
const taxaGuess = document.getElementById('taxaGuess')

async function getGuessData (taxon) {
    if (!(taxon in cache) || cache[taxon].length === 0) {
        const exclude = []
        const [other] = taxaPaths[taxon].slice(-1)
        if (other === 'other') {
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
        console.log(taxon, exclude)

        const url = wdk.sparqlQuery(getSparql(taxon, exclude))
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

function createTaxonLabel (taxon) {
    const base = `<i>${taxon.name}</i>`
    return taxon.name === taxon.label ? base : base + ` (${taxon.label})`
}

function createSpeciesLabel (species, taxon) {
    return `This is a ${createTaxonLabel(species)}, part of ${createTaxonLabel(taxon)}`
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
    const { t: taxon, s: species } = guessData.data
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
    const { t: taxon, s: species } = guessData.data
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

appendTaxaToForm(taxa, taxaSelect, 'checkbox')
appendTaxaToForm(taxa, taxaGuess, 'radio')
