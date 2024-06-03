import { initialize } from '../src/index.js'

initialize({
  metadata: {
    title: { en: 'Wikimedia Biodiversity matcher' },
    description: { en: 'Do your best to match Wikimedia pictures to taxonomic groups! Created by Lars Willighagen.' },
    languages: ['en']
  },
  provider: {
    type: 'inaturalist',
    defaultOptions: {
      licenses: ['cc-by', 'cc-by-nc', 'cc0', 'cc-by-sa', 'cc-by-nc-sa']
    }
  },
  settings: {
    lifestage_exopterygota: {
      id: 'lifestage',
      label: { en: 'Exopterygota: Life stage' },
      options: [
        { id: 'any', label: { en: 'Any' } },
        { id: 'nymph', label: { en: 'Nymph' } },
        { id: 'adult', label: { en: 'Adult' } }
      ],
      value: 'any',
      defaultEnabled: false
    },
    lifestage_endopterygota: {
      id: 'lifestage',
      label: { en: 'Endopterygota: Life stage' },
      options: [
        { id: 'any', label: { en: 'Any' } },
        { id: 'larva', label: { en: 'Larva' } },
        { id: 'adult', label: { en: 'Adult' } }
      ],
      value: 'any',
      defaultEnabled: false
    }
  },
  taxa: [
    {
      scientificName: 'Chelicerata',
      taxonRank: 'subphylum',
      children: [
        { scientificName: 'Pycnogonida', taxonRank: 'class', taxa: 47825 },
        { scientificName: 'Xiphosura', taxonRank: 'class', taxa: 48309 },
        {
          scientificName: 'Arachnida',
          taxonRank: 'class',
          children: [
            { scientificName: 'Scorpionida', taxonRank: 'order', taxa: 48894 },
            { scientificName: 'Opiliones', taxonRank: 'order', taxa: 47367 },
            { scientificName: 'Pseudoscorpionida', taxonRank: 'order', taxa: 172373 },
            { scientificName: 'Aranea', taxonRank: 'order', taxa: 47118 },
            {
              scientificName: 'Acari',
              taxonRank: 'subclass',
              children: [
                { scientificName: 'Acariformes', taxonRank: 'superorder', taxa: 129763 },
                {
                  scientificName: 'Parasitiformes',
                  taxonRank: 'superorder',
                  children: [
                    { scientificName: 'Mesostigmata', taxonRank: 'order', taxa: 52790 },
                    { scientificName: 'Ixodida', taxonRank: 'order', taxa: 51672 }
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
        { scientificName: 'Diplopoda', taxonRank: 'class', taxa: 47735 },
        { scientificName: 'Pauropoda', taxonRank: 'class', taxa: 83243 },
        { scientificName: 'Symphyla', taxonRank: 'class', taxa: 84638 },
        { scientificName: 'Chilopoda', taxonRank: 'class', taxa: 49556 }
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
            { scientificName: 'Anostraca', taxonRank: 'order', taxa: 119123 },
            { scientificName: 'Cyclestherida', taxonRank: 'order', taxa: 774761 },
            { scientificName: 'Notostraca', taxonRank: 'order', taxa: 60396 },
            { scientificName: 'Cladocera', taxonRank: 'order', taxa: 199509 }
          ]
        },
        { scientificName: 'Branchiura', taxonRank: 'class', taxa: 372778 },
        { scientificName: 'Copepoda', taxonRank: 'class', taxa: 121643 },
        { scientificName: 'Ostracoda', taxonRank: 'class', taxa: 68764 },
        {
          scientificName: 'Theostraca',
          taxonRank: 'class',
          children: [
            {
              scientificName: 'Cirripeda',
              taxonRank: 'subclass',
              children: [
                { scientificName: 'Sessilia', taxonRank: 'order', taxa: 47662 },
                { scientificName: 'Pedunculata', taxonRank: 'order', taxa: 1040847 },  // <- Lepadiformes (Q3689)
                { scientificName: 'Rhizocephala', taxonRank: 'order', taxa: 358105 }
              ]
            }
          ]
        },
        {
          scientificName: 'Malacostraca',
          taxonRank: 'class',
          children: [
            { scientificName: 'Isopoda', taxonRank: 'order', taxa: 48147 },
            { scientificName: 'Amphipoda', taxonRank: 'order', taxa: 47628 },
            { scientificName: 'Mysidacea', taxonRank: 'order', taxa: 85532 },
            {
              scientificName: 'Decapoda',
              taxonRank: 'subclass',
              children: [
                { scientificName: 'Caridea', taxonRank: 'order', taxa: 342912 },
                { scientificName: 'Astacidea', taxonRank: 'order', taxa: 311310 },
                { scientificName: 'Anomura', taxonRank: 'order', taxa: 123825 },
                { scientificName: 'Brachyura', taxonRank: 'order', taxa: 121639 }
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
            { scientificName: 'Collembola', taxonRank: 'subclass', taxa: 49470 },
            { scientificName: 'Diplura', taxonRank: 'subclass', taxa: 56215 },
            { scientificName: 'Protura', taxonRank: 'subclass', taxa: 83242 }
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
                { scientificName: 'Archaeognatha', taxonRank: 'order', taxa: 461443 },
                { scientificName: 'Zygentoma', taxonRank: 'order', taxa: 48301 }
              ]
            },
            {
              scientificName: 'Pterygota',
              taxonRank: 'subclass',
              children: [
                {
                  scientificName: 'Exopterygota',
                  taxonRank: 'superorder',
                  settingsEnabled: { 'lifestage_exopterygota': true },
                  children: [
                    {
                      scientificName: 'Paleoptera',
                      children: [
                        { scientificName: 'Ephemoptera', taxonRank: 'order', taxa: 48011 },
                        {
                          scientificName: 'Odonata',
                          taxonRank: 'order',
                          children: [
                            { scientificName: 'Zygoptera', taxonRank: 'suborder', taxa: 47928 },
                            { scientificName: 'Anisoptera', taxonRank: 'suborder', taxa: 47927 }
                          ]
                        }
                      ]
                    },
                    {
                      scientificName: 'Neoptera',
                      children: [
                        { scientificName: 'Plecoptera', taxonRank: 'order', taxa: 47504 },
                        { scientificName: 'Dermaptera', taxonRank: 'order', taxa: 47793 },
                        {
                          scientificName: 'Orthoptera',
                          taxonRank: 'order',
                          children: [
                            {
                              scientificName: 'Ensifera',
                              taxonRank: 'suborder',
                              children: [
                                { scientificName: 'Tettigoniidae', taxonRank: 'family', taxa: 48124 },
                                { scientificName: 'Gryllidae', taxonRank: 'family', taxa: 52884 },
                                { scientificName: 'Gryllotalpidae', taxonRank: 'family', taxa: 71220 }
                              ]
                            },
                            {
                              scientificName: 'Caelifera',
                              taxonRank: 'suborder',
                              children: [
                                { scientificName: 'Acrididae', taxonRank: 'family', taxa: 47649 },
                                { scientificName: 'Tetrigidae', taxonRank: 'family', taxa: 57658 }
                              ]
                            }
                          ]
                        },
                        {
                          scientificName: 'Dictyoptera',
                          taxonRank: 'superorder',
                          children: [
                            { scientificName: 'Blattaria', taxonRank: 'order', taxa: 82232 },
                            { scientificName: 'Isoptera', taxonRank: 'order', taxa: 118903 },
                            { scientificName: 'Mantodea', taxonRank: 'order', taxa: 48112 }
                          ]
                        },
                        { scientificName: 'Psocoptera', taxonRank: 'order', taxa: 83187 },
                        { scientificName: 'Phthiraptera', taxonRank: 'order', taxa: 152843 },
                        { scientificName: 'Thysanoptera', taxonRank: 'order', taxa: 83201 },
                        {
                          scientificName: 'Hemiptera',
                          taxonRank: 'order',
                          children: [
                            { scientificName: 'Auchenorrhyncha', taxonRank: 'suborder', taxa: 125816 },
                            { scientificName: 'Heteroptera', taxonRank: 'suborder', taxa: 61267 },
                            { scientificName: 'Sternorrhyncha', taxonRank: 'suborder', taxa: 334037 }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  scientificName: 'Endopterygota',
                  taxonRank: 'superorder',
                  settingsEnabled: { 'lifestage_endopterygota': true },
                  children: [
                    {
                      scientificName: 'Coleoptera',
                      taxonRank: 'order',
                      children: [
                        { scientificName: 'Adephaga', taxonRank: 'suborder', taxa: 340471 },
                        { scientificName: 'Polyphaga', taxonRank: 'suborder', taxa: 71130 }
                      ]
                    },
                    { scientificName: 'Rhaphidioptera', taxonRank: 'order', taxa: 47794 },
                    { scientificName: 'Megaloptera', taxonRank: 'order', taxa: 47864 },
                    {
                      scientificName: 'Planipennia',
                      taxonRank: 'order',
                      children: [
                        { scientificName: 'Chrysopidae', taxonRank: 'family', taxa: 52425 },
                        { scientificName: 'Myrmeleonidae', taxonRank: 'family', taxa: 49358 }
                      ]
                    },
                    {
                      scientificName: 'Hymenoptera',
                      taxonRank: 'order',
                      children: [
                        { scientificName: 'Symphyta', taxonRank: 'suborder', taxa: 84643 },
                        // Q957016 = Ichneumonoidea (Parasitica = Q43303344)
                        // { scientificName: 'Parasitica', taxonRank: 'suborder', taxa: 'Q957016' },
                        { scientificName: 'Aculeata', taxonRank: 'suborder', taxa: 326777 }
                      ]
                    },
                    { scientificName: 'Strepsiptera', taxonRank: 'order', taxa: 83202 },
                    { scientificName: 'Mecoptera', taxonRank: 'order', taxa: 372864 },
                    { scientificName: 'Siphonaptera', taxonRank: 'order', taxa: 83204 },
                    {
                      scientificName: 'Diptera',
                      taxonRank: 'order',
                      children: [
                        { scientificName: 'Nematocera', taxonRank: 'suborder', taxa: 154259 },
                        {
                          scientificName: 'Brachycera',
                          taxonRank: 'suborder',
                          children: [
                            { scientificName: 'Orthorrhapha', taxonRank: 'infraorder', taxa: 372865 },
                            { scientificName: 'Cyclorrhapha', taxonRank: 'infraorder', taxa: 372853 }
                          ]
                        }
                      ]
                    },
                    { scientificName: 'Trichoptera', taxonRank: 'order', taxa: 62164 },
                    { scientificName: 'Lepidoptera', taxonRank: 'order', taxa: 47157 }
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
