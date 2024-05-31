import { initialize } from '../src/index.js'

initialize({
  metadata: {
    title: {
      en: 'Invasive Mollusca quiz'
    },
    description: {
      en: 'Do your best to recognize these invasive Mollusca species! Created by Lars Willighagen.'
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
      scientificName: 'Bivalvia',
      taxonRank: 'class',
      children: [
        {
          vernacularName: { en: 'Invasive Bivalvia' },
          children: [
            { scientificName: 'Dreissena polymorpha', taxonRank: 'species', taxa: 116340 },
            { scientificName: 'Dreissena rostriformis bugensis', taxonRank: 'species', taxa: 151570 },
            { scientificName: 'Corbicula fluminalis', taxonRank: 'species', taxa: 472901 },
            { scientificName: 'Corbicula fluminea', taxonRank: 'species', taxa: 64006 }
          ],
        },
        {
          vernacularName: { en: 'Native Bivalvia' },
          children: [
            { scientificName: 'Unio tumidus', taxonRank: 'species', taxa: 151760 },
            { scientificName: 'Unio pictorum', taxonRank: 'species', taxa: 151758 }
          ]
        }
      ]
    },
    {
      scientificName: 'Gastropoda',
      taxonRank: 'class',
      children: [
        {
          vernacularName: { en: 'Invasive Gastropoda' },
          children: [
            { scientificName: 'Potamopyrgus antipodarum', taxonRank: 'species', taxa: 129201 },
            { scientificName: 'Physa acuta/Physella acuta', taxonRank: 'species', taxa: 563819 },
            { scientificName: 'Lithoglyphus naticoides', taxonRank: 'species', taxa: 150740 },
            { scientificName: 'Menetus dilatatus', taxonRank: 'species', taxa: 336768 }
          ]
        },
        {
          vernacularName: { en: 'Native Gastropoda' },
          children: [
            { scientificName: 'Valvata piscinalis', taxonRank: 'species', taxa: 151289 },
            { scientificName: 'Bithynia tentaculata', taxonRank: 'species', taxa: 127189 }
          ]
        }
      ]
    }
  ]
})
