(function(){

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
            // Cyclestherida: 'Q21217579', // no results
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
                            Blattaria: 'Q139689', // (Blattidae), other 'Q25309'
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

class Queue {
  constructor () {
    this.queue = []
  }
  
  fetchId (id) {
    return new Promise((resolve, reject) => {
      this.queue.push([id, resolve, reject])
    })
  }

  flush () {
    const queue = this.queue.splice(0, this.queue.length).reduce((queue, data) => {
      queue[data[0]] = data
      return queue
    }, {})

    const url = wdk.sparqlQuery(`SELECT ?wd ?inat WHERE {
      VALUES ?wd { ${Object.keys(queue).map(id => 'wd:' + id).join(' ')} }
      ?wd wdt:P3151 ?inat.
    }`)

    fetch(url)
      .then(response => response.json())
      .then(json => {
        for (const { wd, inat } of wdk.simplify.sparqlResults(json)) {
          queue[wd][1](inat)
        }
      })
      .catch(e => {
        for (const id in queue) {
          queue[id][2](e)
        }
      })
  }
}

const queue = new Queue()

function makePromises (data) {
  for (const taxon in data) {
    if (typeof data[taxon] === 'object') {
      makePromises(data[taxon])
    } else {
      queue.fetchId(data[taxon]).then(id => { data[taxon] = id })
    }
  }
}

makePromises(data)
queue.flush()

console.log(data)

})()
