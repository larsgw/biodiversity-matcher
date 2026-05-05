import { initialize } from '../src/index.js'

initialize({
  metadata: {
    title: { en: 'Biodiversity: Flora' },
    description: { en: 'Created by Lars Willighagen.' },
    languages: ['en']
  },
  provider: {
    type: 'gbif',
    defaultOptions: {
      basisOfRecord: 'HUMAN_OBSERVATION',
      licenses: ['CC_BY_4_0', 'CC_BY_NC_4_0', 'CC0_1_0'],
      month: ['4', '5', '6', '7', '8', '9'],
      country: 'NL'
    }
  },
  taxa: [
    {
      vernacularName: { en: 'fern' },
      children: [
        {
          scientificName: 'Dennstaedtiaceae',
          taxonRank: 'family',
          children: [
            {
              scientificName: 'Pteridium aquilinum',
              vernacularName: { en: 'bracken' },
              taxonRank: 'species',
              taxa: 5275012
            }
          ]
        },
        {
          scientificName: 'Dryopteridaceae',
          taxonRank: 'family',
          children: [
            {
              scientificName: 'Dryopteris',
              vernacularName: { en: 'wood ferns' },
              taxonRank: 'genus',
              taxa: 2651126
            }
          ]
        },
        {
          scientificName: 'Equisetaceae',
          vernacularName: { en: 'horsetail family' },
          taxonRank: 'family',
          children: [
            {
              scientificName: 'Equisetum',
              vernacularName: { en: 'horsetail' },
              taxonRank: 'genus',
              taxa: 2687913
            }
          ]
        }
      ]
    },
    {
      vernacularName: { en: 'gymnosperm' },
      children: [
        {
          scientificName: 'Pinaceae',
          vernacularName: { en: 'pine family' },
          taxonRank: 'family',
          children: [
            {
              scientificName: 'Larix',
              vernacularName: { en: 'larch' },
              taxonRank: 'genus',
              taxa: 2686156
            },
            {
              scientificName: 'Picea',
              vernacularName: { en: 'spruce' },
              taxonRank: 'genus',
              taxa: 7606064
            },
            {
              scientificName: 'Pinus',
              vernacularName: { en: 'pine' },
              taxonRank: 'genus',
              taxa: 2684241
            },
            {
              scientificName: 'Pseudotsuga',
              vernacularName: { en: 'Douglas fir' },
              taxonRank: 'genus',
              taxa: 2685775
            }
          ]
        }
      ]
    },
    {
      vernacularName: { en: 'monocot' },
      children: [
        {
          scientificName: 'Asparagaceae',
          vernacularName: { en: 'asparagus family' },
          taxonRank: 'family',
          children: [
            {
              scientificName: 'Polygonatum',
              vernacularName: { en: 'Solomon\'s seal' },
              taxonRank: 'genus',
              taxa: 2769995
            }
          ]
        },
        {
          scientificName: 'Cyperaceae',
          vernacularName: { en: 'sedge family' },
          taxonRank: 'family',
          taxa: 7708,
          children: [
            {
              scientificName: 'Carex',
              vernacularName: { en: 'sedge' },
              taxonRank: 'genus',
              taxa: 2721893
            }
          ]
        },
        {
          scientificName: 'Juncaceae',
          vernacularName: { en: 'rush family' },
          taxonRank: 'family',
          taxa: 5353,
          children: [
            {
              scientificName: 'Juncus',
              vernacularName: { en: 'common rush' },
              taxonRank: 'genus',
              taxa: 2701072
            },
            {
              scientificName: 'Luzula',
              vernacularName: { en: 'wood rush' },
              taxonRank: 'genus',
              taxa: 2700604
            }
          ]
        },
        {
          scientificName: 'Poaceae',
          vernacularName: { en: 'grass family' },
          taxonRank: 'family',
          taxa: 3073
        }
      ]
    },
    {
      vernacularName: { en: 'dicot' },
      children: [
        {
          scientificName: 'Ranunculaceae',
          vernacularName: { en: 'buttercup family' },
          taxonRank: 'family',
          taxa: 2410,
          children: [
            {
              scientificName: 'Ranunculus',
              vernacularName: { en: 'buttercup' },
              taxonRank: 'genus',
              taxa: 3033294
            }
          ]
        },
        {
          scientificName: 'rosid',
          children: [
            {
              scientificName: 'fabid',
              children: [
                {
                  scientificName: 'Celastraceae',
                  vernacularName: { en: 'staff-vine or bittersweet family' },
                  taxonRank: 'family',
                  children: [
                    {
                      scientificName: 'Euonymus',
                      vernacularName: { en: 'spindle' },
                      taxonRank: 'genus',
                      taxa: 3169115
                    }
                  ]
                },
                {
                  scientificName: 'Fabaceae',
                  vernacularName: { en: 'legume family' },
                  taxonRank: 'family',
                  taxa: 5386,
                  children: [
                    {
                      scientificName: 'Medicago',
                      vernacularName: { en: 'medick or burclover' },
                      taxonRank: 'genus',
                      taxa: 2965200
                    },
                    {
                      scientificName: 'Robinia pseudoacacia',
                      vernacularName: { en: 'locust' },
                      taxonRank: 'species',
                      taxa: 5352251
                    },
                    {
                      scientificName: 'Trifolium',
                      vernacularName: { en: 'clover' },
                      taxonRank: 'genus',
                      taxa: 2973363
                    },
                    {
                      scientificName: 'Vicia',
                      vernacularName: { en: 'vetch' },
                      taxonRank: 'genus',
                      taxa: 2974751
                    }
                  ]
                },
                {
                  scientificName: 'Fagales',
                  taxonRank: 'order',
                  children: [
                    {
                      scientificName: 'Betulaceae',
                      vernacularName: { en: 'birch family' },
                      taxonRank: 'family',
                      children: [
                        {
                          scientificName: 'Alnus',
                          vernacularName: { en: 'alder' },
                          taxonRank: 'genus',
                          taxa: 2876099
                        },
                        {
                          scientificName: 'Betula',
                          vernacularName: { en: 'birch' },
                          taxonRank: 'genus',
                          taxa: 2875008
                        },
                        {
                          scientificName: 'Carpinus betulus',
                          vernacularName: { en: 'hornbeam' },
                          taxonRank: 'species',
                          taxa: 2875818
                        },
                        {
                          scientificName: 'Corylus avellana',
                          vernacularName: { en: 'hazel' },
                          taxonRank: 'species',
                          taxa: 2875979
                        }
                      ]
                    },
                    {
                      scientificName: 'Fagaceae',
                      vernacularName: { en: 'beech family' },
                      taxonRank: 'family',
                      children: [
                        {
                          scientificName: 'Castanea sativa',
                          vernacularName: { en: 'chestnut' },
                          taxonRank: 'species',
                          taxa: 5333294
                        },
                        {
                          scientificName: 'Fagus sylvatica',
                          vernacularName: { en: 'beech' },
                          taxonRank: 'species',
                          taxa: 2882316
                        },
                        {
                          scientificName: 'Quercus',
                          vernacularName: { en: 'oak' },
                          taxonRank: 'genus',
                          taxa: 2877951
                        }
                      ]
                    }
                  ]
                },
                {
                  scientificName: 'Rosales',
                  taxonRank: 'order',
                  children: [
                    {
                      scientificName: 'Rhamnaceae',
                      vernacularName: { en: 'buckthorn family' },
                      taxonRank: 'family',
                      children: [
                        {
                          scientificName: 'Rhamnus frangula',
                          vernacularName: { en: 'alder buckthorn' },
                          taxonRank: 'species',
                          taxa: 7273688
                        }
                      ]
                    },
                    {
                      scientificName: 'Rosaceae',
                      vernacularName: { en: 'rose family' },
                      taxonRank: 'family',
                      taxa: 5015,
                      children: [
                        {
                          scientificName: 'Potentilla',
                          vernacularName: { en: 'cinquefoil' },
                          taxonRank: 'genus',
                          taxa: 8079058
                        },
                        {
                          scientificName: 'Prunus',
                          vernacularName: { en: 'almond, cherry, plum' },
                          taxonRank: 'genus',
                          taxa: 3020559
                        },
                        {
                          scientificName: 'Rubus',
                          vernacularName: { en: 'blackberry' },
                          taxonRank: 'genus',
                          taxa: 2988638
                        }
                      ]
                    },
                    {
                      scientificName: 'Ulmaceae',
                      vernacularName: { en: 'elm family' },
                      taxonRank: 'family',
                      children: [
                        {
                          scientificName: 'Ulmus',
                          vernacularName: { en: 'elm' },
                          taxonRank: 'genus',
                          taxa: 2984510
                        }
                      ]
                    },
                    {
                      scientificName: 'Urticaceae',
                      vernacularName: { en: 'nettle family' },
                      taxonRank: 'family',
                      children: [
                        {
                          scientificName: 'Urtica',
                          vernacularName: { en: 'nettle' },
                          taxonRank: 'genus',
                          taxa: 2984391
                        }
                      ]
                    }
                  ]
                },
                {
                  scientificName: 'Salicaceae',
                  vernacularName: { en: 'willow family' },
                  taxonRank: 'family',
                  children: [
                    {
                      scientificName: 'Populus',
                      vernacularName: { en: 'poplar or aspen' },
                      taxonRank: 'genus',
                      taxa: 3040183
                    },
                    {
                      scientificName: 'Salix',
                      vernacularName: { en: 'willow' },
                      taxonRank: 'genus',
                      taxa: 3039576
                    }
                  ]
                }
              ]
            },
            {
              scientificName: 'malvid',
              children: [
                {
                  scientificName: 'Brassicaceae',
                  vernacularName: { en: 'cabbage family' },
                  taxonRank: 'family',
                  taxa: 3112,
                  children: [
                    {
                      scientificName: 'Cardamine',
                      vernacularName: { en: 'bittercresses' },
                      taxonRank: 'genus',
                      taxa: 3045622
                    }
                  ]
                },
                {
                  scientificName: 'Geraniaceae',
                  vernacularName: { en: 'crane\'s-bill or geranium family' },
                  taxonRank: 'family',
                  children: [
                    {
                      scientificName: 'Geranium',
                      vernacularName: { en: 'crane\'s-bill or geranium' },
                      taxonRank: 'genus',
                      taxa: 2889949
                    }
                  ]
                },
                {
                  scientificName: 'Sapindaceae',
                  vernacularName: { en: 'soapberry family' },
                  taxonRank: 'family',
                  children: [
                    {
                      scientificName: 'Acer',
                      vernacularName: { en: 'maple' },
                      taxonRank: 'genus',
                      taxa: 3189834
                    },
                    {
                      scientificName: 'Aesculus hippocastanum',
                      vernacularName: { en: 'horse-chestnut' },
                      taxonRank: 'species',
                      taxa: 3189815
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          scientificName: 'asterid',
          children: [
            {
              scientificName: 'lamid',
              children: [
                {
                  scientificName: 'Boraginaceae',
                  vernacularName: { en: 'borage or forget-me-not family' },
                  taxonRank: 'family',
                  taxa: 2498,
                  children: [
                    {
                      scientificName: 'Myosotis',
                      vernacularName: { en: 'forget-me-not' },
                      taxonRank: 'genus',
                      taxa: 2925668
                    }
                  ]
                },
                {
                  scientificName: 'Lamiaceae',
                  vernacularName: { en: 'mint family' },
                  taxonRank: 'family',
                  taxa: 2497,
                  children: [
                    {
                      scientificName: 'Lamium',
                      vernacularName: { en: 'dead-nettle' },
                      taxonRank: 'genus',
                      taxa: 2926678
                    }
                  ]
                },
                {
                  scientificName: 'Oleaceae',
                  vernacularName: { en: 'olive family' },
                  taxonRank: 'family',
                  children: [
                    {
                      scientificName: 'Fraxinus',
                      vernacularName: { en: 'ash' },
                      taxonRank: 'genus',
                      taxa: 3172323
                    }
                  ]
                },
                {
                  scientificName: 'Orobanchaceae',
                  vernacularName: { en: 'broomrape family' },
                  taxonRank: 'family',
                  children: [
                    {
                      scientificName: 'Rhinanthus',
                      vernacularName: { en: 'rattleweed' },
                      taxonRank: 'genus',
                      taxa: 3172042
                    }
                  ]
                },
                {
                  scientificName: 'Plantaginaceae',
                  vernacularName: { en: 'plantain family' },
                  taxonRank: 'family',
                  children: [
                    {
                      scientificName: 'Plantago',
                      vernacularName: { en: 'plantain' },
                      taxonRank: 'genus',
                      taxa: 3189695
                    },
                    {
                      scientificName: 'Veronica',
                      vernacularName: { en: 'speedwell' },
                      taxonRank: 'genus',
                      taxa: 3172047
                    }
                  ]
                }
              ]
            },
            {
              scientificName: 'campanulid',
              children: [
                {
                  scientificName: 'Apiales',
                  taxonRank: 'order',
                  children: [
                    {
                      scientificName: 'Araliaceae',
                      vernacularName: { en: 'ivy family' },
                      taxonRank: 'family',
                      children: [
                        {
                          scientificName: 'Hedera helix',
                          vernacularName: { en: 'ivy' },
                          taxonRank: 'species',
                          taxa: 8351737
                        }
                      ]
                    },
                    {
                      scientificName: 'Apiaceae',
                      vernacularName: { en: 'carrot family' },
                      taxonRank: 'family',
                      taxa: 6720
                    }
                  ]
                },
                {
                  scientificName: 'Asteraceae',
                  vernacularName: { en: 'composite family' },
                  taxonRank: 'family',
                  taxa: 3065,
                  children: [
                    {
                      scientificName: 'Bellis perennis',
                      vernacularName: { en: 'daisy' },
                      taxonRank: 'species',
                      taxa: 3117424
                    },
                    {
                      scientificName: 'Centaurea',
                      vernacularName: { en: 'centaury' },
                      taxonRank: 'genus',
                      taxa: 3127469
                    },
                    {
                      scientificName: 'Cirsium',
                      vernacularName: { en: 'plume thistles' },
                      taxonRank: 'genus',
                      taxa: 3112554
                    },
                    {
                      scientificName: 'Taraxacum officinale',
                      vernacularName: { en: 'dandelion' },
                      taxonRank: 'species',
                      taxa: 7787708
                    }
                  ]
                },
                {
                  scientificName: 'Dipsacales',
                  taxonRank: 'order',
                  children: [
                    {
                      scientificName: 'Adoxaceae',
                      vernacularName: { en: 'moschatel family' },
                      taxonRank: 'family',
                      children: [
                        {
                          scientificName: 'Sambucus',
                          vernacularName: { en: 'elder' },
                          taxonRank: 'genus',
                          taxa: 2888721
                        }
                      ]
                    },
                    {
                      scientificName: 'Caprifoliaceae',
                      vernacularName: { en: 'honeysuckle family' },
                      taxonRank: 'family',
                      children: [
                        {
                          vernacularName: { en: 'honeysuckle' },
                          scientificName: 'Lonicera',
                          taxonRank: 'genus',
                          taxa: 2888645
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              scientificName: 'Caryophyllales',
              taxonRank: 'order',
              children: [
                {
                  scientificName: 'Caryophyllaceae',
                  vernacularName: { en: 'carnation family' },
                  taxonRank: 'family',
                  taxa: 2518,
                  children: [
                    {
                      scientificName: 'Cerastium',
                      vernacularName: { en: 'mouse-ears' },
                      taxonRank: 'genus',
                      taxa: 2873815
                    },
                    {
                      scientificName: 'Silene',
                      vernacularName: { en: 'campion or catchfly' },
                      taxonRank: 'genus',
                      taxa: 3085897
                    },
                    {
                      scientificName: 'Stellaria',
                      vernacularName: { en: 'starwort' },
                      taxonRank: 'genus',
                      taxa: 3085667
                    }
                  ]
                },
                {
                  scientificName: 'Polygonaceae',
                  vernacularName: { en: 'knotweed family' },
                  taxonRank: 'family',
                  taxa: 2416,
                  children: [
                    {
                      scientificName: 'Rumex',
                      vernacularName: { en: 'dock' },
                      taxonRank: 'genus',
                      taxa: 2888942
                    },
                    {
                      scientificName: 'Persicaria',
                      vernacularName: { en: 'knotweed' },
                      taxonRank: 'genus',
                      taxa: 6390748
                    }
                  ]
                }
              ]
            },
            {
              scientificName: 'Ericaceae',
              vernacularName: { en: 'heather family' },
              taxonRank: 'family',
              children: [
                {
                  scientificName: 'Calluna vulgaris',
                  vernacularName: { en: 'heather (summer or autumn heather)' },
                  taxonRank: 'species',
                  taxa: 2882482
                },
                {
                  scientificName: 'Erica',
                  vernacularName: { en: 'heather (winter or spring heather)' },
                  taxonRank: 'genus',
                  taxa: 2882780
                }
              ]
            },
            {
              scientificName: 'Rubiaceae',
              vernacularName: { en: 'bedstraw family' },
              taxonRank: 'family',
              children: [
                {
                  scientificName: 'Galium',
                  vernacularName: { en: 'bedstraw' },
                  taxonRank: 'genus',
                  taxa: 2913027
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})
