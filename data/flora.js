import { initialize } from '../src/index.js'

initialize({
  metadata: {
    title: { en: 'Wikimedia Flora matcher' },
    description: { en: 'Do your best to match Wikimedia pictures to taxonomic groups! Created by Lars Willighagen.' },
    languages: ['en']
  },
  provider: {
    type: 'wikimedia'
  },
  taxa: [
    {
      scientificName: 'Monocotyledoneae',
      children: [
        { scientificName: 'Poaceae', taxonRank: 'family', taxa: 'Q43238' },
        {
          scientificName: 'Cyperaceae',
          taxonRank: 'family',
          taxa: 'Q155843',
          children: [
            { scientificName: 'Carex', taxonRank: 'genus', taxa: 'Q158501' }
          ]
        },
        {
          scientificName: 'Juncaceae',
          taxonRank: 'family',
          taxa: 'Q156169',
          children: [
            { scientificName: 'Juncus', taxonRank: 'genus', taxa: 'Q158480' },
            { scientificName: 'Luzula', taxonRank: 'genus', taxa: 'Q157588' }
          ]
        }
      ]
    },
    {
      scientificName: 'Dicotyledoneae',
      children: [
        {
          scientificName: 'Ranunculaceae',
          taxonRank: 'family',
          taxa: 'Q145869',
          children: [
            { scientificName: 'Ranunculus', taxonRank: 'genus', taxa: 'Q146130' }
          ]
        },
        {
          scientificName: 'Superrosids',
          children: [
            {
              scientificName: 'Fabiden',
              children: [
                {
                  scientificName: 'Fabaceae',
                  taxonRank: 'family',
                  taxa: 'Q44448',
                  children: [
                    { scientificName: 'Trifolium', taxonRank: 'genus', taxa: 'Q101538' },
                    { scientificName: 'Vicia', taxonRank: 'genus', taxa: 'Q147337' }
                  ]
                },
                {
                  scientificName: 'Rosaceae',
                  taxonRank: 'family',
                  taxa: 'Q46299',
                  children: [
                    { scientificName: 'Rubus', taxonRank: 'genus', taxa: 'Q602740' },
                    { scientificName: 'Prunus', taxonRank: 'genus', taxa: 'Q190545' },
                    { scientificName: 'Potentilla', taxonRank: 'genus', taxa: 'Q156512' }
                  ]
                }
              ]
            },
            {
              scientificName: 'Brassicaceae',
              taxonRank: 'family',
              taxa: 'Q156888',
              children: [
                { scientificName: 'Cardamine', taxonRank: 'genus', taxa: 'Q147299' }
              ]
            }
          ]
        },
        {
          scientificName: 'Superasterids',
          children: [
            {
              scientificName: 'Lamiiden',
              children: [
                {
                  scientificName: 'Boraginaceae',
                  taxonRank: 'family',
                  taxa: 'Q26568',
                  children: [
                    { scientificName: 'Myosotis', taxonRank: 'genus', taxa: 'Q147149' }
                  ]
                },
                {
                  scientificName: 'Lamiaceae',
                  taxonRank: 'family',
                  taxa: 'Q53476',
                  children: [
                    { scientificName: 'Lamium', taxonRank: 'genus', taxa: 'Q146675' }
                  ]
                }
              ]
            },
            {
              scientificName: 'Campanuliden',
              children: [
                {
                  scientificName: 'Caryophyllales',
                  taxonRank: 'order',
                  children: [
                    {
                      scientificName: 'Caryophyllaceae',
                      taxonRank: 'family',
                      taxa: 'Q25995',
                      children: [
                        { scientificName: 'Silene', taxonRank: 'genus', taxa: 'Q116209' },
                        { scientificName: 'Stellaria', taxonRank: 'genus', taxa: 'Q156694' },
                        { scientificName: 'Cerastium', taxonRank: 'genus', taxa: 'Q157483' }
                      ]
                    },
                    {
                      scientificName: 'Polygonaceae',
                      taxonRank: 'family',
                      taxa: 'Q156117',
                      children: [
                        { scientificName: 'Rumex', taxonRank: 'genus', taxa: 'Q157264' },
                        { scientificName: 'Persicaria', taxonRank: 'genus', taxa: 'Q159000' }
                      ]
                    }
                  ]
                },
                {
                  scientificName: 'Asteraceae',
                  taxonRank: 'family',
                  taxa: 'Q25400',
                  children: [
                    { scientificName: 'Cirsium', taxonRank: 'genus', taxa: 'Q1638558' },
                    { scientificName: 'Centaurea', taxonRank: 'genus', taxa: 'Q156414' }
                  ]
                },
                { scientificName: 'Apiaceae', taxonRank: 'family', taxa: 'Q145794' }
              ]
            }
          ]
        }
      ]
    }
  ]
})
