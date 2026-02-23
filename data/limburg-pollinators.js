import { initialize } from '../src/index.js'

initialize({
  metadata: {
    title: {
      en: 'South Limburg pollinator quiz',
      nl: 'Bestuivers Zuid-Limburg'
    },
    description: {
      en: 'Do your best to recognize these pollinators from the south of Limburg!',
      nl: 'Doe je best om deze bestuivers uit Zuid-Limburg te herkennen!'
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
      vernacularName: { en: 'bee', nl: 'bij' },
      taxonRank: 'epifamily',
      children: [
        {
          scientificName: 'Andrena',
          vernacularName: { en: 'mining bee', nl: 'zandbij' },
          taxonRank: 'genus',
          taxa: 1345710,
          children: [
            {
              scientificName: 'Andrena cineraria',
              vernacularName: { en: 'ashy mining bee', nl: 'asbij' },
              taxonRank: 'species',
              taxa: 1358088
            },
            {
              scientificName: 'Andrena flavipes',
              vernacularName: { en: 'yellow-legged mining bee', nl: 'grasbij' },
              taxonRank: 'species',
              taxa: 1357156
            },
            {
              scientificName: 'Andrena fulva',
              vernacularName: { en: 'tawny mining bee', nl: 'vosje' },
              taxonRank: 'species',
              taxa: 9805254
            },
            {
              scientificName: 'Andrena vaga',
              vernacularName: { en: 'grey-backed mining bee', nl: 'grijze zandbij' },
              taxonRank: 'species',
              taxa: 1357486
            }
          ]
        },
        {
          scientificName: 'Anthidiellum strigatum',
           vernacularName: { en: 'European rotund-resin bee', nl: 'kleine harsbij' },
           taxonRank: 'genus',
           taxa: 1338883
        },
        {
          scientificName: 'Anthidium',
           vernacularName: { en: 'carder bee', nl: 'wolbij' },
           taxonRank: 'genus',
           taxa: 1334798
        },
        {
          scientificName: 'Anthophora',
           vernacularName: { en: 'flower bee', nl: 'sachembij' },
           taxonRank: 'genus',
           taxa: 1337506
        },
        {
          scientificName: 'Apis mellifera',
          vernacularName: { en: 'European honeybee', nl: 'honingbij' },
          taxonRank: 'species',
          taxa: 1341976
        },
        {
          scientificName: 'Bombus',
          vernacularName: { en: 'bumblebee', nl: 'hommel' },
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Bombus bohemicus',
              vernacularName: { en: 'Bohemian cuckoo bee', nl: 'tweekleurige koekoekshommel' },
              taxonRank: 'species',
              taxa: 1340362
            },
            {
              scientificName: 'Bombus campestris',
              vernacularName: { en: 'field cuckoo bee', nl: 'gewone koekoekshommel' },
              taxonRank: 'species',
              taxa: 1340527
            },
            {
              scientificName: 'Bombus hortorum',
              vernacularName: { en: 'garden bumblebee', nl: 'tuinhommel' },
              taxonRank: 'species',
              taxa: 1340542
            },
            {
              scientificName: 'Bombus hypnorum',
              vernacularName: { en: 'tree bumblebee', nl: 'boomhommel' },
              taxonRank: 'species',
              taxa: 1340513
            },
            {
              scientificName: 'Bombus lapidarius',
              vernacularName: { en: 'red-tailed bumblebee', nl: 'steenhommel' },
              taxonRank: 'species',
              taxa: 1340301
            },
            {
              scientificName: 'Bombus pascuorum',
              vernacularName: { en: 'common carder bumblebee', nl: 'akkerhommel' },
              taxonRank: 'species',
              taxa: 1340405
            },
            {
              scientificName: 'Bombus pratorum',
              vernacularName: { en: 'early bumblebee', nl: 'weidehommel' },
              taxonRank: 'species',
              taxa: 1340305
            },
            {
              scientificName: 'Bombus rupestris',
              vernacularName: { en: 'red-tailed cuckoo bee', nl: 'rode koekoekshommel' },
              taxonRank: 'species',
              taxa: 1340344
            },
            {
              scientificName: 'Bombus sylvarum',
              vernacularName: { en: 'knapweed carder bumblebee', nl: 'boshommel' },
              taxonRank: 'species',
              taxa: 1340342
            },
            {
              scientificName: 'Bombus sylvestris',
              vernacularName: { en: 'four-colored cuckoo bee', nl: 'vierkleurige koekoekshommel' },
              taxonRank: 'species',
              taxa: 1340333
            },
            {
              scientificName: 'Bombus terrestris-complex',
              vernacularName: { en: 'buff-tailed bumblebee', nl: 'aardhommel' },
              taxonRank: 'complex',
              taxa: [1340503, 1340298, 5870368, 4496017]
            },
            {
              scientificName: 'Bombus vestalis',
              vernacularName: { en: 'southern cuckoo bee', nl: 'grote koekoekshommel' },
              taxonRank: 'species',
              taxa: 1340418
            }
          ]
        },
        {
          scientificName: 'Ceratina cyanea',
          vernacularName: { en: 'blue carpenter bee', nl: 'blauwe ertsbij' },
          taxonRank: 'genus',
          taxa: 5039824
        },
        {
          scientificName: 'Chelostoma',
          vernacularName: { en: 'scissor bee', nl: 'klokjesbij' },
          taxonRank: 'genus',
          taxa: 1334476
        },
        {
          scientificName: 'Coelioxys',
          vernacularName: { en: 'sharp-tail bee', nl: 'kegelbij' },
          taxonRank: 'genus',
          taxa: 1338333
        },
        {
          scientificName: 'Colletes',
          vernacularName: { en: 'cellophane bees', nl: 'zijdebij' },
          taxonRank: 'genus',
          taxa: 1348504
        },
        {
          scientificName: 'Dasypoda hirtipes',
          vernacularName: { en: 'pantaloon bee', nl: 'pluimvoetbij' },
          taxonRank: 'species',
          taxa: 1345858
        },
        {
          scientificName: 'Epeolus variegatus',
          vernacularName: { en: 'black-thighed Epeolus', nl: 'gewone viltbij' },
          taxonRank: 'species',
          taxa: 1341940
        },
        {
          scientificName: 'Eucera',
          vernacularName: { en: 'long-horned bee', nl: 'langhoornbij' },
          taxonRank: 'genus',
          taxa: [1340884, 1340969]
        },
        {
          scientificName: 'Halictus',
          vernacularName: { en: 'furrow bee', nl: 'groefbij' },
          taxonRank: 'genus',
          taxa: 1347978,
          children: [
            {
              scientificName: 'Halictus scabiosae',
              vernacularName: { en: 'great banded furrow bee', nl: 'breedbandgroefbij' },
              taxonRank: 'species',
              taxa: 1353395
            }
          ]
        },
        {
          scientificName: 'Hoplitis',
          vernacularName: { en: 'lesser mason bee', nl: 'metselbij' },
          taxonRank: 'genus',
          taxa: 1336906
        },
        {
          scientificName: 'Hylaeus',
          vernacularName: { en: 'yellow-faced bee', nl: 'maskerbij' },
          taxonRank: 'genus',
          taxa: 1349360
        },
        {
          scientificName: 'Lasioglossum',
          vernacularName: { en: 'furrow bee', nl: 'groefbij' },
          taxonRank: 'genus',
          taxa: 1353501
        },
        {
          scientificName: 'Macropis',
          vernacularName: { en: 'oil-collecting bee', nl: 'slobkousbij' },
          taxonRank: 'genus',
          taxa: [1345909, 1345902]
        },
        {
          scientificName: 'Megachile',
          vernacularName: { en: 'leafcutter bee', nl: 'behangersbij' },
          taxonRank: 'genus',
          taxa: 1335011
        },
        {
          scientificName: 'Melecta',
          vernacularName: { en: 'mourning bee', nl: 'rouwbij' },
          taxonRank: 'genus',
          taxa: 1345295
        },
        {
          scientificName: 'Melitta',
          vernacularName: { en: 'blunt-horn bee', nl: 'dikpootbij' },
          taxonRank: 'genus',
          taxa: 1345736
        },
        {
          scientificName: 'Nomada',
          vernacularName: { en: 'nomad bee', nl: 'wespbij' },
          taxonRank: 'genus',
          taxa: 1343230
        },
        {
          scientificName: 'Osmia',
          vernacularName: { en: 'mason bee', nl: 'metselbij' },
          taxonRank: 'genus',
          taxa: 1337664,
          children: [
            {
              scientificName: 'Osmia bicornis',
              vernacularName: { en: 'red mason bee', nl: 'rosse metselbij' },
              taxonRank: 'species',
              taxa: 5039315
            },
            {
              scientificName: 'Osmia caerulescens',
              vernacularName: { en: 'blue mason bee', nl: 'blauwe metselbij' },
              taxonRank: 'species',
              taxa: 5039096
            },
            {
              scientificName: 'Osmia cornuta',
              vernacularName: { en: 'white-faced mason bee', nl: 'gehoornde metselbij' },
              taxonRank: 'species',
              taxa: 5039293
            }
          ]
        },
        {
          scientificName: 'Panurgus',
          vernacularName: { en: 'shaggy bee', nl: 'roetbij' },
          taxonRank: 'genus',
          taxa: 1352891
        },
        {
          scientificName: 'Sphecodes',
          vernacularName: { en: 'blood bee', nl: 'bloedbij' },
          taxonRank: 'genus',
          taxa: 1351262
        },
        {
          scientificName: 'Stelis',
          vernacularName: { en: 'cuckoo carder bee', nl: 'tubebij' },
          taxonRank: 'genus',
          taxa: 1334181
        },
        {
          scientificName: 'Trachusa byssina',
          vernacularName: { nl: 'grote harsbij' },
          taxonRank: 'species',
          taxa: 5038591
        }
      ]
    },
    {
      scientificName: 'Syrphidae',
      vernacularName: { en: '', nl: 'zweefvliegen' },
      taxonRank: 'family',
      children: [
        {
          scientificName: 'Baccha elongata',
          vernacularName: { en: 'common dainty', nl: 'vliegende speld' },
          taxonRank: 'species',
          taxa: 1536559
        },
        {
          scientificName: 'Callicera aurata',
          vernacularName: { nl: 'goude glanszweefvlieg' },
          taxonRank: 'species',
          taxa: 5070404
        },
        {
          scientificName: 'Chrysotoxum',
          vernacularName: { nl: 'fopwesp' },
          taxonRank: 'genus',
          taxa: 1535870
        },
        {
          scientificName: 'Episyrphus balteatus',
          vernacularName: { en: 'marmalade hoverfly', nl: 'snor-/marmelade-/pyjamazweefvlieg' },
          taxonRank: 'species',
          taxa: 1536449
        },
        {
          scientificName: 'Eristalis',
          vernacularName: { en: 'drone fly', nl: 'bijvlieg' },
          taxonRank: 'genus',
          taxa: 1491190,
          children: [
            {
              scientificName: 'Eristalis intricaria',
              vernacularName: { nl: 'hommelbijvlieg' },
              taxonRank: 'species',
              taxa: 1541262
            },
            {
              scientificName: 'Eristalis nemorum',
              vernacularName: { en: 'orange-spined drone fly', nl: 'puntbijvlieg' },
              taxonRank: 'species',
              taxa: 6098383
            },
            {
              scientificName: 'Eristalis pertinax',
              vernacularName: { nl: 'kegelbijvlieg' },
              taxonRank: 'species',
              taxa: 1541116
            },
            {
              scientificName: 'Eristalis tenax',
              vernacularName: { en: 'common  drone fly', nl: 'blinde bij' },
              taxonRank: 'species',
              taxa: 1541217
            }
          ]
        },
        {
          scientificName: 'Eupeodes',
          vernacularName: { nl: 'kommazwever' },
          taxonRank: 'genus',
          taxa: 1540675
        },
        {
          scientificName: 'Helophilus',
          vernacularName: { nl: 'pendelzweefvlieg' },
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
          scientificName: 'Lapposyrphus lapponicus',
          vernacularName: { nl: 'boogkommazweefvlieg' },
          taxonRank: 'species',
          taxa: 8183385
        },
        {
          scientificName: 'Lejogaster metallina',
          vernacularName: { nl: 'gewoon glimlijfje' },
          taxonRank: 'species',
          taxa: 1537380
        },
        {
          scientificName: 'Melanostoma',
          vernacularName: { nl: 'driehoekzweefvlieg' },
          taxonRank: 'genus',
          taxa: 1533169
        },
        {
          scientificName: 'Merodon',
          vernacularName: { nl: 'narcisvlieg' },
          taxonRank: 'genus',
          taxa: 1544143
        },
        {
          scientificName: 'Myathropa florea',
          vernacularName: { en: 'batman hoverfly', nl: 'doodskopzweefvlieg' },
          taxonRank: 'species',
          taxa: 4516754
        },
        {
          scientificName: 'Neocnemodon',
          vernacularName: { nl: 'platbek' },
          taxonRank: 'genus',
          taxa: 1536263
        },
        {
          scientificName: 'Orthonevra',
          vernacularName: { en: 'mucksucker', nl: 'glimmer' },
          taxonRank: 'genus',
          taxa: 1537455
        },
        {
          scientificName: 'Paragus',
          vernacularName: { en: 'grass skimmer', nl: 'krieltje' },
          taxonRank: 'genus',
          taxa: 1535699
        },
        {
          scientificName: 'Pipiza',
          vernacularName: { en: 'pithead', nl: 'platbek' },
          taxonRank: 'genus',
          taxa: 1536264
        },
        {
          scientificName: 'Pipizella',
          vernacularName: { en: 'flatface', nl: 'langsprietplatbek' },
          taxonRank: 'genus',
          taxa: 1532919
        },
        {
          scientificName: 'Platycheirus',
          vernacularName: { en: 'sedgesitter', nl: 'platvoetje' },
          taxonRank: 'genus',
          taxa: 1542996,
          children: [
            {
              scientificName: 'Platycheirus albimanus',
              vernacularName: { en: 'grey-spotted sedgesitter', nl: 'micaplatvoetje' },
              taxonRank: 'species',
              taxa: 4516769
            }
          ]
        },
        {
          scientificName: 'Rhingia',
          vernacularName: { nl: 'snuitvlieg' },
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Rhingia campestris',
              vernacularName: { nl: 'gewone snuitvlieg' },
              taxonRank: 'species',
              taxa: 1537412
            },
            {
              scientificName: 'Rhingia rostrata',
              vernacularName: { nl: 'rode snuitvlieg' },
              taxonRank: 'species',
              taxa: 8170685
            }
          ]
        },
        {
          scientificName: 'Scaeva',
          vernacularName: { en: 'smoothwing', nl: 'halvemaanzweefvlieg' },
          taxonRank: 'genus',
          taxa: 1537685
        },
        {
          scientificName: 'Sphaerophoria',
          vernacularName: { en: 'globetail', nl: 'langlijf' },
          taxonRank: 'genus',
          taxa: 1539106
        },
        {
          scientificName: 'Syritta pipiens',
          vernacularName: { en: 'thick-legged hoverfly', nl: 'menuetzweefvlieg' },
          taxonRank: 'species',
          taxa: 1544431
        },
        {
          scientificName: 'Syrphus',
          vernacularName: { en: 'flower fly', nl: 'bandzweefvlieg' },
          taxonRank: 'genus',
          taxa: 1444606
        },
        {
          scientificName: 'Volucella zonaria',
          vernacularName: { en: 'hornet hoverfly', nl: 'stadsreus' },
          taxonRank: 'species',
          taxa: 1541832
        },
        {
          scientificName: 'Xanthogramma/Philhelius',
          vernacularName: { en: 'dayglower', nl: 'citroenzweefvlieg' },
          taxonRank: 'genus',
          taxa: 4797847
        }
      ]
    }
  ]
})
