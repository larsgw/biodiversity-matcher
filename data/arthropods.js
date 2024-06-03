import { initialize } from '../src/index.js'

initialize({
  metadata: {
    title: { en: 'Wikimedia Biodiversity matcher' },
    description: { en: 'Do your best to match Wikimedia pictures to taxonomic groups! Created by Lars Willighagen.' },
    languages: ['en']
  },
  provider: {
    type: 'wikimedia'
  },
  taxa: [
    {
      scientificName: 'Chelicerata',
      taxonRank: 'subphylum',
      children: [
        { scientificName: 'Pycnogonida', taxonRank: 'class', taxa: 'Q19106' },
        { scientificName: 'Xiphosura', taxonRank: 'class', taxa: 'Q19430' },
        {
          scientificName: 'Arachnida',
          taxonRank: 'class',
          children: [
            // Q19125 = Scorpiones (Scorpionida = Q30749508)
            { scientificName: 'Scorpionida', taxonRank: 'order', taxa: 'Q19125' },
            { scientificName: 'Opiliones', taxonRank: 'order', taxa: 'Q19116' },
            // Q19119 = Pseudoscorpiones (Pseudoscorpionida = Q35135521)
            { scientificName: 'Pseudoscorpionida', taxonRank: 'order', taxa: 'Q19119' },
            { scientificName: 'Aranea', taxonRank: 'order', taxa: 'Q1357' },
            {
              scientificName: 'Acari',
              taxonRank: 'subclass',
              children: [
                { scientificName: 'Acariformes', taxonRank: 'superorder', taxa: 'Q1341457' },
                {
                  scientificName: 'Parasitiformes',
                  taxonRank: 'superorder',
                  children: [
                    { scientificName: 'Mesostigmata', taxonRank: 'order', taxa: 'Q1240844' },
                    { scientificName: 'Ixodida', taxonRank: 'order', taxa: 'Q10304508' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      scientificName: 'Myriapoda',
      taxonRank: 'subphylum',
      children: [
        { scientificName: 'Diplopoda', taxonRank: 'class', taxa: 'Q167367' },
        { scientificName: 'Pauropoda', taxonRank: 'class', taxa: 'Q217512' },
        { scientificName: 'Symphyla', taxonRank: 'class', taxa: 'Q244147' },
        { scientificName: 'Chilopoda', taxonRank: 'class', taxa: 'Q43447' }
      ]
    },
    {
      scientificName: 'Crustacea',
      taxonRank: 'subphylum',
      children: [
        {
          scientificName: 'Branchiopoda',
          taxonRank: 'class',
          children: [
            { scientificName: 'Anostraca', taxonRank: 'order', taxa: 'Q853383' },
            // { scientificName: 'Cyclestherida', taxonRank: 'order', taxa: 'Q21217579' },
            { scientificName: 'Notostraca', taxonRank: 'order', taxa: 'Q3344541' },
            { scientificName: 'Cladocera', taxonRank: 'order', taxa: 'Q391240' }
          ]
        },
        { scientificName: 'Branchiura', taxonRank: 'class', taxa: 'Q841641' },
        { scientificName: 'Copepoda', taxonRank: 'class', taxa: 'Q189973' },
        { scientificName: 'Ostracoda', taxonRank: 'class', taxa: 'Q276412' },
        {
          scientificName: 'Theostraca',
          taxonRank: 'class',
          children: [
            {
              scientificName: 'Cirripeda',
              taxonRank: 'subclass',
              children: [
                { scientificName: 'Sessilia', taxonRank: 'order', taxa: 'Q3175015' },
                { scientificName: 'Pedunculata', taxonRank: 'order', taxa: 'Q3689' },
                { scientificName: 'Rhizocephala', taxonRank: 'order', taxa: 'Q2341208' }
              ]
            }
          ]
        },
        {
          scientificName: 'Malacostraca',
          taxonRank: 'class',
          children: [
            { scientificName: 'Isopoda', taxonRank: 'order', taxa: 'Q206338' },
            { scientificName: 'Amphipoda', taxonRank: 'order', taxa: 'Q193418' },
            { scientificName: 'Mysidacea', taxonRank: 'order', taxa: ['Q13411080', 'Q900771'] },
            {
              scientificName: 'Decapoda',
              taxonRank: 'subclass',
              children: [
                { scientificName: 'Caridea', taxonRank: 'order', taxa: 'Q80117' },
                { scientificName: 'Astacidea', taxonRank: 'order', taxa: 'Q929163' },
                { scientificName: 'Anomura', taxonRank: 'order', taxa: 'Q526867' },
                { scientificName: 'Brachyura', taxonRank: 'order', taxa: 'Q40802' }
              ]
            }
          ]
        }
      ]
    },
    {
      scientificName: 'Hexapoda',
      taxonRank: 'subphylum',
      children: [
        {
          scientificName: 'Entognatha',
          taxonRank: 'class',
          children: [
            { scientificName: 'Collembola', taxonRank: 'subclass', taxa: 'Q190701' },
            { scientificName: 'Diplura', taxonRank: 'subclass', taxa: 'Q221563' },
            { scientificName: 'Protura', taxonRank: 'subclass', taxa: 'Q271631' }
          ]
        },
        {
          scientificName: 'Insecta',
          taxonRank: 'class',
          children: [
            {
              scientificName: 'Apterygota',
              taxonRank: 'subclass',
              children: [
                { scientificName: 'Archaeognatha', taxonRank: 'order', taxa: 'Q637179' },
                { scientificName: 'Zygentoma', taxonRank: 'order', taxa: 'Q30111' }
              ]
            },
            {
              scientificName: 'Pterygota',
              taxonRank: 'subclass',
              children: [
                {
                  scientificName: 'Exopterygota',
                  taxonRank: 'superorder',
                  children: [
                    {
                      scientificName: 'Paleoptera',
                      children: [
                        { scientificName: 'Ephemoptera', taxonRank: 'order', taxa: 'Q174273' },
                        {
                          scientificName: 'Odonata',
                          taxonRank: 'order',
                          children: [
                            { scientificName: 'Zygoptera', taxonRank: 'suborder', taxa: 'Q230502' },
                            { scientificName: 'Anisoptera', taxonRank: 'suborder', taxa: 'Q80066' }
                          ]
                        }
                      ]
                    },
                    {
                      scientificName: 'Neoptera',
                      children: [
                        { scientificName: 'Plecoptera', taxonRank: 'order', taxa: 'Q203547' },
                        { scientificName: 'Dermaptera', taxonRank: 'order', taxa: 'Q13676' },
                        {
                          scientificName: 'Orthoptera',
                          taxonRank: 'order',
                          children: [
                            {
                              scientificName: 'Ensifera',
                              taxonRank: 'suborder',
                              children: [
                                { scientificName: 'Tettigoniidae', taxonRank: 'family', taxa: 'Q727919' },
                                { scientificName: 'Gryllidae', taxonRank: 'family', taxa: 'Q47328' },
                                { scientificName: 'Gryllotalpidae', taxonRank: 'family', taxa: 'Q199765' }
                              ]
                            },
                            {
                              scientificName: 'Caelifera',
                              taxonRank: 'suborder',
                              children: [
                                { scientificName: 'Acrididae', taxonRank: 'family', taxa: 'Q7618284' },
                                { scientificName: 'Tetrigidae', taxonRank: 'family', taxa: 'Q768200' }
                              ]
                            }
                          ]
                        },
                        {
                          scientificName: 'Dictyoptera',
                          taxonRank: 'superorder',
                          children: [
                            // Q139689 = Blattodea (Blattaria = Q25309)
                            { scientificName: 'Blattaria', taxonRank: 'order', taxa: 'Q139689' },
                            { scientificName: 'Isoptera', taxonRank: 'order', taxa: 'Q546583' },
                            { scientificName: 'Mantodea', taxonRank: 'order', taxa: 'Q131250' }
                          ]
                        },
                        { scientificName: 'Psocoptera', taxonRank: 'order', taxa: 'Q271623' },
                        { scientificName: 'Phthiraptera', taxonRank: 'order', taxa: 'Q6481228' },
                        { scientificName: 'Thysanoptera', taxonRank: 'order', taxa: 'Q185628' },
                        {
                          scientificName: 'Hemiptera',
                          taxonRank: 'order',
                          children: [
                            { scientificName: 'Auchenorrhyncha', taxonRank: 'suborder', taxa: 'Q202890' },
                            { scientificName: 'Heteroptera', taxonRank: 'suborder', taxa: 'Q27191' },
                            { scientificName: 'Sternorrhyncha', taxonRank: 'suborder', taxa: 'Q621840' }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  scientificName: 'Endopterygota',
                  taxonRank: 'superorder',
                  children: [
                    {
                      scientificName: 'Coleoptera',
                      taxonRank: 'order',
                      children: [
                        { scientificName: 'Adephaga', taxonRank: 'suborder', taxa: 'Q131060' },
                        { scientificName: 'Polyphaga', taxonRank: 'suborder', taxa: 'Q147877' }
                      ]
                    },
                    { scientificName: 'Rhaphidioptera', taxonRank: 'order', taxa: 'Q217516' },
                    { scientificName: 'Megaloptera', taxonRank: 'order', taxa: 'Q194025' },
                    {
                      scientificName: 'Planipennia',
                      taxonRank: 'order',
                      children: [
                        { scientificName: 'Chrysopidae', taxonRank: 'family', taxa: 'Q623727' },
                        { scientificName: 'Myrmeleonidae', taxonRank: 'family', taxa: 'Q231439' }
                      ]
                    },
                    {
                      scientificName: 'Hymenoptera',
                      taxonRank: 'order',
                      children: [
                        { scientificName: 'Symphyta', taxonRank: 'suborder', taxa: 'Q615290' },
                        {
                          scientificName: 'Apocrita (Parasitica)',
                          taxonRank: 'suborder',
                          taxa: 'Q22864',
                          children: [
                            { scientificName: 'Aculeata', taxonRank: 'suborder', taxa: 'Q1251421' }
                          ]
                        }
                      ]
                    },
                    { scientificName: 'Strepsiptera', taxonRank: 'order', taxa: 'Q327144' },
                    { scientificName: 'Mecoptera', taxonRank: 'order', taxa: 'Q205301' },
                    { scientificName: 'Siphonaptera', taxonRank: 'order', taxa: 'Q388162' },
                    {
                      scientificName: 'Diptera',
                      taxonRank: 'order',
                      children: [
                        { scientificName: 'Nematocera', taxonRank: 'suborder', taxa: 'Q27605' },
                        {
                          scientificName: 'Brachycera (Orthorrhapha)',
                          taxonRank: 'suborder',
                          taxa: 'Q27584',
                          children: [
                            { scientificName: 'Cyclorrhapha', taxonRank: 'infraorder', taxa: 'Q14857444' }
                          ]
                        }
                      ]
                    },
                    { scientificName: 'Trichoptera', taxonRank: 'order', taxa: 'Q184616' },
                    { scientificName: 'Lepidoptera', taxonRank: 'order', taxa: 'Q28319' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})
