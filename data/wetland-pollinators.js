import { initialize } from '../src/index.js'

initialize({
  metadata: {
    title: {
      en: 'Wetland pollinator quiz',
      nl: 'Bestuivers veengebieden'
    },
    description: {
      en: 'Do your best to recognize these wetland pollinators! Created by Lars Willighagen.',
      nl: 'Doe je best om deze bestuivers uit veengebieden te herkennen! Gemaakt door Lars Willighagen.'
    },
    languages: ['nl', 'en']
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
      scientificName: 'Anthophila',
      vernacularName: { nl: 'bijen' },
      taxonRank: 'epifamily',
      taxa: [7901, 4334, 7905, 7908, 7911, 4345],
      children: [
        {
          scientificName: 'Andrena',
          vernacularName: { nl: 'zandbijen' },
          taxonRank: 'genus',
          taxa: 1345710
        },
        {
          scientificName: 'Apis mellifera',
          vernacularName: { nl: 'honingbij' },
          taxonRank: 'species',
          taxa: 1341976
        },
        {
          scientificName: 'Bombus',
          vernacularName: { nl: 'hommels' },
          taxonRank: 'genus',
          taxa: 1340278,
          children: [
            {
              scientificName: 'Bombus hortorum',
              vernacularName: { nl: 'tuinhommel' },
              taxonRank: 'species',
              taxa: 1340542
            },
            {
              scientificName: 'Bombus humilis',
              vernacularName: { nl: 'heidehommel' },
              taxonRank: 'species',
              taxa: 1340523
            },
            {
              scientificName: 'Bombus hypnorum',
              vernacularName: { nl: 'boomhommel' },
              taxonRank: 'species',
              taxa: 1340513
            },
            {
              scientificName: 'Bombus jonellus',
              vernacularName: { nl: 'veenhommel' },
              taxonRank: 'species',
              taxa: 1340308
            },
            {
              scientificName: 'Bombus lapidarius',
              vernacularName: { nl: 'steenhommel' },
              taxonRank: 'species',
              taxa: 1340301
            },
            {
              scientificName: 'Bombus pascuorum',
              vernacularName: { nl: 'akkerhommel' },
              taxonRank: 'species',
              taxa: 1340405
            },
            {
              scientificName: 'Bombus pratorum',
              vernacularName: { nl: 'weidehommel' },
              taxonRank: 'species',
              taxa: 1340305
            },
            {
              scientificName: 'Bombus terrestris-complex',
              vernacularName: { nl: 'aardhommels' },
              taxonRank: 'complex',
              taxa: [1340503, 1340298, 5870368, 4496017]
            },
            {
              scientificName: 'Psithyrus',
              vernacularName: { nl: 'koekoekshommels' },
              taxonRank: 'subgenus',
              taxa: [1340434, 1340362, 1340527, 1340506, 1340344, 1340333, 1340418]
            }
          ]
        },
        {
          scientificName: 'Chelostoma',
          vernacularName: { nl: 'klokjesbijen' },
          taxonRank: 'genus',
          taxa: 1334493
        },
        {
          scientificName: 'Colletes',
          vernacularName: { nl: 'zijdebijen' },
          taxonRank: 'genus',
          taxa: 1348504
        },
        {
          scientificName: 'Dasypoda hirtipes',
          vernacularName: { nl: 'pluimvoetbij' },
          taxonRank: 'species',
          taxa: 1345858
        },
        {
          scientificName: 'Lasioglossum/Halictus',
          vernacularName: { nl: 'groefbijen' },
          taxonRank: 'genus',
          taxa: [1347978, 1353501],
          children: [
            {
              scientificName: 'Halictus rubicundus',
              vernacularName: { nl: 'roodpotige groefbij' },
              taxonRank: 'species',
              taxa: 1353453
            },
            {
              scientificName: 'Halictus scabiosae',
              vernacularName: { nl: 'breedbandgroefbij' },
              taxonRank: 'species',
              taxa: 1353395
            }
          ]
        },
        {
          scientificName: 'Panurgus',
          vernacularName: { nl: 'roetbijen' },
          taxonRank: 'genus',
          taxa: 1352891
        }
      ]
    },
    {
      scientificName: 'Syrphidae',
      vernacularName: { nl: 'zweefvliegen' },
      taxonRank: 'family',
      taxa: 6920,
      children: [
        {
          scientificName: 'Anasimyia/Eurimyia lineata',
          taxonRank: 'species',
          taxa: 10366531
        },
        {
          scientificName: 'Cheilosia',
          vernacularName: { nl: 'gitjes' },
          taxonRank: 'genus',
          taxa: 1539835,
          children: [
            {
              scientificName: 'Cheilosia fraterna',
              vernacularName: { nl: 'moerasgitje' },
              taxonRank: 'species',
              taxa: 1540067
            }
          ]
        },
        {
          scientificName: 'Chrysotoxum',
          vernacularName: { nl: 'fopwespen' },
          taxonRank: 'genus',
          taxa: 1535870,
          children: [
            {
              scientificName: 'Chrysotoxum bicinctum',
              vernacularName: { nl: 'donkere fopwesp' },
              taxonRank: 'species',
              taxa: 1536009
            }
          ]
        },
        {
          scientificName: 'Episyrphus balteatus',
          vernacularName: { nl: 'snor-/marmelade-/pyjamazweefvlieg' },
          taxonRank: 'species',
          taxa: 1536449
        },
        {
          scientificName: 'Eristalinus',
          vernacularName: { nl: 'vlekogen' },
          taxonRank: 'genus',
          taxa: 1542672
        },
        {
          scientificName: 'Eristalis',
          vernacularName: { nl: 'bijvliegen' },
          taxonRank: 'genus',
          taxa: 1491190,
          children: [
            {
              scientificName: 'Eristalis intricaria',
              vernacularName: { nl: 'hommelbijvlieg' },
              taxonRank: 'species',
              taxa: 1541262
            }
          ]
        },
        {
          scientificName: 'Eumerus',
          vernacularName: { nl: 'bollenzweefvliegen' },
          taxonRank: 'genus',
          taxa: 1534472
        },
        {
          scientificName: 'Eupeodes',
          vernacularName: { nl: 'kommazwevers' },
          taxonRank: 'genus',
          taxa: 1540675,
          children: [
            {
              scientificName: 'Eupeodes corollae',
              vernacularName: { nl: 'terrasjeskommazwever' },
              taxonRank: 'species',
              taxa: 1540742
            },
            {
              scientificName: 'Eupeodes latifasciatus',
              vernacularName: { nl: 'gele kommazwever' },
              taxonRank: 'species',
              taxa: 1540691
            }
          ]
        },
        {
          scientificName: 'Helophilus',
          vernacularName: { nl: 'pendelzweefvliegen' },
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Helophilus hybridus',
              vernacularName: { nl: 'moeraspendelzweefvlieg' },
              taxonRank: 'species',
              taxa: 5071368
            },
            {
              scientificName: 'Helophilus pendulus',
              vernacularName: { nl: 'gewone pendelzweefvlieg' },
              taxonRank: 'species',
              taxa: 5071352
            },
            {
              scientificName: 'Helophilus trivittatus',
              vernacularName: { nl: 'citroenspendelzweefvlieg' },
              taxonRank: 'species',
              taxa: 5071382
            }
          ]
        },
        {
          scientificName: 'Melanostoma',
          vernacularName: { nl: 'driehoekzweefvliegen' },
          taxonRank: 'genus',
          taxa: 1533169,
          children: [
            {
              scientificName: 'Melanostoma mellinum',
              vernacularName: { nl: 'gewone driehoekzweefvlieg' },
              taxonRank: 'species',
              taxa: 5766554
            },
            {
              scientificName: 'Melanostoma scalare',
              vernacularName: { nl: 'slanke driehoekzweefvlieg' },
              taxonRank: 'species',
              taxa: 5766556
            }
          ]
        },
        {
          scientificName: 'Orthonevra',
          vernacularName: { nl: 'glimmers' },
          taxonRank: 'genus',
          taxa: 1537455
        },
        {
          scientificName: 'Platycheirus',
          vernacularName: { nl: 'platvoetjes' },
          taxonRank: 'genus',
          taxa: 1542996
        },
        {
          scientificName: 'Pyrophaena',
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Pyrophaena granditarsa',
              vernacularName: { nl: 'klompvoetje' },
              taxonRank: 'species',
              taxa: 5886305
            },
            {
              scientificName: 'Pyrophaena rosarum',
              vernacularName: { nl: 'vlinderstrikje' },
              taxonRank: 'species',
              taxa: 4294542
            }
          ]
        },
        {
          scientificName: 'Rhingia campestris',
          vernacularName: { nl: 'gewone snuitvlieg' },
          taxonRank: 'species',
          taxa: 1537412
        },
        {
          scientificName: 'Scaeva',
          vernacularName: { nl: 'halvemaanzwevers' },
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Scaeva pyrastri',
              vernacularName: { nl: 'witte halvemaanzwever' },
              taxonRank: 'species',
              taxa: 1537719
            },
            {
              scientificName: 'Scaeva selenitica',
              vernacularName: { nl: 'gele halvemaanzwever' },
              taxonRank: 'species',
              taxa: 1537717
            }
          ]
        },
        {
          scientificName: 'Sericomyia',
          vernacularName: { nl: 'veenzweefvliegen' },
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Sericomyia lappona',
              vernacularName: { nl: 'donkere veenzweefvlieg' },
              taxonRank: 'species',
              taxa: 1538831
            },
            {
              scientificName: 'Sericomyia silentis',
              vernacularName: { nl: 'hoogveenzweefvlieg' },
              taxonRank: 'species',
              taxa: 1538798
            }
          ]
        },
        {
          scientificName: 'Sphaerophoria',
          vernacularName: { nl: 'langlijven' },
          taxonRank: 'genus',
          taxa: 1539106
        },
        {
          scientificName: 'Syritta pipiens',
          vernacularName: { nl: 'menuetzweefvlieg' },
          taxonRank: 'species',
          taxa: 1544431
        },
        {
          scientificName: 'Syrphus',
          vernacularName: { nl: 'bandzweefvliegen' },
          taxonRank: 'genus',
          taxa: 1444606
        },
        {
          scientificName: 'Volucella',
          vernacularName: { nl: 'reuzen' },
          taxonRank: 'genus',
          taxa: 1483491,
          children: [
            {
              scientificName: 'Volucella bombylans',
              vernacularName: { nl: 'hommelreus' },
              taxonRank: 'species',
              taxa: 1541763
            }
          ]
        },
        {
          scientificName: 'Xylota/Chalcosyrphus',
          vernacularName: { nl: 'bladlopers' },
          taxonRank: 'genus',
          taxa: [1541512, 1533584]
        }
      ]
    }
  ]
})
