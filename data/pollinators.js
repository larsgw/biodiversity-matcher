import { initialize } from '../src/index.js'

initialize({
  metadata: {
    title: {
      en: 'Pollinator quiz',
      nl: 'Bestuivers'
    },
    description: {
      en: 'Do your best to recognize these pollinators! Created by Lars Willighagen.',
      nl: 'Doe je best om deze bestuivers te herkennen! Gemaakt door Lars Willighagen.'
    },
    languages: ['nl', 'en']
  },
  provider: {
    type: 'inaturalist',
    defaultOptions: {
      licenses: ['cc-by', 'cc-by-nc', 'cc0', 'cc-by-sa', 'cc-by-nc-sa'],
      place_id: 7506
    }
  },
  taxa: [
    {
      scientificName: 'Anthophila',
      vernacularName: { nl: 'bijen' },
      taxonRank: 'epifamily',
      taxa: 630955,
      children: [
        {
          scientificName: 'Anthidium/Anthidiellum',
          vernacularName: { nl: 'wolbijen' },
          taxonRank: 'genus',
          taxa: 504741
        },
        {
          scientificName: 'Andrena',
          vernacularName: { nl: 'zandbijen' },
          taxonRank: 'genus',
          taxa: 57669,
          children: [
            {
              scientificName: 'Andrena hattorfiana',
              vernacularName: { nl: 'knautiabij' },
              taxonRank: 'species',
              taxa: 424814
            }
          ]
        },
        {
          scientificName: 'Apis mellifera',
          vernacularName: { nl: 'honingbij' },
          taxonRank: 'species',
          taxa: 47219
        },
        {
          scientificName: 'Bombus',
          vernacularName: { nl: 'hommels' },
          taxonRank: 'genus',
          taxa: 52775,
          children: [
            {
              scientificName: 'Bombus hortorum',
              vernacularName: { nl: 'tuinhommel' },
              taxonRank: 'species',
              taxa: 121989
            },
            {
              scientificName: 'Bombus hypnorum',
              vernacularName: { nl: 'boomhommel' },
              taxonRank: 'species',
              taxa: 61803
            },
            {
              scientificName: 'Bombus lapidarius',
              vernacularName: { nl: 'steenhommel' },
              taxonRank: 'species',
              taxa: 57619
            },
            {
              scientificName: 'Bombus pascuorum',
              vernacularName: { nl: 'akkerhommel' },
              taxonRank: 'species',
              taxa: 55637
            },
            {
              scientificName: 'Bombus pratorum',
              vernacularName: { nl: 'weidehommel' },
              taxonRank: 'species',
              taxa: 124910
            },
            {
              scientificName: 'Bombus terrestris-complex',
              vernacularName: { nl: 'aardhommels' },
              taxonRank: 'complex',
              taxa: [57516, 1092510]
            },
            {
              scientificName: 'Psithyrus',
              vernacularName: { nl: 'koekoekshommels' },
              taxonRank: 'subgenus',
              taxa: 538893
            }
          ]
        },
        {
          scientificName: 'Chelostoma',
          vernacularName: { nl: 'klokjesbijen' },
          taxonRank: 'genus',
          taxa: 357471
        },
        {
          scientificName: 'Dasypoda hirtipes',
          vernacularName: { nl: 'pluimvoetbij' },
          taxonRank: 'species',
          taxa: 746682
        },
        {
          scientificName: 'Lasioglossum/Halictus',
          vernacularName: { nl: 'groefbijen' },
          taxonRank: 'genus',
          taxa: 335597,
          children: [
            {
              scientificName: 'Halictus scabiosae',
              vernacularName: { nl: 'breedbandgroefbij' },
              taxonRank: 'species',
              taxa: 415589
            }
          ]
        },
        {
          scientificName: 'Macropis europaea',
          vernacularName: { nl: 'slobkousbij' },
          taxonRank: 'species',
          taxa: 188686
        },
        {
          scientificName: 'Megachile',
          vernacularName: { nl: 'behangersbijen' },
          taxonRank: 'genus',
          taxa: 125786
        },
        {
          scientificName: 'Nomada',
          vernacularName: { nl: 'wespbijen' },
          taxonRank: 'genus',
          taxa: 53648
        },
        {
          scientificName: 'Osmia/Hoplitis',
          vernacularName: { nl: 'metselbijen' },
          taxonRank: 'genus',
          taxa: 465612
        },
        {
          scientificName: 'Sphecodes',
          vernacularName: { nl: 'bloedbijen' },
          taxonRank: 'genus',
          taxa: 61891
        }
      ]
    },
    {
      scientificName: 'Syrphidae',
      vernacularName: { nl: 'zweefvliegen' },
      taxonRank: 'family',
      taxa: 49995,
      children: [
        {
          scientificName: 'Anasimyia/Eurimyia lineata',
          taxonRank: 'species',
          taxa: 1144215
        },
        {
          scientificName: 'Cheilosia',
          vernacularName: { nl: 'gitjes' },
          taxonRank: 'genus',
          taxa: 124483
        },
        {
          scientificName: 'Chrysotoxum',
          vernacularName: { nl: 'fopwespen' },
          taxonRank: 'genus',
          taxa: 119997
        },
        {
          scientificName: 'Dasysyrphus',
          vernacularName: { nl: 'wimperzweefvliegen' },
          taxonRank: 'genus',
          taxa: 346004
        },
        {
          scientificName: 'Episyrphus balteatus',
          vernacularName: { nl: 'snor-/marmelade-/pyjamazweefvlieg' },
          taxonRank: 'species',
          taxa: 52482
        },
        {
          scientificName: 'Eristalis',
          vernacularName: { nl: 'bijvliegen' },
          taxonRank: 'genus',
          taxa: 52491,
          children: [
            {
              scientificName: 'Eristalis intricaria',
              vernacularName: { nl: 'hommelbijvlieg' },
              taxonRank: 'species',
              taxa: 497713
            }
          ]
        },
        {
          scientificName: 'Eristalinus',
          vernacularName: { nl: 'vlekogen' },
          taxonRank: 'genus',
          taxa: 145541
        },
        {
          scientificName: 'Eupeodes',
          vernacularName: { nl: 'kommazwevers' },
          taxonRank: 'genus',
          taxa: 69190
        },
        {
          scientificName: 'Helophilus',
          vernacularName: { nl: 'pendelzweefvliegen' },
          taxonRank: 'genus',
          taxa: 52487
        },
        {
          scientificName: 'Melanostoma',
          vernacularName: { nl: 'driehoekzweefvliegen' },
          taxonRank: 'genus',
          taxa: 70406
        },
        {
          scientificName: 'Merodon equestris',
          vernacularName: { nl: 'narcissenvlieg' },
          taxonRank: 'species',
          taxa: 194786
        },
        {
          scientificName: 'Myathropa florea',
          vernacularName: { nl: 'doodskopzweefvlieg' },
          taxonRank: 'species',
          taxa: 70211
        },
        {
          scientificName: 'Rhingia campestris',
          vernacularName: { nl: 'gewone snuitvlieg' },
          taxonRank: 'species',
          taxa: 355014
        },
        {
          scientificName: 'Scaeva pyrastri',
          vernacularName: { nl: 'witte halvemaanzwever' },
          taxonRank: 'species',
          taxa: 52160
        },
        {
          scientificName: 'Sericomyia',
          vernacularName: { nl: 'veenzweefvliegen' },
          taxonRank: 'genus',
          taxa: 68133
        },
        {
          scientificName: 'Sphaerophoria',
          vernacularName: { nl: 'langlijven' },
          taxonRank: 'genus',
          taxa: 52965
        },
        {
          scientificName: 'Syritta pipiens',
          vernacularName: { nl: 'menuetzweefvlieg' },
          taxonRank: 'species',
          taxa: 81979
        },
        {
          scientificName: 'Syrphus',
          vernacularName: { nl: 'bandzweefvliegen' },
          taxonRank: 'genus',
          taxa: 52489
        },
        {
          scientificName: 'Volucella',
          vernacularName: { nl: 'reuzen' },
          taxonRank: 'genus',
          taxa: 52481,
          children: [
            {
              scientificName: 'Volucella pellucens',
              vernacularName: { nl: 'ivoorzweefvlieg' },
              taxonRank: 'species',
              taxa: 52480
            },
            {
              scientificName: 'Volucella zonaria',
              vernacularName: { nl: 'stadreus' },
              taxonRank: 'species',
              taxa: 343983
            }
          ]
        },
        {
          scientificName: 'Xylota/Chalcosyrphus',
          vernacularName: { nl: 'bladlopers' },
          taxonRank: 'genus',
          taxa: 488420
        }
      ]
    }
  ]
})
