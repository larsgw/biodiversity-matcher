const guessData = {}
const cache = {}

const data = {
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
    },
    Hexapoda: {
        Entognatha: {
            Collembola: 'Q190701',
            Diplura: 'Q221563',
            Protura: 'Q271631',
        },
        Insecta: {
            Apterygota: {
                Archaeognatha: 'Q637179',
                Zygentoma: 'Q30111',
            },
            Pterygota: {
                Exopterygota: {
                    Paleoptera: {
                        Ephemoptera: 'Q174273',
                        Odonata: {
                            Zygoptera: 'Q230502',
                            Anisoptera: 'Q80066',
                        }
                    },
                    Neoptera: {
                        Plecoptera: 'Q203547',
                        Dermaptera: 'Q13676',
                        Orthoptera: {
                            Ensifera: {
                                Tettigoniidae: 'Q727919',
                                Gryllidae: 'Q47328',
                                Gryllotalpidae: 'Q199765'
                            },
                            Caelifera: {
                                Acrididae: 'Q7618284',
                                Tetrigidae: 'Q768200'
                            }
                        },
                        Dictyoptera: {
                            // Blattaria: 'Q25309',
                            Isoptera: 'Q546583',
                            Mantodea: 'Q131250'
                        },
                        Psocoptera: 'Q271623',
                        Phthiraptera: 'Q6481228',
                        Thysanoptera: 'Q185628',
                        Hemiptera: {
                            Auchenorrhyncha: 'Q202890',
                            Heteroptera: 'Q27191',
                            Sternorrhyncha: 'Q621840'
                        }
                    }
                },
                Endopterygota: {
                    Coleoptera: {
                        Adephaga: 'Q131060',
                        Polyphaga: 'Q147877'
                    },
                    Rhaphidioptera: 'Q217516',
                    Megaloptera: 'Q194025',
                    Planipennia: {
                        Chrysopidae: 'Q623727',
                        Myrmeleonidae: 'Q231439'
                    },
                    Hymenoptera: {
                        Symphyta: 'Q615290',
                        // Parasitica: 'Q387031',
                        Aculeata: 'Q1251421'
                    },
                    Strepsiptera: 'Q327144',
                    Mecoptera: 'Q205301',
                    Siphonaptera: 'Q388162',
                    Diptera: {
                        Nematocera: 'Q27605',
                        Brachycera: {
                            // Orthorrhapha: ,
                            Cyclorrhapha: 'Q14857444'
                        }
                    },
                    Trichoptera: 'Q184616',
                    Lepidoptera: 'Q28319'
                }
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

function getSparql (taxon) {
    return `SELECT ?t ?tName ?tLabel ?s ?sName ?sLabel ?image WHERE {
        BIND(wd:${taxon} AS ?t)
        ?t wdt:P225 ?tName .
        ?s wdt:P105 wd:Q7432 .
        ?s wdt:P171+ ?t .
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
