const guessData = {}
const cache = {}

const data = {
  Chelicerata: {
    Pycnogonida: '47825',
    Xiphosura: '48309',
    Arachnida: {
      Scorpionida: '48894',
      Opiliones: '47367',
      Pseudoscorpionida: '172373',
      Aranea: '47118',
      Acari: {
        Acariformes: '129763',
        Parasitiformes: {
          Mesostigmata: '52790',
          Ixodida: '51672'
        }
      }
    }
  },
  Myriapoda: {
    Diplopoda: '47735',
    Pauropoda: '83243',
    Symphyla: '84638',
    Chilopoda: '49556'
  },
  Crustacea: {
    Branchiopoda: {
      Anostraca: '119123',
      // Cyclestherida: '774761', // no results
      Notostraca: '60396',
      Cladocera: '199509'
    },
    Branchiura: '372778',
    Copepoda: '121643',
    Ostracoda: '68764',
    Theostraca: {
      Cirripeda: {
        Sessilia: '47662',
        Pedunculata: '1040847', // <- Lepadiformes (Q3689)
        Rhizocephala: '358105'
      }
    },
    Malacostraca: {
      Isopoda: '48147',
      Amphipoda: '47628',
      Mysidacea: '85532',
      Decapoda: {
        Caridea: '342912',
        Astacidea: '311310',
        Anomura: '123825',
        Brachyura: '121639'
      }
    }
  },
  Hexapoda: {
    Entognatha: {
      Collembola: '49470',
      Diplura: '56215',
      Protura: '83242'
    },
    Insecta: {
      Apterygota: {
        Archaeognatha: '461443',
        Zygentoma: '48301'
      },
      Pterygota: {
        Exopterygota: {
          Paleoptera: {
            Ephemoptera: '48011',
            Odonata: {
              Zygoptera: '47928',
              Anisoptera: '47927'
            }
          },
          Neoptera: {
            Plecoptera: '47504',
            Dermaptera: '47793',
            Orthoptera: {
              Ensifera: {
                Tettigoniidae: '48124',
                Gryllidae: '52884',
                Gryllotalpidae: '71220'
              },
              Caelifera: {
                Acrididae: '47649',
                Tetrigidae: '57658'
              }
            },
            Dictyoptera: {
              Blattaria: '82232',
              Isoptera: '118903',
              Mantodea: '48112'
            },
            Psocoptera: '83187',
            Phthiraptera: '152843',
            Thysanoptera: '83201',
            Hemiptera: {
              Auchenorrhyncha: '125816',
              Heteroptera: '61267',
              Sternorrhyncha: '334037'
            }
          }
        },
        Endopterygota: {
          Coleoptera: {
            Adephaga: '340471',
            Polyphaga: '71130'
          },
          Rhaphidioptera: '47794',
          Megaloptera: '47864',
          Planipennia: {
            Chrysopidae: '52425',
            Myrmeleonidae: '49358'
          },
          Hymenoptera: {
            Symphyta: '84643',
            Aculeata: '326777'
          },
          Strepsiptera: '83202',
          Mecoptera: '372864',
          Siphonaptera: '83204',
          Diptera: {
            Nematocera: '154259',
            Brachycera: {
              Orthorrhapha: '372865',
              Cyclorrhapha: '372853'
            }
          },
          Trichoptera: '62164',
          Lepidoptera: '47157'
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

    const taxon = randomSample(taxa)
    const lifestage = taxaPaths[taxon].includes('Endopterygota') || taxaPaths[taxon].includes('Paleoptera') ? form.lifestage.value : ''
    return [taxon, lifestage]
}

const selection = document.getElementById('selection')
const taxaSelect = document.getElementById('taxaSelect')
const guess = document.getElementById('guess')
const giveup = document.getElementById('giveup')
const taxaGuess = document.getElementById('taxaGuess')

const licenses = ['cc-by', 'cc-by-nc', 'cc0', 'cc-by-sa', 'cc-by-nc-sa']

async function getGuessData (taxon, lifestage) {
    const key = taxon + '|' + lifestage

    if (!(key in cache) || cache[key].length === 0) {
        const url = new URL('http://api.inaturalist.org/v1/observations')
        const options = {
            photos: true,
            taxon_id: taxon,
            license: licenses,
            photo_license: licenses,
            quality_grade: 'research',
            per_page: 10
        }
        if (lifestage) {
            options.term_id = 1
            options.term_value_id = lifestage
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
    const [taxon, lifestage] = getTaxon(selection)
    const taxonName = taxaPaths[taxon].slice(-1)[0]
    const data = await getGuessData(taxon, lifestage)

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

if (params.has('lifestage')) {
    selection.lifestage.value = params.get('lifestage')
}

appendTaxaToForm(taxa, taxaSelect, 'checkbox')
appendTaxaToForm(taxa, taxaGuess, 'radio')
