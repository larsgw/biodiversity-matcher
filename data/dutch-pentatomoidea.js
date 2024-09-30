import { initialize } from '../src/index.js'

initialize({
  metadata: {
    title: { en: 'Shield bugs of the Netherlands', nl: 'Schildwantsen van Nederland' },
    description: { en: 'Learn the shield bugs of the Netherlands!', nl: 'Leer de schildwantsen van Nederland!' },
    languages: ['en', 'nl']
  },
  provider: {
    type: 'gbif',
    defaultOptions: {
      licenses: ['CC_BY_4_0', 'CC_BY_NC_4_0', 'CC0_1_0']
    }
  },
  settings: {
    lifestage_exopterygota: {
      id: 'lifestage',
      label: { en: 'Life stage', nl: 'Levensstadium' },
      options: [
        { id: 'any', label: { en: 'Any', nl: 'alle' } },
        { id: 'nymph', label: { en: 'Nymph', nl: 'nimf' } },
        { id: 'adult', label: { en: 'Adult', nl: 'imago' } }
      ],
      value: 'any'
    }
  },
  taxa: [
    {
      scientificName: 'Acanthosomatidae',
      taxonRank: 'family',
      children: [
        {
          scientificName: 'Acanthosoma haemorrhoidale',
          taxonRank: 'species',
          taxa: 5866246,
          vernacularName: { en: 'Hawthorn Shieldbug', nl: 'meidoornkielwants' }
        },
        {
          scientificName: 'Cyphostethus tristriatus',
          taxonRank: 'species',
          taxa: 6096805,
          vernacularName: { en: 'Juniper Shieldbug', nl: 'jeneverbeskielwants' }
        },
        {
          scientificName: 'Elasmostethus',
          taxonRank: 'genus',
          taxa: 2079269,
          vernacularName: { nl: 'berkenkielwants/kleine kielwants' }
        },
        {
          scientificName: 'Elasmucha',
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Elasmucha ferrugata',
              taxonRank: 'species',
              taxa: 2079261,
              vernacularName: { nl: 'bosbeskielwants' }
            },
            {
              scientificName: 'Elasmucha fieberi',
              taxonRank: 'species',
              taxa: 4485991,
              vernacularName: { nl: 'veenkielwants' }
            },
            {
              scientificName: 'Elasmucha grisea',
              taxonRank: 'species',
              taxa: 4485987,
              vernacularName: { en: 'Parent Bug', nl: 'berkenwants' }
            }
          ]
        }
      ],
      vernacularName: { en: 'shield bugs', nl: 'kielwantsen' }
    },
    {
      scientificName: 'Cydnidae',
      taxonRank: 'family',
      children: [
        {
          scientificName: 'Adomerus biguttatus',
          taxonRank: 'species',
          taxa: 4486134,
          vernacularName: { en: 'Cow Wheat Shieldbug', nl: 'hengelgraafwants' }
        },
        {
          scientificName: 'Byrsinus flavicornis',
          taxonRank: 'species',
          taxa: 4486103,
          vernacularName: { nl: 'kleine borstelige graafwants' }
        },
        {
          scientificName: 'Cydnus aterrimus',
          taxonRank: 'species',
          taxa: 2078815,
          vernacularName: { nl: 'wolfsmelkgraafwants' }
        },
        {
          scientificName: 'Legnotus',
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Legnotus limbosus',
              taxonRank: 'species',
              taxa: 5758810,
              vernacularName: { nl: 'kleefkruidgraafwants' }
            },
            {
              scientificName: 'Legnotus picipes',
              taxonRank: 'species',
              taxa: 5758812,
              vernacularName: { nl: 'walstrograafwants' }
            }
          ]
        },
        {
          scientificName: 'Microporus nigrita',
          taxonRank: 'species',
          taxa: 5758803,
          vernacularName: { en: 'Burrower Bug', nl: 'grote borstelige graafwants' }
        },
        {
          scientificName: 'Ochetostethus',
          taxonRank: 'genus',
          taxa: 4404611,
          vernacularName: { nl: 'dwerggraafwants/obscure graafwants' }
        },
        {
          scientificName: 'Sehirus',
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Sehirus luctuosus',
              taxonRank: 'species',
              taxa: 4486163,
              vernacularName: { en: 'Forget-me-not Shieldbug', nl: 'vergeet-mij-nietgraafwants' }
            },
            {
              scientificName: 'Sehirus morio',
              taxonRank: 'species',
              taxa: 2078781,
              vernacularName: { nl: 'ossentonggraafwants' }
            }
          ]
        },
        {
          scientificName: 'Tritomegas',
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Tritomegas bicolor',
              taxonRank: 'species',
              taxa: 5758805,
              vernacularName: { en: 'Pied Shieldbug', nl: 'dovenetelgraafwants' }
            },
            {
              scientificName: 'Tritomegas sexmaculatus',
              taxonRank: 'species',
              taxa: 5758809,
              vernacularName: { en: "Rambur's Pied Shieldbug", nl: 'ballotegraafwants' }
            }
          ]
        }
      ],
      vernacularName: { en: 'burrowing bugs', nl: 'graafwantsen' }
    },
    {
      scientificName: 'Pentatomidae',
      taxonRank: 'family',
      children: [
        {
          scientificName: 'Asopinae',
          vernacularName: { en: 'predatory stink bugs', nl: 'roofschildwantsen' },
          taxonRank: 'subfamily',
          children: [
            {
              scientificName: 'Arma custos',
              taxonRank: 'species',
              taxa: 4485971,
              vernacularName: { nl: 'snuitkeverschildwants' }
            },
            {
              scientificName: 'Jalla dumosa',
              taxonRank: 'species',
              taxa: 5758771,
              vernacularName: { nl: 'rupsenschildwants' }
            },
            {
              scientificName: 'Picromerus bidens',
              taxonRank: 'species',
              taxa: 5160015,
              vernacularName: { en: 'Spined Shieldbug', nl: 'tweetandschildwants' }
            },
            {
              scientificName: 'Pinthaeus sanguinipes',
              taxonRank: 'species',
              taxa: 4485978,
              vernacularName: { nl: 'bloedpootschildwants' }
            },
            {
              scientificName: 'Rhacognathus punctatus',
              taxonRank: 'species',
              taxa: 2078996,
              vernacularName: { en: 'Heather Bug', nl: 'heideschildwants' }
            },
            {
              scientificName: 'Troilus luridus',
              taxonRank: 'species',
              taxa: 4485973,
              vernacularName: { en: 'Bronze Shieldbug', nl: 'buikspitsschildwants' }
            },
            {
              scientificName: 'Zicrona caerulea',
              taxonRank: 'species',
              taxa: 2078942,
              vernacularName: { en: 'Blue Shieldbug', nl: 'blauwe schildwants' }
            }
          ]
        },
        {
          scientificName: 'Pentatominae',
          taxonRank: 'subfamily',
          children: [
            {
              scientificName: 'Aelia',
              taxonRank: 'genus',
              children: [
                {
                  scientificName: 'Aelia acuminata',
                  taxonRank: 'species',
                  taxa: 2079123,
                  vernacularName: { en: "Bishop's Mitre", nl: 'grote mijterschildwants' }
                },
                {
                  scientificName: 'Aelia klugii',
                  taxonRank: 'species',
                  taxa: 6096804,
                  vernacularName: { nl: 'kleine mijterschildwants' }
                }
              ],
              vernacularName: { nl: 'mijterschildwantsen' }
            },
            {
              scientificName: 'Carpocoris',
              taxonRank: 'genus',
              children: [
                {
                  scientificName: 'Carpocoris fuscispinus',
                  taxonRank: 'species',
                  taxa: 4485800,
                  vernacularName: { nl: 'beemdkroonschildwants' }
                },
                {
                  scientificName: 'Carpocoris purpureipennis',
                  taxonRank: 'species',
                  taxa: 4485798,
                  vernacularName: { nl: 'knoopkruidschildwants' }
                }
              ]
            },
            {
              scientificName: 'Chlorochroa',
              taxonRank: 'genus',
              children: [
                {
                  scientificName: 'Chlorochroa juniperina',
                  taxonRank: 'species',
                  taxa: 4485816,
                  vernacularName: { nl: 'jeneverbesschildwants' }
                },
                {
                  scientificName: 'Chlorochroa pinicola',
                  taxonRank: 'species',
                  taxa: 4485821,
                  vernacularName: { nl: 'dennenschildwants' }
                }
              ]
            },
            {
              scientificName: 'Dolycoris baccarum',
              taxonRank: 'species',
              taxa: 4485824,
              vernacularName: { en: 'Sloe Bug', nl: 'bessenwants' }
            },
            {
              scientificName: 'Dyroderes umbraculatus',
              taxonRank: 'species',
              taxa: 4485845,
              vernacularName: { nl: 'kleefkruidschildwants' }
            },
            {
              scientificName: 'Eurydema',
              taxonRank: 'genus',
              children: [
                {
                  scientificName: 'Eurydema dominulus',
                  taxonRank: 'species',
                  taxa: 4485896,
                  vernacularName: { nl: 'scharlaken schildwants' }
                },
                {
                  scientificName: 'Eurydema oleracea',
                  taxonRank: 'species',
                  taxa: 4485898,
                  vernacularName: { en: 'Cabbage Bug', nl: 'koolwants' }
                },
                {
                  scientificName: 'Eurydema ornata',
                  taxonRank: 'species',
                  taxa: 4485906,
                  vernacularName: { nl: 'sierlijke schildwants' }
                }
              ]
            },
            {
              scientificName: 'Eysarcoris',
              taxonRank: 'genus',
              children: [
                {
                  scientificName: 'Eysarcoris aeneus',
                  taxonRank: 'species',
                  taxa: 4485955,
                  vernacularName: { en: 'New Forest Shieldbug', nl: 'weegbreeschildwants' }
                },
                {
                  scientificName: 'Eysarcoris venustissimus',
                  taxonRank: 'species',
                  taxa: 4485952,
                  vernacularName: { en: 'Woundwort Shieldbug', nl: 'andoornschildwants' }
                }
              ]
            },
            {
              scientificName: 'Halyomorpha halys',
              taxonRank: 'species',
              taxa: 4485843,
              vernacularName: { en: 'Brown Marmorated Stink Bug', nl: 'bruingemarmerde schildwants' }
            },
            {
              scientificName: 'Holcogaster fibulata',
              taxonRank: 'species',
              taxa: 7500241,
              vernacularName: { nl: 'bonte dennenschildwants' }
            },
            {
              scientificName: 'Holcostethus sphacelatus',
              taxonRank: 'species',
              taxa: 2079190,
              vernacularName: { nl: 'toortsschildwants' }
            },
            {
              scientificName: 'Neottiglossa pusilla',
              taxonRank: 'species',
              taxa: 4485936,
              vernacularName: { nl: 'grasschildwants' }
            },
            {
              scientificName: 'Nezara viridula',
              taxonRank: 'species',
              taxa: 2078852,
              vernacularName: { en: 'green stink bug', nl: 'zuidelijke groene schildwants' }
            },
            {
              scientificName: 'Palomena',
              taxonRank: 'genus',
              children: [
                {
                  scientificName: 'Palomena prasina',
                  taxonRank: 'species',
                  taxa: 4485776,
                  vernacularName: { en: 'Green Shieldbug', nl: 'groene schildwants' }
                },
                {
                  scientificName: 'Palomena viridissima',
                  taxonRank: 'species',
                  taxa: 4485774,
                  vernacularName: { nl: 'groene veldschildwants' }
                }
              ]
            },
            {
              scientificName: 'Pentatoma rufipes',
              taxonRank: 'species',
              taxa: 5758737,
              vernacularName: { en: 'Forest Bug', nl: 'roodpootschildwants' }
            },
            {
              scientificName: 'Peribalus strictus',
              taxonRank: 'species',
              taxa: 6096794,
              vernacularName: { nl: 'zuidelijke schildwants' }
            },
            {
              scientificName: 'Piezodorus lituratus',
              taxonRank: 'species',
              taxa: 2078821,
              vernacularName: { nl: 'bremschildwants' }
            },
            {
              scientificName: 'Rhaphigaster nebulosa',
              taxonRank: 'species',
              taxa: 5758736,
              vernacularName: { nl: 'grauwe schildwants' }
            },
            {
              scientificName: 'Rubiconia intermedia',
              taxonRank: 'species',
              taxa: 4485796,
              vernacularName: { nl: 'bosbesschildwants' }
            },
            {
              scientificName: 'Sciocoris',
              taxonRank: 'genus',
              children: [
                {
                  scientificName: 'Sciocoris cursitans',
                  taxonRank: 'species',
                  taxa: 2079253,
                  vernacularName: { en: 'Sandrunner', nl: 'zandschildwants' }
                },
                {
                  scientificName: 'Sciocoris homalonotus',
                  taxonRank: 'species',
                  taxa: 4485866,
                  vernacularName: { nl: 'platte zandschildwants' }
                }
              ]
            },
            {
              scientificName: 'Stagonomus bipunctatus',
              taxonRank: 'species',
              taxa: 5758763,
              vernacularName: { nl: 'mannetjesereprijsschildwants' }
            }
          ]
        },
        {
          scientificName: 'Podopinae',
          vernacularName: { en: 'turtle bugs' },
          taxonRank: 'subfamily',
          children: [
            {
              scientificName: 'Graphosoma italicum',
              taxonRank: 'species',
              taxa: 7437802,
              vernacularName: { nl: 'pyjamaschildwants' }
            },
            {
              scientificName: 'Podops inunctus',
              taxonRank: 'species',
              taxa: 4485704,
              vernacularName: { en: 'Turtle Bug', nl: 'haakjesschildwants' }
            }
          ]
        }
      ],
      vernacularName: { en: 'shield bugs', nl: 'schildwantsen' }
    },
    {
      scientificName: 'Plataspidae',
      taxonRank: 'family',
      children: [
        {
          scientificName: 'Coptosoma scutellatum',
           taxonRank: 'species',
           taxa: 6096723,
           vernacularName: { nl: 'kogelwants' }
        }
      ],
      vernacularName: { en: '', nl: 'kogelwantsen' }
    },
    {
      scientificName: 'Scutelleridae',
      taxonRank: 'family',
      children: [
        {
          scientificName: 'Eurygaster',
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Eurygaster austriaca',
              taxonRank: 'species',
              taxa: 5758791,
              vernacularName: { nl: 'grote pantserwants' }
            },
            {
              scientificName: 'Eurygaster maura',
              taxonRank: 'species',
              taxa: 5758789,
              vernacularName: { nl: 'schaarse pantserwants' }
            },
            {
              scientificName: 'Eurygaster testudinaria',
              taxonRank: 'species',
              taxa: 5758794,
              vernacularName: { en: 'Tortoise Bug', nl: 'gewone pantserwants' }
            }
          ]
        },
        {
          scientificName: 'Odontoscelis',
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Odontoscelis fuliginosa',
              taxonRank: 'species',
              taxa: 5758780,
              vernacularName: { en: 'Greater Streaked Shieldbug', nl: 'grote behaarde pantserwants' }
            },
            {
              scientificName: 'Odontoscelis lineola',
              taxonRank: 'species',
              taxa: 5758782,
              vernacularName: { nl: 'kleine behaarde pantserwants' }
            }
          ]
        },
        {
          scientificName: 'Phimodera humeralis',
          taxonRank: 'species',
          taxa: 4486030,
          vernacularName: { nl: 'zandzeggepantserwants' }
        }
      ],
      vernacularName: { en: 'jewel bugs', nl: 'pantserwantsen' }
    },
    {
      scientificName: 'Thyreocoridae',
      taxonRank: 'family',
      children: [
        {
          scientificName: 'Thyreocoris scarabaeoides',
           taxonRank: 'species',
           taxa: 4486004,
           vernacularName: { nl: 'viooltjeswants' }
        }
      ],
      vernacularName: { en: '', nl: 'viooltjeswantsen' }
    }
  ]
})
