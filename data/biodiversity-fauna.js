import { initialize } from '../src/index.js'

initialize({
  metadata: {
    title: { en: 'Biodiversity: Fauna (Arthropods)' },
    description: { en: 'Created by Lars Willighagen.' },
    languages: ['en']
  },
  provider: {
    type: 'gbif',
    defaultOptions: {
      basisOfRecord: 'HUMAN_OBSERVATION',
      licenses: ['CC_BY_4_0', 'CC_BY_NC_4_0', 'CC0_1_0']
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
      taxonRank: 'superclass',
      children: [
        {
          scientificName: 'Pycnogonida',
          vernacularName: { en: 'sea spider' },
          taxonRank: 'class',
          taxa: 354
        },
        {
          scientificName: 'Xiphosura',
          vernacularName: { en: 'horseshoe crab' },
          taxonRank: 'class',
          taxa: 351
        },
        {
          scientificName: 'Arachnida',
          taxonRank: 'class',
          children: [
            {
              scientificName: 'Pseudoscorpionida',
              vernacularName: { en: 'false scorpion' },
              taxonRank: 'order',
              taxa: 1161
            },
            {
              scientificName: 'Scorpionida',
              vernacularName: { en: 'scorpion' },
              taxonRank: 'order',
              taxa: 872
            },
            {
              scientificName: 'Opiliones',
              vernacularName: { en: 'harvestman' },
              taxonRank: 'order',
              taxa: 907
            },
            {
              scientificName: 'Aranea',
              vernacularName: { en: 'spider' },
              taxonRank: 'subclass',
              taxa: 1496
            },
            {
              scientificName: 'Acari',
              taxonRank: 'subclass',
              children: [
                {
                  scientificName: 'Acariformes',
                  vernacularName: { en: 'mite' },
                  taxonRank: 'superorder',
                  taxa: [4653212, 542, 543]
                },
                {
                  scientificName: 'Parasitiformes',
                  taxonRank: 'superorder',
                  children: [
                    {
                      scientificName: 'Mesostigmata',
                      vernacularName: { en: 'parasitic mite' },
                      taxonRank: 'order',
                      taxa: 1109
                    },
                    {
                      scientificName: 'Ixodida',
                      vernacularName: { en: 'tick' },
                      taxonRank: 'order',
                      taxa: 1425
                    }
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
      taxonRank: 'superclass',
      children: [
        {
          scientificName: 'Symphyla',
          vernacularName: { en: 'garden centipede' },
          taxonRank: 'class',
          taxa: 7742773
        },
        {
          scientificName: 'Chilopoda',
          vernacularName: { en: 'centipede' },
          taxonRank: 'class',
          taxa: 360
        },
        {
          scientificName: 'Pauropoda',
           vernacularName: { en: 'pauropod' },
           taxonRank: 'class',
           taxa: 143
        },
        {
          scientificName: 'Diplopoda',
          vernacularName: { en: 'millipede' },
          taxonRank: 'class',
          taxa: 361
        }
      ]
    },
    {
      scientificName: 'Crustacea',
      taxonRank: 'superclass',
      children: [
        {
          scientificName: 'Ostracoda',
          vernacularName: { en: 'seed shrimp' },
          taxonRank: 'class',
          taxa: 353
        },
        {
          scientificName: 'Branchiura',
          vernacularName: { en: 'fish louse' },
          taxonRank: 'class',
          taxa: 659
        },
        {
          scientificName: 'Copepoda',
          vernacularName: { en: 'copepod' },
          taxonRank: 'class',
          taxa: 11545536
        },
        {
          scientificName: 'Theostraca',
          taxonRank: 'class',
          children: [
            {
              scientificName: 'Cirripeda',
              taxonRank: 'subclass',
              children: [
                {
                  scientificName: 'Sessilia',
                  vernacularName: { en: 'barnacle' },
                  taxonRank: 'order',
                  taxa: 1426
                },
                {
                  scientificName: 'Pedunculata',
                  vernacularName: { en: 'goose barnacle' },
                  taxonRank: 'order',
                  taxa: 697
                },
                {
                  scientificName: 'Rhizocephala',
                  vernacularName: { en: 'crab hackerbarnacle' },
                  taxonRank: 'order',
                  taxa: [1388, 692]
                }
              ]
            }
          ]
        },
        {
          scientificName: 'Malacostraca',
          taxonRank: 'class',
          children: [
            {
              scientificName: 'Isopoda',
              vernacularName: { en: 'woodlouse' },
              taxonRank: 'order',
              taxa: 643
            },
            {
              scientificName: 'Amphipoda',
              vernacularName: { en: 'amphipod' },
              taxonRank: 'order',
              taxa: 1231
            },
            {
              scientificName: 'Mysidacea',
              taxonRank: 'order',
              taxa: 841
            },
            {
              scientificName: 'Decapoda',
              taxonRank: 'order',
              children: [
                {
                  scientificName: 'Caridea',
                  vernacularName: { en: 'shrimp' },
                  taxonRank: 'infraorder',
                  taxa: [4472, 3254105, 3869, 4528, 4475, 4304449, 4473, 4476, 3863, 4646483, 8027, 8030, 6191, 8040, 3866, 8649, 4559, 4304465, 4648862, 8653, 4474, 4304453, 3254047, 8041, 3871, 4304452, 8654, 4304450, 10257668, 6007814, 4304460, 8671, 4304439, 2223887, 4556, 8676, 8679]
                },
                {
                  scientificName: 'Astacidea',
                  vernacularName: { en: 'lobster or crayfish' },
                  taxonRank: 'infraorder',
                  taxa: [8022, 4479, 9271464, 3254113, 4647525, 8039, 6997, 4523, 4646093, 4647525, 4647349, 8670]
                },
                {
                  scientificName: 'Anomura',
                  vernacularName: { en: 'hermit crab or porcelain crab' },
                  taxonRank: 'infraorder',
                  taxa: [4304410, 8032, 4646445, 8047, 10008586, 9657, 4648341, 4644257, 8673, 8020, 3254034, 8044, 4649041, 8146, 4304412, 8033, 3862, 8146, 4531, 8660, 8697708, 10960249, 4558, 4311981, 11172909]
                },
                {
                  scientificName: 'Brachyura',
                  vernacularName: { en: 'crab' },
                  taxonRank: 'infraorder',
                  taxa: [8038, 3864, 3870, 6927319, 8677, 8035, 3860, 4304432, 5970260, 8034, 6996, 3867, 8043, 10535522, 5972927, 9008, 9686, 4567, 4648917, 3254326, 3254245, 4647271, 3254038, 3254203, 4527, 8655, 4646359, 4647251, 5970260, 8672, 8019, 2775, 4377415, 8029, 3254292, 8023, 3856, 3857, 8031, 3858, 4646522, 3861, 8037, 3254097, 4646033, 3254155, 3254294, 8148, 3254035, 4304430, 3254308, 4644073, 4644074, 4644485, 3254198, 4646441, 4375325, 8042, 4647278, 3254331, 4644762, 3254019, 5974171, 4646357, 3254092, 4648866, 3928, 3865, 6036, 8046, 3872, 8147, 4529, 3254060, 4647261, 8655, 4550, 3254406, 4552, 5973010, 10793869, 8574541, 3254253, 9658, 12189835, 8611847, 9007, 5968394, 4555, 4562, 4304437, 4304436, 8674, 3254213, 11165581, 3254116, 8605513, 4377565, 4647531, 3254099, 3254049, 3254321, 4645905, 4564, 4858, 5971949, 8535965, 4536, 4557, 4568]
                }
              ]
            }
          ]
        },
        {
          scientificName: 'Branchiopoda',
          taxonRank: 'class',
          children: [
            {
              scientificName: 'Anostraca',
              vernacularName: { en: 'fairy shrimp' },
              taxonRank: 'order',
              taxa: 544
            },
            {
              scientificName: 'Cyclestherida',
              vernacularName: { en: 'clam shrimp' },
              taxonRank: 'order',
              taxa: 7512
            },
            {
              scientificName: 'Notostraca',
              vernacularName: { en: 'tad-pole shrimp' },
              taxonRank: 'order',
              taxa: 1159
            },
            {
              scientificName: 'Cladocera',
              vernacularName: { en: 'water flea' },
              taxonRank: 'order',
              taxa: [3683, 7636, 4667798, 7643, 8103071, 3680, 7511, 7513, 3255586, 4667900, 9242539, 7637, 7641, 9713, 7418266, 2800, 5864486, 7642, 3684]
            }
          ]
        }
      ]
    },
    {
      scientificName: 'Hexapoda',
      taxonRank: 'superclass',
      children: [
        {
          scientificName: 'Entognatha',
          taxonRank: 'class',
          children: [
            {
              scientificName: 'Protura',
              vernacularName: { en: 'conehead' },
              taxonRank: 'subclass',
              taxa: 11377931
            },
            {
              scientificName: 'Collembola',
              vernacularName: { en: 'springtail' },
              taxonRank: 'subclass',
              taxa: 10713444
            },
            {
              scientificName: 'Diplura',
              vernacularName: { en: 'two-pronged bristletail' },
              taxonRank: 'subclass',
              taxa: 11374670
            }
          ]
        },
        {
          scientificName: 'Ectognatha',
          taxonRank: 'class',
          children: [
            {
              scientificName: 'Apterygota',
              taxonRank: 'subclass',
              children: [
                {
                  scientificName: 'Archaeognatha',
                  vernacularName: { en: 'bristletail' },
                  taxonRank: 'order',
                  taxa: 1187
                },
                {
                  scientificName: 'Zygentoma',
                  vernacularName: { en: 'silverfish' },
                  taxonRank: 'order',
                  taxa: 1004
                }
              ]
            },
            {
              scientificName: 'Pterygota',
              taxonRank: 'subclass',
              children: [
                {
                  scientificName: 'Paleoptera',
                  settingsEnabled: { 'lifestage_exopterygota': true },
                  children: [
                    {
                      scientificName: 'Ephemeroptera',
                      vernacularName: { en: 'mayfly' },
                      taxonRank: 'order',
                      taxa: 1225
                    },
                    {
                      scientificName: 'Odonata',
                      taxonRank: 'order',
                      children: [
                        {
                          scientificName: 'Zygoptera',
                          vernacularName: { en: 'damselfly' },
                          taxonRank: 'suborder',
                          taxa: [9319207, 4210, 4211, 4212, 10304360, 4484, 8578, 10607388, 4799084, 5935, 5937, 9863896, 10579794, 9953741, 10117793, 9404, 3308, 10689719, 8583436, 8577, 4488, 10543111, 9405, 3307, 4487, 4489, 9401, 7630, 9403]
                        },
                        {
                          scientificName: 'Anisoptera',
                          vernacularName: { en: 'dragonfly' },
                          taxonRank: 'suborder',
                          taxa: [4209, 8469, 5791989, 4483, 9400, 4486, 7009, 5936, 4513958, 4799285, 5938]
                        }
                      ]
                    }
                  ]
                },
                {
                  scientificName: 'Neoptera',
                  children: [
                    {
                      scientificName: 'Hemimetabola/Exopterygota',
                      settingsEnabled: { 'lifestage_exopterygota': true },
                      children: [
                        {
                          scientificName: 'Plecoptera',
                          vernacularName: { en: 'stonefly' },
                          taxonRank: 'order',
                          taxa: 787
                        },
                        {
                          scientificName: 'Dermaptera',
                          vernacularName: { en: 'earwig' },
                          taxonRank: 'order',
                          taxa: 1224
                        },
                        {
                          scientificName: 'Orthoptera',
                          taxonRank: 'order',
                          children: [
                            {
                              scientificName: 'Ensifera',
                              taxonRank: 'suborder',
                              children: [
                                {
                                  scientificName: 'Tettigoniidae',
                                  vernacularName: { en: 'katydid' },
                                  taxonRank: 'family',
                                  taxa: 3991
                                },
                                {
                                  scientificName: 'Gryllidae',
                                  vernacularName: { en: 'cricket' },
                                  taxonRank: 'family',
                                  taxa: 5925
                                },
                                {
                                  scientificName: 'Gryllotalpidae',
                                  vernacularName: { en: 'mole cricket' },
                                  taxonRank: 'family',
                                  taxa: 8555
                                }
                              ]
                            },
                            {
                              scientificName: 'Caelifera',
                              taxonRank: 'suborder',
                              children: [
                                {
                                  scientificName: 'Acrididae',
                                  vernacularName: { en: 'grasshopper' },
                                  taxonRank: 'family',
                                  taxa: 9394
                                },
                                {
                                  scientificName: 'Tetrigidae',
                                  vernacularName: { en: 'groundhopper' },
                                  taxonRank: 'family',
                                  taxa: 3040
                                }
                              ]
                            }
                          ]
                        },
                        {
                          scientificName: 'Dictyoptera',
                          taxonRank: 'order',
                          children: [
                            {
                              scientificName: 'Blattaria',
                              vernacularName: { en: 'cockroach' },
                              taxonRank: 'suborder',
                              taxa: 800
                            },
                            {
                              scientificName: 'Isoptera',
                              vernacularName: { en: 'termite' },
                              taxonRank: 'suborder',
                              taxa: [8687694, 4802708, 4353, 4802811, 4354, 4802823, 8491757, 8439366, 4355, 7922]
                            },
                            {
                              scientificName: 'Mantodea',
                              vernacularName: { en: 'mantis' },
                              taxonRank: 'suborder',
                              taxa: 788
                            }
                          ]
                        },
                        {
                          scientificName: 'Psocoptera',
                          vernacularName: { en: 'bark louse' },
                          taxonRank: 'order',
                          taxa: 7612838,
                          children: [
                            {
                              scientificName: 'Phthiraptera',
                              vernacularName: { en: 'louse' },
                              taxonRank: 'order',
                              taxa: [2786, 2785, 2784, 2783, 3259853, 3259890, 7926, 7927, 4362, 4363, 7928, 4365, 7929, 4366, 4367, 4368, 7930, 4370, 4369, 4371, 3259886, 2782, 6040, 4361]
                            }
                          ]
                        },
                        {
                          scientificName: 'Thysanoptera',
                          vernacularName: { en: 'thrips' },
                          taxonRank: 'order',
                          taxa: 1228
                        },
                        {
                          scientificName: 'Hemiptera',
                          taxonRank: 'order',
                          children: [
                            {
                              scientificName: 'Heteroptera',
                              vernacularName: { en: 'true bug' },
                              taxonRank: 'suborder',
                              taxa: [4303, 4305, 4306, 4307, 4308, 4309, 4310, 4311, 4312, 4313, 4314, 4315, 4316, 4317, 4318, 4319, 4320, 4321, 4322, 4323, 4324, 4325, 4326, 4327, 4328, 4329, 4330, 4331, 6051, 6988, 6989, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 7885, 7887, 7888, 7890, 7891, 7892, 7893, 7894, 7895, 7896, 7897, 7898, 7899, 7900, 9648, 9649, 9650, 9651, 9653, 9654, 3265575, 3266513, 3266521, 4290007, 4290011, 4485998, 4485999, 4486081, 4771476, 4771750, 4774731, 4774800, 4774943, 4775186, 4775296, 4777847, 4780343, 4781029, 4783084, 4783595, 4783641, 5431354, 6099848, 9196177, 9233888, 9371698]
                            },
                            {
                              scientificName: 'Auchenorrhyncha',
                              vernacularName: { en: 'cicada, leafhopper, treehopper, planthopper, or spittlebug' },
                              taxonRank: 'suborder',
                              taxa: [3764, 3763, 7736, 3314, 5490, 5431385, 4780747, 4778928, 4774566, 4779635, 4781641, 6049, 4780787, 3265635, 9647, 4482801, 7889, 6048, 4781428, 3311, 3312, 3313, 4214, 8470, 8498, 4247, 8499, 8500, 8502, 8585, 4493, 8586, 4494, 8587, 8588, 4495, 2233, 5947, 5946, 2232, 12359309, 2058105, 2051596, 4779950, 2064699, 4779001]
                            },
                            {
                              scientificName: 'Sternorrhyncha',
                              vernacularName: { en: 'aphid, whitefly, or scale insect' },
                              taxonRank: 'suborder',
                              taxa: [4304, 3042, 3572, 8583437, 7388344, 8610017, 10712994, 8651, 4781275, 4781082, 4530, 4532, 4769990, 4771097, 9737640, 8602540, 4682882, 3566, 3265514, 3570, 3573, 6963, 3574, 4520, 4521, 4522, 4524, 8650, 4525, 4526, 8652, 4533, 4534, 8659, 9478, 7256, 3265587, 9468, 3310, 7633, 4772043, 3309, 7632, 7631]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      scientificName: 'Holometabola/Endopterygota',
                      settingsEnabled: { 'lifestage_endopterygota': true },
                      children: [
                        {
                          scientificName: 'Coleoptera',
                          vernacularName: { en: 'beetle' },
                          taxonRank: 'order',
                          taxa: 1470
                        },
                        {
                          scientificName: 'Raphidioptera',
                          vernacularName: { en: 'snakefly' },
                          taxonRank: 'order',
                          taxa: 786
                        },
                        {
                          scientificName: 'Megaloptera',
                          vernacularName: { en: 'alder fly' },
                          taxonRank: 'order',
                          taxa: 1451
                        },
                        {
                          scientificName: 'Planipennia',
                          vernacularName: { en: 'lacewing or ant lion' },
                          taxonRank: 'order',
                          children: [
                            {
                              scientificName: 'Chrysopidae',
                              vernacularName: { en: 'lacewing' },
                              taxonRank: 'family',
                              taxa: 9265
                            },
                            {
                              scientificName: 'Myrmeleontidae',
                              vernacularName: { en: 'ant lion' },
                              taxonRank: 'family',
                              taxa: 5471
                            }
                          ]
                        },
                        {
                          scientificName: 'Hymenoptera',
                          taxonRank: 'order',
                          children: [
                            {
                              scientificName: 'Symphyta',
                              vernacularName: { en: 'saw fly' },
                              taxonRank: 'suborder',
                              taxa: [4346, 6042, 6044, 4669954, 4679718, 4680725, 5430774, 8671795, 9543823, 11188261]
                            },
                            {
                              scientificName: 'Apocrita',
                              taxonRank: 'suborder',
                              children: [
                                {
                                  scientificName: 'Parasitica',
                                  vernacularName: { en: 'parasitic wasp' },
                                  taxonRank: 'infraorder',
                                  taxa: [6910, 3512, 4338, 4344, 12249711, 11378926, 12202291, 4348, 4349, 9560210, 4298516, 4339, 6990, 4343, 3259269, 4298554, 4298551, 7909, 4347, 4298553, 6043, 7920, 4298548, 2790, 9479406, 2788, 4298549, 5511, 9438, 5503, 9413838, 5513, 12264853, 12178026, 4298573, 9439, 11632117, 12366116, 12223602, 9440, 12236539, 9441, 5505, 12226087, 9442, 5507, 4298577, 12261959, 9443, 12187623, 10121806, 9444, 9445, 9446, 12240876, 9447, 5516, 12255288, 12258584, 7712, 3746, 3745, 7711, 4335, 4341, 2789, 3258905, 4298546, 4298547]
                                },
                                {
                                  scientificName: 'Aculeata',
                                  vernacularName: { en: 'stinging wasp' },
                                  taxonRank: 'suborder',
                                  taxa: [4332, 4336, 4340, 4342, 4345, 4350, 4351, 4352, 4490, 6045, 7901, 7903, 7905, 7906, 7908, 7910, 7911, 7912, 7913, 7914, 7919, 3258928, 4298486, 4298487, 4298497, 4298500, 4298501, 4671595, 6128589, 7494119, 9846461, 10111891, 10126467, 10197920, 10501510, 10544522, 10614842]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          scientificName: 'Mecoptera',
                          vernacularName: { en: 'scorpion fly' },
                          taxonRank: 'order',
                          taxa: 1000
                        },
                        {
                          scientificName: 'Siphonaptera',
                          vernacularName: { en: 'flea' },
                          taxonRank: 'order',
                          taxa: 1366
                        },
                        {
                          scientificName: 'Diptera',
                          taxonRank: 'order',
                          children: [
                            {
                              scientificName: 'Nematocera',
                              vernacularName: { en: 'mosquitos' },
                              taxonRank: 'suborder',
                              taxa: [3315, 3333, 3340, 3342, 3343, 3345, 3346, 3347, 3348, 3350, 3518, 3522, 5558, 5574, 5578, 5585, 5586, 6162, 6913, 6914, 6916, 6927, 7271, 7281, 7283, 7284, 7304, 7634, 9164, 9484, 9489, 9494, 10238569, 11153984, 11496569, 11680320, 11943928]
                            },
                            {
                              scientificName: 'Brachycera',
                              vernacularName: { en: 'fly' },
                              taxonRank: 'suborder',
                              taxa: [3328, 3329, 3330, 3331, 3332, 3334, 3335, 3336, 3337, 3339, 3341, 3344, 3349, 3514, 3515, 3516, 3517, 3520, 3521, 3523, 3524, 3526, 5547, 5548, 5549, 5550, 5552, 5553, 5555, 5556, 5559, 5560, 5561, 5562, 5564, 5566, 5567, 5568, 5569, 5570, 5571, 5572, 5575, 5576, 5577, 5579, 5581, 5582, 5583, 5584, 5587, 5589, 6161, 6183, 6912, 6915, 6917, 6918, 6919, 6920, 6921, 6923, 6924, 6926, 7270, 7272, 7273, 7274, 7275, 7276, 7277, 7278, 7279, 7280, 7285, 7286, 7287, 7289, 7290, 7291, 7298, 7299, 7300, 7301, 7302, 7303, 7305, 9483, 9486, 9487, 9488, 9491, 9492, 9493, 9495, 9496, 9497, 9498, 9499, 9500, 9502, 9503, 9504, 9505, 9506, 9507, 9508, 9629, 9630, 9706, 1555553, 3249062, 3264648, 4787734, 5978077, 5979625, 9452179, 9792677, 10419879, 10718235, 11126155]
                            }
                          ]
                        },
                        {
                          scientificName: 'Strepsiptera',
                          taxonRank: 'order',
                          taxa: 1227
                        },
                        {
                          scientificName: 'Trichoptera',
                          vernacularName: { en: 'caddisfly' },
                          taxonRank: 'order',
                          taxa: 1003
                        },
                        {
                          scientificName: 'Lepidoptera',
                          vernacularName: { en: 'butterfly or moth' },
                          taxonRank: 'order',
                          taxa: 797
                        }
                      ]
                    }
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
