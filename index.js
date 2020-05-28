const guessData = {}

const taxa = {
    Chelicerata: {
        Pycnogonida: 'Q19106',
        Xiphosura: 'Q19430',
        Arachnida: {
            Scorpionida: 'Q30749508',
            Opiliones: 'Q19116',
            Pseudoscorpionida: 'Q35135521',
            Aranea: 'Q29024640',
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
            Cyclestherida: 'Q21217579',
            Notostraca: 'Q3344541',
            Cladocera: 'Q391240'
        },
        Branchiura: 'Q841641',
        Copepoda: 'Q189973',
        Ostracoda: 'Q276412',
        // Theostraca: {
        //     Cirripeda: {
        //         Sessilia: ,
        //         Pedunculata: ,
        //         Rhizocephala:
        //     }
        // },
        // Malacostraca: {
        //     Isopoda: ,
        //     Amphipoda: ,
        //     Mysidacea: ,
        //     Decapoda: {
        //         Caridea: ,
        //         Astacidea: ,
        //         Anomura: ,
        //         Brachyura:
        //     }
        // }
    },
    // Hexapoda:
}

function appendTaxaToForm (taxa, element, type) {
    for (const taxon in taxa) {
        if (typeof taxa[taxon] === 'object') {
            const group = document.createElement('fieldset')
            const legend = document.createElement('legend')
            const label = document.createElement('label')
            const text = document.createTextNode(taxon)
            label.appendChild(text)
            legend.appendChild(label)
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

function getSparql (leafTaxons) {
    const taxon = randomSample(leafTaxons)
    return `SELECT ?taxon ?taxonName ?taxonLabel ?species ?speciesLabel ?image WHERE {
    BIND(wd:${taxon} AS ?taxon)
    ?taxon wdt:P225 ?taxonName .
    ?species wdt:P171+ ?taxon .
    ?species wdt:P105 wd:Q7432 .
    ?species wdt:P18 ?image .
    SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
} LIMIT 10`
}

selection.onsubmit = async function (e) {
    e.preventDefault()
    selection.disabled = true
    const taxaSelection = Array.prototype.map.call(selection.taxon, input => input.value)
    const url = wdk.sparqlQuery(getSparql(taxaSelection))
    const json = await fetch(url).then(response => response.json())
    const data = randomSample(wdk.simplify.sparqlResults(json))

    guessData.data = data
    const img = document.createElement('img')
    img.src = data.image
    if (selection.images.firstChild) {
        selection.images.removeChild(selection.images.firstChild);
    }
    selection.images.appendChild(img)
}

guess.onsubmit = function (e) {
    e.preventDefault()
    const { taxon, species } = guessData.data
    if (taxon.value === guess.taxon.value) {
        guess.result.innerHTML = `That is correct!
This is a <i>${species.label}</i>, part of <i>${taxon.name}</i>`
        if (taxon.name !== taxon.label) {
            guess.result.innerHTML += ` (${taxon.label})`
        }
    } else {
        guess.result.innerText = `Guess again.`
    }
}
