import { initialize } from '../src/index.js'

initialize({
  metadata: {
    title: { nl: 'Dagvlinders van Nederland', en: 'Butterflies of the Netherlands' },
    description: { nl: 'Leer de dagvlinders van Nederland!', en: 'Learn the butterflies of the Netherlands!' },
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
      scientificName: 'Hesperiidae',
      taxonRank: 'family',
      children: [
        {
          scientificName: 'Carcharodus alceae',
          taxonRank: 'species',
          taxa: 8277078,
          vernacularName: { nl: 'Kaasjeskruiddikkopje', en: 'Mallow Skipper' }
        },
        {
          scientificName: 'Carterocephalus palaemon',
          taxonRank: 'species',
          taxa: 1947335,
          vernacularName: { nl: 'Bont dikkopje', en: 'Chequered Skipper Butterfly' }
        },
        {
          scientificName: 'Erynnis tages',
          taxonRank: 'species',
          taxa: 8270406,
          vernacularName: { nl: 'Bruin dikkopje', en: 'Dingy Skipper' }
        },
        {
          scientificName: 'Hesperia comma',
          taxonRank: 'species',
          taxa: 7633472,
          vernacularName: { nl: 'Kommavlinder', en: 'Silver-Spotted Skipper' }
        },
        {
          scientificName: 'Heteropterus morpheus',
          taxonRank: 'species',
          taxa: 5141677,
          vernacularName: { nl: 'Spiegeldikkopje', en: 'Large Chequered Skipper' }
        },
        {
          scientificName: 'Ochlodes venata',
          taxonRank: 'species',
          taxa: 7389824,
          vernacularName: { nl: 'Groot dikkopje', en: 'Large Skipper' }
        },
        {
          scientificName: 'Pyrgus',
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Pyrgus armoricanus',
              taxonRank: 'species',
              taxa: 1949784,
              vernacularName: { nl: 'Bretons spikkeldikkopje', en: 'Obertür´s Grizzled Skipper' }
            },
            {
              scientificName: 'Pyrgus malvae',
              taxonRank: 'species',
              taxa: 8109173,
              vernacularName: { nl: 'Aardbeivlinder', en: 'Grizzled Skipper' }
            }
          ],
          vernacularName: { en: 'Grizzled Skippers' }
        },
        {
          scientificName: 'Spialia sertorius',
          taxonRank: 'species',
          taxa: 1945569,
          vernacularName: { nl: 'Kalkgraslanddikkopje', en: 'Red Underwing Skipper' }
        },
        {
          scientificName: 'Thymelicus',
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Thymelicus lineola',
              taxonRank: 'species',
              taxa: 8133678,
              vernacularName: { nl: 'Zwartsprietdikkopje', en: 'Essex Skipper' }
            },
            {
              scientificName: 'Thymelicus sylvestris',
              taxonRank: 'species',
              taxa: 8273661,
              vernacularName: { nl: 'Geelsprietdikkopje', en: 'Hesperiid moth' }
            }
          ]
        }
      ],
      vernacularName: { nl: 'Dikkopjes', en: 'Skippers' }
    },
    {
      scientificName: 'Lycaenidae',
      taxonRank: 'family',
      children: [
        {
          scientificName: 'Agriades optilete',
          taxonRank: 'species',
          taxa: 1922937,
          vernacularName: { nl: 'Veenbesblauwtje', en: 'Cranberry Blue' }
        },
        {
          scientificName: 'Aricia agestis',
          taxonRank: 'species',
          taxa: 1933095,
          vernacularName: { nl: 'Bruin blauwtje', en: 'Brown Argus' }
        },
        {
          scientificName: 'Cacyreus marshalli',
          taxonRank: 'species',
          taxa: 1932752,
          vernacularName: { nl: 'Geraniumblauwtje', en: 'Pelargonium Butterfly' }
        },
        {
          scientificName: 'Callophrys rubi',
          taxonRank: 'species',
          taxa: 1932411,
          vernacularName: { nl: 'Groentje', en: 'Green Hairstreak Butterfly' }
        },
        {
          scientificName: 'Celastrina argiolus',
          taxonRank: 'species',
          taxa: 1925918,
          vernacularName: { nl: 'Boomblauwtje', en: 'Holly Blue Butterfly' }
        },
        {
          scientificName: 'Cupido',
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Cupido minimus',
              taxonRank: 'species',
              taxa: 1926260,
              vernacularName: { nl: 'Dwergblauwtje', en: 'Small Blue Butterfly' }
            },
            {
              scientificName: 'Cupido argiades',
              taxonRank: 'species',
              taxa: 1920851,
              vernacularName: { nl: 'Staartblauwtje', en: 'Short-tailed Blue' }
            }
          ]
        },
        {
          scientificName: 'Cyaniris semiargus',
          taxonRank: 'species',
          taxa: 5139156,
          vernacularName: { nl: 'Klaverblauwtje', en: 'Mazarine Blue' }
        },
        {
          scientificName: 'Favonius',
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Favonius quercus',
              taxonRank: 'species',
              taxa: 1926324,
              vernacularName: { nl: 'Eikenpage', en: 'Purple Hairstreak' }
            }
          ]
        },
        {
          scientificName: 'Lampides boeticus',
          taxonRank: 'species',
          taxa: 1924713,
          vernacularName: { nl: 'Tijgerblauwtje', en: 'Bean butterfly' }
        },
        {
          scientificName: 'Lycaena',
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Lycaena dispar',
              taxonRank: 'species',
              taxa: 1929270,
              vernacularName: { nl: 'Grote vuurvlinder', en: 'Large Copper' }
            },
            {
              scientificName: 'Lycaena phlaeas',
              taxonRank: 'species',
              taxa: 1929697,
              vernacularName: { nl: 'Kleine vuurvlinder', en: 'Small Copper Butterfly' }
            },
            {
              scientificName: 'Lycaena tityrus',
              taxonRank: 'species',
              taxa: 1924494,
              vernacularName: { nl: 'Bruine vuurvlinder', en: 'Sooty Copper' }
            },
            {
              scientificName: 'Lycaena virgaureae',
              taxonRank: 'species',
              taxa: 1929659,
              vernacularName: { nl: 'Morgenrood', en: 'Scarce Copper' }
            }
          ],
          vernacularName: { nl: 'Vuurvlinders', en: 'Coppers' }
        },
        {
          scientificName: 'Lysandra coridon',
          taxonRank: 'species',
          taxa: 1925221,
          vernacularName: { nl: 'Bleek blauwtje', en: 'Chalk-hill Blue' }
        },
        {
          scientificName: 'Phengaris',
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Phengaris alcon',
              taxonRank: 'species',
              taxa: 8016522,
              vernacularName: { nl: 'Gentiaanblauwtje', en: 'Alcon Blue' }
            },
            {
              scientificName: 'Phengaris nausithous',
              taxonRank: 'species',
              taxa: 1922343,
              vernacularName: { nl: 'Donker pimpernelblauwtje', en: 'Dusky Large Blue' }
            },
            {
              scientificName: 'Phengaris teleius',
              taxonRank: 'species',
              taxa: 4535172,
              vernacularName: { nl: 'Pimpernelblauwtje', en: 'Scarce Teleius' }
            }
          ]
        },
        {
          scientificName: 'Plebejus',
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Plebejus argus',
              taxonRank: 'species',
              taxa: 5138561,
              vernacularName: { nl: 'Heideblauwtje', en: 'Silver-studded Blue' }
            },
            {
              scientificName: 'Plebejus idas',
              taxonRank: 'species',
              taxa: 1926861,
              vernacularName: { nl: 'Vals heideblauwtje', en: 'Northern Blue' }
            }
          ]
        },
        {
          scientificName: 'Polyommatus icarus',
          taxonRank: 'species',
          taxa: 5140214,
          vernacularName: { nl: 'Icarusblauwtje', en: 'Common Blue Butterfly' }
        },
        {
          scientificName: 'Satyrium',
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Satyrium ilicis',
              taxonRank: 'species',
              taxa: 5138681,
              vernacularName: { nl: 'Bruine eikenpage', en: 'Ilex Hairstreak' }
            },
            {
              scientificName: 'Satyrium pruni',
              taxonRank: 'species',
              taxa: 1931779,
              vernacularName: { nl: 'Pruimenpage', en: 'Black Hairstreak' }
            },
            {
              scientificName: 'Satyrium w-album',
              taxonRank: 'species',
              taxa: 5882965,
              vernacularName: { nl: 'Iepepage', en: 'White-letter Hairstreak' }
            }
          ],
          vernacularName: { nl: 'Kleine pages', en: 'Satyrid Hairstreaks' }
        },
        {
          scientificName: 'Thecla betulae',
          taxonRank: 'species',
          taxa: 1930110,
          vernacularName: { nl: 'Sleedoornpage', en: 'Brown Hairstreak' }
        }
      ],
      vernacularName: { nl: 'Blauwtjes en vuurvlinders', en: 'Blues' }
    },
    {
      scientificName: 'Nymphalidae',
      taxonRank: 'family',
      children: [
        {
          scientificName: 'Apaturinae',
          taxonRank: 'subfamily',
          children: [
            {
              scientificName: 'Apatura',
              taxonRank: 'genus',
              children: [
                {
                  scientificName: 'Apatura ilia',
                  taxonRank: 'species',
                  taxa: 8138711,
                  vernacularName: { nl: 'Kleine weerschijnvlinder', en: 'Purple Emperor' }
                },
                {
                  scientificName: 'Apatura iris',
                  taxonRank: 'species',
                  taxa: 5131910,
                  vernacularName: { nl: 'Grote weerschijnvlinder', en: 'Purple Emperor' }
                }
              ]
            }
          ]
        },
        {
          scientificName: 'Danainae',
          taxonRank: 'subfamily',
          children: [
            {
              scientificName: 'Danaus plexippus',
              taxonRank: 'species',
              taxa: 5133088,
              vernacularName: { nl: 'Amerikaanse monarch', en: 'Milkweed Butterfly' }
            }
          ]
        },
        {
          scientificName: 'Heliconiinae',
          taxonRank: 'subfamily',
          children: [
            {
              scientificName: 'Argynnis paphia',
              taxonRank: 'species',
              taxa: 1909398,
              vernacularName: { nl: 'Keizersmantel', en: 'Silver-Washed Fritillary' }
            },
            {
              scientificName: 'Boloria',
              taxonRank: 'genus',
              children: [
                {
                  scientificName: 'Boloria aquilonaris',
                  taxonRank: 'species',
                  taxa: 1912372,
                  vernacularName: { nl: 'Veenbesparelmoervlinder', en: 'Cranberry Fritillary' }
                },
                {
                  scientificName: 'Boloria dia',
                  taxonRank: 'species',
                  taxa: 5772890,
                  vernacularName: { nl: 'Akkerparelmoervlinder', en: "Weaver's Fritillary" }
                },
                {
                  scientificName: 'Boloria euphrosyne',
                  taxonRank: 'species',
                  taxa: 1894268,
                  vernacularName: { nl: 'Zilvervlek', en: 'Pearl-bordered Fritillary' }
                },
                {
                  scientificName: 'Boloria selene',
                  taxonRank: 'species',
                  taxa: 1912325,
                  vernacularName: { nl: 'Zilveren maan', en: 'Small Pearl-bordered Fritillary Butterfly' }
                }
              ]
            },
            {
              scientificName: 'Brenthis',
              taxonRank: 'genus',
              children: [
                {
                  scientificName: 'Brenthis daphne',
                  taxonRank: 'species',
                  taxa: 8140883,
                  vernacularName: { nl: 'Braamparelmoervlinder', en: 'Marbled Fritillary' }
                },
                {
                  scientificName: 'Brenthis ino',
                  taxonRank: 'species',
                  taxa: 1902749,
                  vernacularName: { nl: 'Purperstreepparelmoervlinder', en: 'Lesser Marbled Fritillary' }
                }
              ]
            },
            {
              scientificName: 'Fabriciana',
              taxonRank: 'genus',
              children: [
                {
                  scientificName: 'Fabriciana adippe',
                  taxonRank: 'species',
                  taxa: 7809779,
                  vernacularName: { nl: 'Adippevlinder', en: 'High Brown Fritillary' }
                },
                {
                  scientificName: 'Fabriciana niobe',
                  taxonRank: 'species',
                  taxa: 8078362,
                  vernacularName: { nl: 'Duinparelmoervlinder', en: 'Niobe Fritillary' }
                }
              ]
            },
            {
              scientificName: 'Issoria lathonia',
              taxonRank: 'species',
              taxa: 1905383,
              vernacularName: { nl: 'Kleine parelmoervlinder', en: 'Queen of Spain Fritillary' }
            },
            {
              scientificName: 'Speyeria aglaja',
              taxonRank: 'species',
              taxa: 6221746,
              vernacularName: { nl: 'Grote parelmoervlinder', en: 'Dark Green Fritillary Butterfly' }
            }
          ]
        },
        {
          scientificName: 'Limenitinae',
          taxonRank: 'subfamily',
          children: [
            {
              scientificName: 'Limenitis',
              taxonRank: 'genus',
              children: [
                {
                  scientificName: 'Limenitis camilla',
                  taxonRank: 'species',
                  taxa: 7712938,
                  vernacularName: { nl: 'Kleine ijsvogelvlinder', en: 'White Admiral' }
                },
                {
                  scientificName: 'Limenitis populi',
                  taxonRank: 'species',
                  taxa: 5132183,
                  vernacularName: { nl: 'Grote ijsvogelvlinder', en: 'Poplar Admiral' }
                },
                {
                  scientificName: 'Limenitis reducta',
                  taxonRank: 'species',
                  taxa: 8001799,
                  vernacularName: { nl: 'Blauwe ijsvogelvlinder', en: 'Southern White Admiral' }
                }
              ]
            }
          ]
        },
        {
          scientificName: 'Melitaeinae',
          taxonRank: 'subfamily',
          children: [
            {
              scientificName: 'Euphydryas aurinia',
              taxonRank: 'species',
              taxa: 4535809,
              vernacularName: { nl: 'Moerasparelmoervlinder', en: 'Marsh Fritillary Butterfly' }
            },
            {
              scientificName: 'Melitaea',
              taxonRank: 'genus',
              children: [
                {
                  scientificName: 'Melitaea athalia',
                  taxonRank: 'species',
                  taxa: 1899433,
                  vernacularName: { nl: 'Bosparelmoervlinder', en: 'Heath Fritillary' }
                },
                {
                  scientificName: 'Melitaea aurelia',
                  taxonRank: 'species',
                  taxa: 1913175,
                  vernacularName: { nl: 'Steppeparelmoervlinder', en: "Nickerl's Fritillary" }
                },
                {
                  scientificName: 'Melitaea cinxia',
                  taxonRank: 'species',
                  taxa: 8168644,
                  vernacularName: { nl: 'Veldparelmoervlinder', en: 'Glanville Fritillary' }
                }
              ]
            }
          ]
        },
        {
          scientificName: 'Nymphalinae',
          taxonRank: 'subfamily',
          children: [
            {
              scientificName: 'Aglais',
              taxonRank: 'genus',
              children: [
                {
                  scientificName: 'Aglais io',
                  taxonRank: 'species',
                  taxa: 4535827,
                  vernacularName: { nl: 'Dagpauwoog', en: 'Peacock' }
                },
                {
                  scientificName: 'Aglais urticae',
                  taxonRank: 'species',
                  taxa: 1894840,
                  vernacularName: { nl: 'Kleine vos', en: 'Small Tortoiseshell' }
                }
              ]
            },
            {
              scientificName: 'Araschnia levana',
              taxonRank: 'species',
              taxa: 1902533,
              vernacularName: { nl: 'Landkaartje', en: 'Map' }
            },
            {
              scientificName: 'Nymphalis',
              taxonRank: 'genus',
              children: [
                {
                  scientificName: 'Nymphalis antiopa',
                  taxonRank: 'species',
                  taxa: 5130682,
                  vernacularName: { nl: 'Rouwmantel', en: 'mourning cloak' }
                },
                {
                  scientificName: 'Nymphalis polychloros',
                  taxonRank: 'species',
                  taxa: 7762841,
                  vernacularName: { nl: 'Grote vos', en: 'Large Tortoiseshell' }
                }
              ],
              vernacularName: { en: 'Tortoiseshells' }
            },
            {
              scientificName: 'Polygonia c-album',
              taxonRank: 'species',
              taxa: 1898544,
              vernacularName: { nl: 'Gehakkelde aurelia', en: 'Comma Butterfly' }
            },
            {
              scientificName: 'Vanessa',
              taxonRank: 'genus',
              children: [
                {
                  scientificName: 'Vanessa atalanta',
                  taxonRank: 'species',
                  taxa: 1898286,
                  vernacularName: { nl: 'Atalanta', en: 'Red Admiral' }
                },
                {
                  scientificName: 'Vanessa cardui',
                  taxonRank: 'species',
                  taxa: 4299368,
                  vernacularName: { nl: 'distelvlinder', en: 'painted lady' }
                }
              ]
            }
          ]
        },
        {
          scientificName: 'Satyrinae',
          taxonRank: 'subfamily',
          children: [
            {
              scientificName: 'Aphantopus hyperantus',
              taxonRank: 'species',
              taxa: 1896841,
              vernacularName: { nl: 'Koevinkje', en: 'Ringlet Butterfly' }
            },
            {
              scientificName: 'Coenonympha',
              taxonRank: 'genus',
              children: [
                {
                  scientificName: 'Coenonympha arcania',
                  taxonRank: 'species',
                  taxa: 7728366,
                  vernacularName: { nl: 'Tweekleurig hooibeestje', en: 'Pearly Heath' }
                },
                {
                  scientificName: 'Coenonympha hero',
                  taxonRank: 'species',
                  taxa: 1911278,
                  vernacularName: { nl: 'Zilverstreephooibeestje', en: 'Scarce Heath' }
                },
                {
                  scientificName: 'Coenonympha pamphilus',
                  taxonRank: 'species',
                  taxa: 1911461,
                  vernacularName: { nl: 'Hooibeestje', en: 'Small Heath' }
                },
                {
                  scientificName: 'Coenonympha tullia',
                  taxonRank: 'species',
                  taxa: 1911112,
                  vernacularName: { nl: 'Veenhooibeestje', en: 'Ringlet' }
                }
              ],
              vernacularName: { en: 'Ringlets' }
            },
            {
              scientificName: 'Hipparchia',
              taxonRank: 'genus',
              children: [
                {
                  scientificName: 'Hipparchia semele',
                  taxonRank: 'species',
                  taxa: 8176911,
                  vernacularName: { nl: 'Heivlinder', en: 'Grayling' }
                },
                {
                  scientificName: 'Hipparchia statilinus',
                  taxonRank: 'species',
                  taxa: 8035998,
                  vernacularName: { nl: 'Kleine heivlinder', en: 'Tree Grayling' }
                }
              ]
            },
            {
              scientificName: 'Maniola jurtina',
              taxonRank: 'species',
              taxa: 5135513,
              vernacularName: { nl: 'Bruin zandoogje', en: 'Meadow Brown Butterfly' }
            },
            {
              scientificName: 'Melanargia galathea',
              taxonRank: 'species',
              taxa: 7854318,
              vernacularName: { nl: 'Dambordje', en: 'Marbled White' }
            },
            {
              scientificName: 'Lasiommata',
              taxonRank: 'genus',
              children: [
                {
                  scientificName: 'Lasiommata maera',
                  taxonRank: 'species',
                  taxa: 4535636,
                  vernacularName: { nl: 'Rotsvlinder', en: 'Large Wall Brown' }
                },
                {
                  scientificName: 'Lasiommata megera',
                  taxonRank: 'species',
                  taxa: 4535632,
                  vernacularName: { nl: 'Argusvlinder', en: 'Wall Butterfly' }
                }
              ]
            },
            {
              scientificName: 'Pararge aegeria',
              taxonRank: 'species',
              taxa: 8049830,
              vernacularName: { nl: 'Bont zandoogje', en: 'Speckled Wood Butterfly' }
            },
            {
              scientificName: 'Pyronia tithonus',
              taxonRank: 'species',
              taxa: 7622059,
              vernacularName: { nl: 'Oranje zandoogje', en: 'Hedge Brown' }
            }
          ]
        }
      ],
      vernacularName: { nl: "Aurelia's", en: 'Nymphalids' }
    },
    {
      scientificName: 'Papilionidae',
      taxonRank: 'family',
      children: [
        {
          scientificName: 'Iphiclides podalirius',
          taxonRank: 'species',
          taxa: 1938214,
          vernacularName: { nl: 'Koningspage', en: 'Scarce Swallowtail' }
        },
        {
          scientificName: 'Papilio machaon',
          taxonRank: 'species',
          taxa: 8225376,
          vernacularName: { nl: 'Koninginnepage', en: 'Swallowtail' }
        },
        {
          scientificName: 'Parnassius apollo',
          taxonRank: 'species',
          taxa: 1938810,
          vernacularName: { nl: 'Apollovlinder', en: 'Apollo' }
        },
        {
          scientificName: 'Zerynthia rumina',
          taxonRank: 'species',
          taxa: 5141297,
          vernacularName: { nl: 'Spaanse pijpbloemvlinder', en: 'Spanish Festoon' }
        }
      ],
      vernacularName: { nl: 'Grote pages', en: 'Swallowtails' }
    },
    {
      scientificName: 'Pieridae',
      taxonRank: 'family',
      children: [
        {
          scientificName: 'Anthocharis cardamines',
          taxonRank: 'species',
          taxa: 1919712,
          vernacularName: { nl: 'Oranjetipje', en: 'Orange-Tip' }
        },
        {
          scientificName: 'Aporia crataegi',
          taxonRank: 'species',
          taxa: 1920218,
          vernacularName: { nl: 'Groot geaderd witje', en: 'Black-Veined White' }
        },
        {
          scientificName: 'Colias',
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Colias alfacariensis',
              taxonRank: 'species',
              taxa: 8203812,
              vernacularName: { nl: 'Zuidelijke luzernevlinder', en: "Berger's Clouded Yellow" }
            },
            {
              scientificName: 'Colias croceus',
              taxonRank: 'species',
              taxa: 5137612,
              vernacularName: { nl: 'Oranje luzernevlinder', en: 'Clouded Yellow Butterfly' }
            },
            {
              scientificName: 'Colias hyale',
              taxonRank: 'species',
              taxa: 5137706,
              vernacularName: { nl: 'Gele luzernevlinder', en: 'Pale Clouded Yellow' }
            },
            {
              scientificName: 'Colias palaeno',
              taxonRank: 'species',
              taxa: 5137582,
              vernacularName: { nl: 'Veenluzernevlinder', en: 'Moorland Clouded Yellow' }
            }
          ],
          vernacularName: { nl: 'Luzernevlinders', en: 'Clouded Yellows' }
        },
        {
          scientificName: 'Gonepteryx rhamni',
          taxonRank: 'species',
          taxa: 1920712,
          vernacularName: { nl: 'Citroenvlinder', en: 'Brimstone' }
        },
        {
          scientificName: 'Leptidea sinapis',
          taxonRank: 'species',
          taxa: 5137903,
          vernacularName: { nl: 'Boswitje', en: 'Wood White' }
        },
        {
          scientificName: 'Pieris',
          taxonRank: 'genus',
          children: [
            {
              scientificName: 'Pieris brassicae',
              taxonRank: 'species',
              taxa: 1920506,
              vernacularName: { nl: 'Groot koolwitje', en: 'Large White' }
            },
            {
              scientificName: 'Pieris mannii',
              taxonRank: 'species',
              taxa: 1920491,
              vernacularName: { nl: 'Scheefbloemwitje', en: 'Southern Small White' }
            },
            {
              scientificName: 'Pieris napi',
              taxonRank: 'species',
              taxa: 1920494,
              vernacularName: { nl: 'Klein geaderd witje', en: 'Green-veined White' }
            },
            {
              scientificName: 'Pieris rapae',
              taxonRank: 'species',
              taxa: 1920496,
              vernacularName: { nl: 'Klein koolwitje', en: 'Small White' }
            }
          ],
          vernacularName: { nl: 'Koolwitjes', en: 'Cabbage Whites' }
        },
        {
          scientificName: 'Pontia daplidice/edusa',
          taxonRank: 'species',
          taxa: [1920258, 1920259],
          vernacularName: { nl: 'Resedawitje/Oostelijk resedawitje', en: 'Bath White/Eastern Bath White' }
        }
      ],
      vernacularName: { nl: 'Witjes', en: 'Whites' }
    }
  ]
})
