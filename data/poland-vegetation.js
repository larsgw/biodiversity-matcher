import { initialize } from '../src/index.js'

initialize({
  metadata: {
    title: {
      en: 'Vegetations of the Karkonosze mountains',
    },
    description: {
      en: 'Vegetations of different habitats in the Polish Karkonosze mountains.',
    },
    languages: ['en']
  },
  provider: {
    type: 'inaturalist',
    defaultOptions: {
      licenses: ['cc-by', 'cc-by-nc', 'cc0', 'cc-by-sa', 'cc-by-nc-sa']
    }
  },
  taxa: [
    {
      vernacularName: { en: 'Pinus mugo sudeticum' },
      children: [
        {
          scientificName: 'Pinus mugo',
          taxonRank: 'species',
          taxa: 135727
        },
        {
          scientificName: 'Salix silesiaca',
          taxonRank: 'species',
          taxa: 488789
        },
        {
          scientificName: 'Sorbus aucuparia',
          taxonRank: 'species',
          taxa: 56063
        },
        {
          scientificName: 'Calamagrostis villosa',
          taxonRank: 'species',
          taxa: 524188
        },
        {
          scientificName: 'Lysimachia (sect. Trientalis) europaea',
           taxonRank: 'species',
           taxa: 716947
        },
        {
          scientificName: 'Polytrichum commune',
           taxonRank: 'species',
           taxa: 68293
        }
      ]
    },
    {
      vernacularName: { en: 'Empetro-Vaccinietum' },
      children: [
        {
          scientificName: 'Calluna vulgaris',
          taxonRank: 'species',
          taxa: 119450
        },
        {
          scientificName: 'Vaccinium uligunosum',
          taxonRank: 'species',
          taxa: 64714
        },
        {
          scientificName: 'Vaccinium vitis-idaea',
          taxonRank: 'species',
          taxa: 56312
        },
        {
          scientificName: 'Juncus filiformis',
          taxonRank: 'species',
          taxa: 164262
        }
      ]
    },
    {
      vernacularName: { en: 'Subalpine peat bog' },
      children: [
        {
          scientificName: 'Sphagnum fallax',
           taxonRank: 'species',
           taxa: 127361
        },
        {
          scientificName: 'Rubus chamaemorus',
           taxonRank: 'species',
           taxa: 153003
        },
        {
          scientificName: 'Eriophorum angustifolium',
           taxonRank: 'species',
           taxa: 127215
        }
      ]
    },
    {
      vernacularName: { en: 'Nardus stricta swards' },
      children: [
        {
          scientificName: 'Nardus stricta',
          taxonRank: 'species',
          taxa: 165653
        },
        {
          scientificName: 'Carex bigelowii',
          taxonRank: 'species',
          taxa: 127596
        },
        {
          scientificName: 'Anthoxanthum alpinum',
          taxonRank: 'species',
          taxa: 524194
        }
      ]
    },
    {
      vernacularName: { en: 'Polana mire' },
      children: [
        {
          scientificName: 'Silene flos-cuculi',
          taxonRank: 'species',
          taxa: 740984
        },
        {
          scientificName: 'Crepis paludosa',
          taxonRank: 'species',
          taxa: 336296
        },
        {
          scientificName: 'Rumex alpestris',
          taxonRank: 'species',
          taxa: 333937
        },
        {
          scientificName: 'Cirsium palustre',
          taxonRank: 'species',
          taxa: 160623
        },
        {
          scientificName: 'Carex limosa',
          taxonRank: 'species',
          taxa: 76071
        }
      ]
    },
    {
      vernacularName: { en: 'Generally subalpine' },
      children: [
        {
          scientificName: 'Vaccinium myrtillus',
           taxonRank: 'species',
           taxa: 127029
        },
        {
          scientificName: 'Deschampsa cespitosa',
           taxonRank: 'species',
           taxa: 76639
        },
        {
          scientificName: 'Bistorta officinalis/Polygonum bistorta/Persicaria bistorta',
           taxonRank: 'species',
           taxa: 133487
        },
        {
          scientificName: 'Homogyne alpina',
           taxonRank: 'species',
           taxa: 130479
        },
        {
          scientificName: 'Athyrium distentifolium',
           taxonRank: 'species',
           taxa: 75694
        }
      ]
    }
  ]
})
