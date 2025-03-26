import { initialize } from '../src/index.js'

initialize({
  metadata: {
    title: { en: 'Orchids of the Netherlands', nl: 'Orchideeën van Nederland' },
    description: { en: 'Learn the orchids of the Netherlands!', nl: 'Leer de orchideeën van Nederland!' },
    languages: ['en', 'nl']
  },
  provider: {
    type: 'gbif',
    defaultOptions: {
      licenses: ['CC_BY_4_0', 'CC_BY_NC_4_0', 'CC0_1_0'],
      country: 'NL'
    }
  },
  taxa: [
    {
      scientificName: 'Anacamptis',
      taxonRank: 'genus',
      children: [
        {
          scientificName: 'Anacamptis morio',
          taxonRank: 'species',
          taxa: 2808565,
          vernacularName: { en: 'green-winged orchid', nl: 'harlekijn' }
        },
        {
          scientificName: 'Anacamptis pyramidalis',
          taxonRank: 'species',
          taxa: 2808330,
          vernacularName: { en: 'pyramidal orchid', nl: 'hondskruid' }
        }
      ]
    },
    {
      scientificName: 'Cephalanthera',
      taxonRank: 'genus',
      children: [
        {
          scientificName: 'Cephalanthera damasonium',
          taxonRank: 'species',
          taxa: 2795952,
          vernacularName: { en: 'white helleborine', nl: 'bleek bosvogeltje' }
        },
        {
          scientificName: 'Cephalanthera longifolia',
          taxonRank: 'species',
          taxa: 2795869,
          vernacularName: { en: 'narrow-leaved helleborine', nl: 'wit bosvogeltje' }
        },
        {
          scientificName: 'Cephalanthera rubra',
          taxonRank: 'species',
          taxa: 2795845,
          vernacularName: { en: 'red helleborine', nl: 'rood bosvogeltje' }
        }
      ],
      vernacularName: { en: 'helleborines', nl: 'bosvogeltjes' }
    },
    {
      scientificName: 'Corallorhiza',
      taxonRank: 'genus',
      children: [
        {
          scientificName: 'Corallorhiza trifida',
          taxonRank: 'species',
          taxa: 2797313,
          vernacularName: { en: 'pale coralroot', nl: 'koraalwortel' }
        }
      ],
      vernacularName: { en: 'coralroots' }
    },
    {
      scientificName: 'Dactylorhiza',
      taxonRank: 'genus',
      children: [
        {
          scientificName: 'Dactylorhiza ×aschersoniana',
          taxonRank: 'species',
          taxa: 12086247
        },
        {
          scientificName: 'Dactylorhiza elata',
          taxonRank: 'species',
          taxa: 7861697,
          vernacularName: { en: 'stately dactylorhiza', nl: 'grote rietorchis' }
        },
        {
          scientificName: 'Dactylorhiza ×grandis',
          taxonRank: 'species',
          taxa: 12129753
        },
        {
          scientificName: 'Dactylorhiza incarnata',
          taxonRank: 'species',
          taxa: 8248593,
          children: [
            {
              scientificName: 'Dactylorhiza incarnata coccinea',
              taxonRank: 'subspecies',
              taxa: 2809913,
              vernacularName: { nl: 'steenrode orchis' }
            }
          ],
          vernacularName: { en: 'early marsh-orchid', nl: 'vleeskleurige orchis' }
        },
        {
          scientificName: 'Dactylorhiza maculata',
          taxonRank: 'species',
          children: [
            {
              scientificName: 'Dactylorhiza maculata fuchsii',
              taxonRank: 'subspecies',
              taxa: 2810689,
              vernacularName: { nl: 'bosorchis' }
            },
            {
              scientificName: 'Dactylorhiza maculata maculata',
              taxonRank: 'subspecies',
              taxa: 7227967,
              vernacularName: { en: 'heath spotted orchid', nl: 'gevlekte orchis' }
            }
          ],
          vernacularName: { en: 'heath spotted orchid', nl: 'gevlekte orchis' }
        },
        {
          scientificName: 'Dactylorhiza majalis',
          taxonRank: 'species',
          children: [
            {
              scientificName: 'Dactylorhiza majalis majalis',
              taxonRank: 'subspecies',
              taxa: 2810177,
              vernacularName: { nl: 'brede orchis' }
            },
            {
              scientificName: 'Dactylorhiza majalis praetermissa',
              taxonRank: 'subspecies',
              taxa: 2810278,
              vernacularName: { nl: 'rietorchis' }
            },
            {
              scientificName: 'Dactylorhiza majalis sphagnicola',
              taxonRank: 'subspecies',
              taxa: 2810157,
              vernacularName: { nl: 'veenorchis' }
            }
          ],
          vernacularName: { nl: 'brede orchis' }
        },
        {
          scientificName: 'Dactylorhiza viridis',
          taxonRank: 'species',
          taxa: 2810284,
          vernacularName: { en: 'frog orchid', nl: 'groene nachtorchis' }
        }
      ],
      vernacularName: { en: 'marsh-orchids' }
    },
    {
      scientificName: 'Epipactis',
      taxonRank: 'genus',
      children: [
        {
          scientificName: 'Epipactis atrorubens',
          taxonRank: 'species',
          taxa: 5318958,
          vernacularName: { en: 'royal helleborine', nl: 'bruinrode wespenorchis' }
        },
        {
          scientificName: 'Epipactis helleborine',
          taxonRank: 'species',
          children: [
            {
              scientificName: 'Epipactis helleborine helleborine',
              taxonRank: 'subspecies',
              taxa: 7227849,
              vernacularName: { nl: 'brede wespenorchis' }
            },
            {
              scientificName: 'Epipactis helleborine neerlandica',
              taxonRank: 'subspecies',
              taxa: 5319091,
              vernacularName: { nl: 'duinwespenorchis' }
            }
          ],
          vernacularName: { en: 'helleborine', nl: 'brede wespenorchis' }
        },
        {
          scientificName: 'Epipactis muelleri',
          taxonRank: 'species',
          taxa: 5319022,
          vernacularName: { en: "Mueller's epipactis", nl: 'geelgroene wespenorchis' }
        },
        {
          scientificName: 'Epipactis palustris',
          taxonRank: 'species',
          taxa: 5319226,
          vernacularName: { en: 'marsh helleborine', nl: 'moeraswespenorchis' }
        }
      ],
      vernacularName: { en: 'helleborines', nl: 'wespenorchissen' }
    },
    {
      scientificName: 'Goodyera',
      taxonRank: 'genus',
      children: [
        {
          scientificName: 'Goodyera repens',
          taxonRank: 'species',
          taxa: 2840931,
          vernacularName: { en: 'lesser rattlesnake-plantain', nl: 'dennenorchis' }
        }
      ],
      vernacularName: { en: 'rattlesnake plantains' }
    },
    {
      scientificName: 'Gymnadenia',
      taxonRank: 'genus',
      children: [
        {
          scientificName: 'Gymnadenia conopsea',
          taxonRank: 'species',
          taxa: 7845022,
          vernacularName: { en: 'fragrant orchid', nl: 'grote muggenorchis' }
        },
        {
          scientificName: 'Gymnadenia densiflora',
          taxonRank: 'species',
          taxa: 2840425,
          vernacularName: { en: 'marsh fragrant-orchid', nl: 'dichte muggenorchis' }
        }
      ],
      vernacularName: { nl: 'muggenorchissen' }
    },
    {
      scientificName: 'Hammarbya',
      taxonRank: 'genus',
      children: [
        {
          scientificName: 'Hammarbya paludosa',
          taxonRank: 'species',
          taxa: 2817361,
          vernacularName: { en: 'bog orchid', nl: 'veenmosorchis' }
        }
      ]
    },
    {
      scientificName: 'Herminium',
      taxonRank: 'genus',
      children: [
        {
          scientificName: 'Herminium monorchis',
          taxonRank: 'species',
          taxa: 5310578,
          vernacularName: { en: 'musk orchid', nl: 'honingorchis' }
        }
      ]
    },
    {
      scientificName: 'Himantoglossum',
      taxonRank: 'genus',
      children: [
        {
          scientificName: 'Himantoglossum hircinum',
          taxonRank: 'species',
          taxa: 5324951,
          vernacularName: { en: 'lizard orchid', nl: 'bokkenorchis' }
        },
        {
          scientificName: 'Himantoglossum robertianum',
          taxonRank: 'species',
          taxa: 5324959,
          vernacularName: { nl: 'hyacintorchis' }
        }
      ]
    },
    {
      scientificName: 'Liparis',
      taxonRank: 'genus',
      children: [
        {
          scientificName: 'Liparis loeselii',
          taxonRank: 'species',
          taxa: 5323092,
          vernacularName: { en: 'yellow wide-lip orchid', nl: 'groenknolorchis' }
        }
      ],
      vernacularName: { en: 'widelip orchids' }
    },
    {
      scientificName: 'Neotinea',
      taxonRank: 'genus',
      children: [
        {
          scientificName: 'Neotinea ustulata',
          taxonRank: 'species',
          taxa: 2812375,
          vernacularName: { en: 'burnt-tip orchid', nl: 'aangebrande orchis' }
        }
      ]
    },
    {
      scientificName: 'Neottia',
      taxonRank: 'genus',
      children: [
        {
          scientificName: 'Neottia cordata',
          taxonRank: 'species',
          taxa: 2816213,
          vernacularName: {
            en: 'western heart-leaved twayblade',
            nl: 'kleine keverorchis'
          }
        },
        {
          scientificName: 'Neottia nidus-avis',
          taxonRank: 'species',
          taxa: 2816176,
          vernacularName: { en: "bird's-nest orchid", nl: 'vogelnestje' }
        },
        {
          scientificName: 'Neottia ovata',
          taxonRank: 'species',
          taxa: 2816250,
          vernacularName: { en: 'oval-leaved twayblade', nl: 'grote keverorchis' }
        }
      ]
    },
    {
      scientificName: 'Ophrys',
      taxonRank: 'genus',
      children: [
        {
          scientificName: 'Ophrys apifera',
          taxonRank: 'species',
          taxa: 2792998,
          vernacularName: { en: 'bee orchid', nl: 'bijenorchis' }
        },
        {
          scientificName: 'Ophrys holosericea',
          taxonRank: 'species',
          taxa: 7884558,
          vernacularName: { nl: 'hommelorchis' }
        },
        {
          scientificName: 'Ophrys insectifera',
          taxonRank: 'species',
          taxa: 2792588,
          vernacularName: { en: 'insect bearing ophrys', nl: 'vliegenorchis' }
        }
      ],
      vernacularName: { en: 'spider-orchid' }
    },
    {
      scientificName: 'Orchis',
      taxonRank: 'genus',
      children: [
        {
          scientificName: 'Orchis anthropophora',
          taxonRank: 'species',
          taxa: 2849624,
          vernacularName: { en: 'man orchid', nl: 'poppenorchis' }
        },
        {
          scientificName: 'Orchis ×hybrida',
          taxonRank: 'species',
          taxa: 2849566
        },
        {
          scientificName: 'Orchis mascula',
          taxonRank: 'species',
          taxa: 2849427,
          vernacularName: { en: 'early-purple orchid', nl: 'mannetjesorchis' }
        },
        {
          scientificName: 'Orchis militaris',
          taxonRank: 'species',
          taxa: 2809968,
          vernacularName: { en: 'soldier orchid', nl: 'soldaatje' }
        },
        {
          scientificName: 'Orchis purpurea',
          taxonRank: 'species',
          taxa: 8794742,
          vernacularName: { en: 'lady orchid', nl: 'purperorchis' }
        },
        {
          scientificName: 'Orchis simia',
          taxonRank: 'species',
          taxa: 2812415,
          vernacularName: { en: 'monkey orchid', nl: 'aapjesorchis' }
        }
      ]
    },
    {
      scientificName: 'Platanthera',
      taxonRank: 'genus',
      children: [
        {
          scientificName: 'Platanthera bifolia',
          taxonRank: 'species',
          taxa: 9213153,
          vernacularName: {
            en: 'lesser butterfly-orchid',
            nl: 'welriekende nachtorchis'
          }
        },
        {
          scientificName: 'Platanthera chlorantha',
          taxonRank: 'species',
          taxa: 2797913,
          vernacularName: { en: 'greater butterfly-orchid', nl: 'bergnachtorchis' }
        }
      ],
      vernacularName: { en: 'fringed orchid' }
    },
    {
      scientificName: 'Pseudorchis',
      taxonRank: 'genus',
      children: [
        {
          scientificName: 'Pseudorchis albida',
          taxonRank: 'species',
          taxa: 2787993,
          vernacularName: { en: 'small white orchid', nl: 'witte muggenorchis' }
        }
      ],
      vernacularName: { en: 'bog orchid' }
    },
    {
      scientificName: 'Serapias',
      taxonRank: 'genus',
      children: [
        {
          scientificName: 'Serapias vomeracea',
          taxonRank: 'species',
          taxa: 5314764,
          vernacularName: { en: 'long-lipped tongue-orchid', nl: 'lange tongorchis' }
        }
      ]
    },
    {
      scientificName: 'Spiranthes',
      taxonRank: 'genus',
      children: [
        {
          scientificName: 'Spiranthes aestivalis',
          taxonRank: 'species',
          taxa: 2805343,
          vernacularName: { en: "summer ladies'-tresses", nl: 'zomerschroeforchis' }
        },
        {
          scientificName: 'Spiranthes cernua',
          taxonRank: 'species',
          taxa: 2805420,
          vernacularName: {
            en: "dropping ladies'-tresses",
            nl: 'knikkende schroeforchis'
          }
        },
        {
          scientificName: 'Spiranthes lucida',
          taxonRank: 'species',
          taxa: 2805336,
          vernacularName: {
            en: "wide-leaved ladies'-tresses",
            nl: 'glansschroeforchis'
          }
        },
        {
          scientificName: 'Spiranthes odorata',
          taxonRank: 'species',
          taxa: 2805363,
          vernacularName: { en: "marsh ladies'-tresses" }
        },
        {
          scientificName: 'Spiranthes romanzoffiana',
          taxonRank: 'species',
          taxa: 2805404,
          vernacularName: { en: "American ladies'-tresses", nl: 'groene schroeforchis' }
        },
        {
          scientificName: 'Spiranthes spiralis',
          taxonRank: 'species',
          taxa: 2805322,
          vernacularName: { en: "autumn ladies'-tresses", nl: 'herfstschroeforchis' }
        }
      ],
      vernacularName: { en: "ladies'-tresses", nl: 'schroeforchissen' }
    }
  ]
})
