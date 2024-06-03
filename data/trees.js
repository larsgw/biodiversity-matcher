import { initialize } from '../src/index.js'

initialize({
  metadata: {
    title: {
      en: 'Tree and tree health quiz',
      nl: 'Bomen en boomzwammen quiz'
    },
    description: {
      en: 'Do your best to recognize these trees and fungi affecting tree health! Created by Lars Willighagen.',
      nl: 'Doe je best om deze bomen en zwammen die bomen aantasten te herkennen! Gemaakt door Lars Willighagen.',
    },
    languages: ['en', 'nl']
  },
  provider: {
    type: 'inaturalist',
    defaultOptions: {
      licenses: ['cc-by', 'cc-by-nc', 'cc0', 'cc-by-sa', 'cc-by-nc-sa']
    }
  },
  settings: {
    season: {
      id: 'season',
      label: { en: 'Season', nl: 'Seizoen' },
      options: [
        { id: 'any', label: { en: 'Any', nl: 'Beide' } },
        { id: 'winter', label: { en: 'Winter', nl: 'Winter' } },
        { id: 'summer', value: 'any', label: { en: 'Summer', nl: 'Zomer' } }
      ],
      value: 'any'
    }
  },
  taxonRank: 'species',
  taxa: [
    {
      vernacularName: { en: 'Tree', nl: 'Boom' },
      children: [
        {
          scientificName: 'Acer',
          vernacularName: { nl: 'esdoorn' },
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Acer platanoides',
              vernacularName: { nl: 'Noorse esdoorn' },
              taxonRank: 'species',
              taxa: 54763
            },
            {
              scientificName: 'Acer pseudoplatanus',
              vernacularName: { nl: 'Gewone esdoorn' },
              taxonRank: 'species',
              taxa: 119791
            }
          ]
        },
        {
          scientificName: 'Aesculus hippocastanum',
          vernacularName: { nl: 'Witte paardenkastanje' },
          taxonRank: 'species',
          taxa: 84298
        },
        {
          scientificName: 'Alnus glutinosa',
          vernacularName: { nl: 'Zwarte els' },
          taxonRank: 'species',
          taxa: 966205
        },
        {
          scientificName: 'Betula',
          vernacularName: { nl: 'berk' },
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Betula pendula',
              vernacularName: { nl: 'Ruwe berk' },
              taxonRank: 'species',
              taxa: 83992
            },
            {
              scientificName: 'Betula pubescens',
              vernacularName: { nl: 'Zachte berk' },
              taxonRank: 'species',
              taxa: 119061
            }
          ]
        },
        {
          scientificName: 'Carpinus betulus',
          vernacularName: { nl: 'Haagbeuk' },
          taxonRank: 'species',
          taxa: 55801
        },
        {
          scientificName: 'Castanea sativa',
          vernacularName: { nl: 'Tamme kastanje' },
          taxonRank: 'species',
          taxa: 121763
        },
        {
          scientificName: 'Catalpa bignonioides',
          vernacularName: { nl: 'Trompetboom' },
          taxonRank: 'species',
          taxa: 50859
        },
        {
          scientificName: 'Cedrus libani',
          vernacularName: { nl: 'Libanonceder' },
          taxonRank: 'species',
          taxa: 136150

        },
        {
          scientificName: 'Crataegus',
          vernacularName: { nl: 'meidoorn' },
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Crataegus laevigata ‘Paul Scarlet’',
              vernacularName: { nl: 'Tweestijlige rode meidoorn' },
              taxonRank: 'species',
              taxa: 54428
            },
            {
              scientificName: 'Crataegus monogyna',
              vernacularName: { nl: 'Eenstijlige meidoorn' },
              taxonRank: 'species',
              taxa: 51147
            }
          ]
        },
        {
          scientificName: 'Corylus colurna',
          vernacularName: { nl: 'Boomhazelaar' },
          taxonRank: 'species',
          taxa: 367960
        },
        {
          scientificName: 'Fagus sylvatica',
          vernacularName: { nl: 'Gewone beuk' },
          taxonRank: 'species',
          taxa: 54227
        },
        {
          scientificName: 'Fraxinus excelsior',
          vernacularName: { nl: 'Gewone es' },
          taxonRank: 'species',
          taxa: 125440
        },
        {
          scientificName: 'Gleditsia triacanthos',
          vernacularName: { nl: 'Valse christusdoorn' },
          taxonRank: 'species',
          taxa: 54797
        },
        {
          scientificName: 'Juglans regia',
          vernacularName: { nl: 'Walnoot, okkernoot' },
          taxonRank: 'species',
          taxa: 63935
        },
        {
          scientificName: 'Larix kaempferi',
          vernacularName: { nl: 'Japanse lariks' },
          taxonRank: 'species',
          taxa: 143786
        },
        {
          scientificName: 'Liquidambar styraciflua',
          vernacularName: { nl: 'Amberboom' },
          taxonRank: 'species',
          taxa: 49658
        },
        {
          scientificName: 'Picea',
          vernacularName: { nl: 'Spar' },
          taxonRank: 'genus',
          taxa: 63573,
          children: [
            {
              scientificName: 'Picea abies',
              vernacularName: { nl: 'Fijnspar' },
              taxonRank: 'species',
              taxa: 63567
            }
          ]
        },
        {
          scientificName: 'Pinus sylvestris',
          vernacularName: { nl: 'Grove den' },
          taxonRank: 'species',
          taxa: 58722
        },
        {
          scientificName: 'Platanus x hispanica',
          vernacularName: { nl: 'Gewone plataan' },
          taxonRank: 'species',
          taxa: 552449
        },
        {
          scientificName: 'Populus x canadensis',
          vernacularName: { nl: 'Canadese populier' },
          taxonRank: 'species',
          taxa: 181684
        },
        {
          scientificName: 'Prunus avium',
          vernacularName: { nl: 'Zoete kers' },
          taxonRank: 'species',
          taxa: 61964
        },
        {
          scientificName: 'Pseudotsuga menziesii',
          vernacularName: { nl: 'Douglasspar' },
          taxonRank: 'species',
          taxa: 48256
        },
        {
          scientificName: 'Pterocarya fraxinifolia',
          vernacularName: { nl: 'Vleugelnoot' },
          taxonRank: 'species',
          taxa: 371700
        },
        {
          scientificName: 'Quercus',
          vernacularName: { nl: 'eik' },
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Quercus robur',
              vernacularName: { nl: 'Zomereik' },
              taxonRank: 'species',
              taxa: 56133
            },
            {
              scientificName: 'Quercus rubra',
              vernacularName: { nl: 'Amerikaanse eik' },
              taxonRank: 'species',
              taxa: 49005
            }
          ]
        },
        {
          scientificName: 'Robinia pseudoacacia (Robinia',
          vernacularName: { nl: 'Gewone acacia)' },
          taxonRank: 'species',
          taxa: 56088
        },
        {
          scientificName: 'Salix alba',
          vernacularName: { nl: 'Schietwilg' },
          taxonRank: 'species',
          taxa: 54841
        },
        {
          scientificName: 'Sophora japonica',
          vernacularName: { nl: 'Honingboom' },
          taxonRank: 'species',
          taxa: 53945
        },
        {
          scientificName: 'Sorbus aucuparia',
          vernacularName: { nl: 'Gewone lijsterbes' },
          taxonRank: 'species',
          taxa: 56063
        },
        {
          scientificName: 'Tilia',
          vernacularName: { nl: 'linde' },
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Tilia x europaea',
              vernacularName: { nl: 'Hollandse linde' },
              taxonRank: 'species',
              taxa: 410499
            },
            {
              scientificName: 'Tilia platyphyllos',
              vernacularName: { nl: 'Zomerlinde, Grootbladige linde' },
              taxonRank: 'species',
              taxa: 169761
            }
          ]
        },
        {
          scientificName: 'Ulmus minor',
          vernacularName: { nl: 'Veldiep' },
          taxonRank: 'species',
          taxa: 79461
        }
      ]
    },
    {
      vernacularName: { en: 'Fungi', nl: 'Schimmel' },
      children: [
        {
          vernacularName: { en: '', nl: 'Zadelzwam' },
          taxonRank: 'species',
          taxa: 940028
        },
        {
          vernacularName: { en: '', nl: 'Gewone oesterzwam' },
          taxonRank: 'species',
          taxa: 48494
        },
        {
          vernacularName: { en: '', nl: 'Reuzenzwam' },
          taxonRank: 'species',
          taxa: 157989
        },
        {
          vernacularName: { en: '', nl: 'Eikhaas' },
          taxonRank: 'species',
          taxa: 53714
        },
        {
          vernacularName: { en: '', nl: 'Echte honingzwam' },
          taxonRank: 'species',
          taxa: 55950
        },
        {
          vernacularName: { en: '', nl: 'Goudvliesbundelzwam' },
          taxonRank: 'species',
          taxa: 351817
        },
        {
          vernacularName: { en: '', nl: 'Paarse korstzwam' },
          taxonRank: 'species',
          taxa: 118036
        },
        {
          vernacularName: { en: '', nl: 'Echte vuurzwam' },
          taxonRank: 'species',
          taxa: 125136
        },
        {
          vernacularName: { en: '', nl: 'schubbige bundelzwam' },
          taxonRank: 'species',
          taxa: 153445
        },
        {
          vernacularName: { en: '', nl: 'Gewone elfenbankje' },
          taxonRank: 'species',
          taxa: 54134
        },
        {
          vernacularName: { en: '', nl: 'Porseleinzwam' },
          taxonRank: 'species',
          taxa: 55964
        },
        {
          vernacularName: { en: '', nl: 'Echte tonderzwam' },
          taxonRank: 'species',
          taxa: 127510
        },
        {
          vernacularName: { en: '', nl: 'Gesteelde lakzwam' },
          taxonRank: 'species',
          taxa: 125932
        },
        {
          vernacularName: { en: '', nl: 'Fluweelpootje' },
          taxonRank: 'species',
          taxa: 67594
        },
        {
          vernacularName: { en: '', nl: 'Berkendoder' },
          taxonRank: 'species',
          taxa: 775410
        },
        {
          vernacularName: { en: '', nl: 'Dennenvoetzwam' },
          taxonRank: 'species',
          taxa: 118084
        },
        {
          vernacularName: { en: '', nl: 'Biefstukzwam' },
          taxonRank: 'species',
          taxa: 123897
        },
        {
          vernacularName: { en: '', nl: 'Zwavelzwam' },
          taxonRank: 'species',
          taxa: 53713
        },
        {
          vernacularName: { en: '', nl: 'Ruige weerschijnzwam' },
          taxonRank: 'species',
          taxa: 194483
        },
        {
          vernacularName: { en: '', nl: 'Dikrandtonderzwam' },
          taxonRank: 'species',
          taxa: 63509
        },
        {
          vernacularName: { en: '', nl: 'Harslakzwam' },
          taxonRank: 'species',
          taxa: 328280
        },
        {
          vernacularName: { en: '', nl: 'Korsthoutskoolzwam' },
          taxonRank: 'species',
          taxa: 128051
        }
      ]
    }
  ]
})
