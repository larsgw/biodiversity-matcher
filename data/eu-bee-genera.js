import { initialize } from '../src/index.js'

initialize({
  metadata: {
    title: { en: 'Bee genera in the EU', nl: 'Bijengeslachten in de EU' },
    description: { en: 'Distinguish the different genera of bees in the EU.', nl: 'Zie de verschillen tussen geslachten van bijen in de EU.' },
    languages: ['en', 'nl']
  },
  provider: {
    type: 'gbif',
    defaultOptions: {
      licenses: ['CC_BY_4_0', 'CC_BY_NC_4_0', 'CC0_1_0'],
      continent: 'EUROPE'
    }
  },
  taxa: [
    {
      scientificName: 'Andrenidae',
      taxonRank: 'family',
      children: [
        {
          scientificName: 'Andrena',
          taxonRank: 'genus',
          taxa: 1345710
        },
        {
          scientificName: 'Camptopoeum',
          taxonRank: 'genus',
          taxa: 1355488
        },
        {
          scientificName: 'Clavipanurgus',
          taxonRank: 'genus',
          taxa: 1355821
        },
        {
          scientificName: 'Cubiandrena',
          taxonRank: 'genus',
          taxa: 4679256
        },
        {
          scientificName: 'Flavipanurgus',
          taxonRank: 'genus',
          taxa: 1355963
        },
        {
          scientificName: 'Halopanurgus',
          taxonRank: 'genus',
          taxa: 12055335
        },
        {
          scientificName: 'Melitturga',
          taxonRank: 'genus',
          taxa: 1358399
        },
        {
          scientificName: 'Panurginus',
          taxonRank: 'genus',
          taxa: 1355846
        },
        {
          scientificName: 'Panurgus',
          taxonRank: 'genus',
          taxa: 1352891
        },
        {
          scientificName: 'Simpanurgus',
          taxonRank: 'genus',
          taxa: 1355797
        }
      ]
    },
    {
      scientificName: 'Apidae',
      taxonRank: 'family',
      children: [
        {
          scientificName: 'Amegilla',
          taxonRank: 'genus',
          taxa: 1339775
        },
        {
          scientificName: 'Ammobates',
          taxonRank: 'genus',
          taxa: 1339382
        },
        {
          scientificName: 'Ammobatoides',
          taxonRank: 'genus',
          taxa: 10980379
        },
        {
          scientificName: 'Ancyla',
          taxonRank: 'genus',
          taxa: 1341586
        },
        {
          scientificName: 'Anthophora',
          taxonRank: 'genus',
          taxa: 1337506
        },
        {
          scientificName: 'Apis',
          taxonRank: 'genus',
          taxa: 12354605
        },
        {
          scientificName: 'Biastes',
          taxonRank: 'genus',
          taxa: 1340138
        },
        {
          scientificName: 'Bombus',
          taxonRank: 'genus',
          taxa: 11239415
        },
        {
          scientificName: 'Ceratina',
          taxonRank: 'genus',
          taxa: 1341198
        },
        {
          scientificName: 'Chiasmognathus',
          taxonRank: 'genus',
          taxa: 1340108
        },
        {
          scientificName: 'Epeoloides',
          taxonRank: 'genus',
          taxa: 1341849
        },
        {
          scientificName: 'Epeolus',
          taxonRank: 'genus',
          taxa: 1341852
        },
        {
          scientificName: 'Eucera',
          taxonRank: 'genus',
          taxa: 1340870
        },
        {
          scientificName: 'Habropoda',
          taxonRank: 'genus',
          taxa: 1345182
        },
        {
          scientificName: 'Melecta',
          taxonRank: 'genus',
          taxa: 1345295
        },
        {
          scientificName: 'Nomada',
          taxonRank: 'genus',
          taxa: 1343230
        },
        {
          scientificName: 'Parammobatodes',
          taxonRank: 'genus',
          taxa: 1339367
        },
        {
          scientificName: 'Pasites',
          taxonRank: 'genus',
          taxa: 5039571
        },
        {
          scientificName: 'Schmiedeknechtia',
          taxonRank: 'genus',
          taxa: 1340230
        },
        {
          scientificName: 'Tarsalia',
          taxonRank: 'genus',
          taxa: 1341183
        },
        {
          scientificName: 'Tetralonia',
          taxonRank: 'genus',
          taxa: 1345141
        },
        {
          scientificName: 'Thyreus',
          taxonRank: 'genus',
          taxa: 11309768
        },
        {
          scientificName: 'Triepeolus',
          taxonRank: 'genus',
          taxa: 1341601
        },
        {
          scientificName: 'Xylocopa',
          taxonRank: 'genus',
          taxa: 1342048
        },
      ]
    },
    {
      scientificName: 'Colletidae',
      taxonRank: 'family',
      children: [
        {
          scientificName: 'Colletes',
          taxonRank: 'genus',
          taxa: 1348504
        },
        {
          scientificName: 'Hylaeus',
          taxonRank: 'genus',
          taxa: 1349360
        }
      ]
    },
    {
      scientificName: 'Halictidae',
      taxonRank: 'family',
      children: [
        // {
        //   scientificName: 'Nomiapis',
        //   taxonRank: 'genus',
        //   taxa:
        // },
        {
          scientificName: 'Ceylalictus',
          taxonRank: 'genus',
          taxa: 1352660
        },
        {
          scientificName: 'Dufourea',
          taxonRank: 'genus',
          taxa: 1351817
        },
        {
          scientificName: 'Halictus',
          taxonRank: 'genus',
          taxa: 1347978
        },
        {
          scientificName: 'Lasioglossum',
          taxonRank: 'genus',
          taxa: 1353501
        },
        {
          scientificName: 'Nomioides',
          taxonRank: 'genus',
          taxa: 1352049
        },
        {
          scientificName: 'Pseudapis',
          taxonRank: 'genus',
          taxa: 1353092
        },
        {
          scientificName: 'Rophites',
          taxonRank: 'genus',
          taxa: 1352005
        },
        // {
        //   scientificName: 'Rophitoides',
        //   taxonRank: 'genus',
        //   taxa:
        // },
        {
          scientificName: 'Seladonia',
          taxonRank: 'genus',
          taxa: 1353491
        },
        {
          scientificName: 'Sphecodes',
          taxonRank: 'genus',
          taxa: 1351262
        },
        {
          scientificName: 'Systropha',
          taxonRank: 'genus',
          taxa: 1351635
        },
        {
          scientificName: 'Thrincohalictus',
          taxonRank: 'genus',
          taxa: 1355410
        },
      ]
    },
    {
      scientificName: 'Megachilidae',
      taxonRank: 'family',
      children: [
        {
          scientificName: 'Afranthidium',
          taxonRank: 'genus',
          taxa: 1338254
        },
        {
          scientificName: 'Aglaoapis',
          taxonRank: 'genus',
          taxa: 1335007
        },
        {
          scientificName: 'Anthidiellum',
          taxonRank: 'genus',
          taxa: 1338847
        },
        {
          scientificName: 'Anthidium',
          taxonRank: 'genus',
          taxa: 1334798
        },
        {
          scientificName: 'Chelostoma',
          taxonRank: 'genus',
          taxa: 12367527
        },
        {
          scientificName: 'Coelioxys',
          taxonRank: 'genus',
          taxa: 1338333
        },
        {
          scientificName: 'Dioxys',
          taxonRank: 'genus',
          taxa: 1334322
        },
        {
          scientificName: 'Ensliniana',
          taxonRank: 'genus',
          taxa: 1338202
        },
        {
          scientificName: 'Eoanthidium',
          taxonRank: 'genus',
          taxa: 1337396
        },
        {
          scientificName: 'Haetosmia',
          taxonRank: 'genus',
          taxa: 1334588
        },
        {
          scientificName: 'Heriades',
          taxonRank: 'genus',
          taxa: 1336750
        },
        {
          scientificName: 'Hofferia',
          taxonRank: 'genus',
          taxa: 1334371
        },
        {
          scientificName: 'Hoplitis',
          taxonRank: 'genus',
          taxa: 1336906
        },
        {
          scientificName: 'Icteranthidium',
          taxonRank: 'genus',
          taxa: 1336626
        },
        {
          scientificName: 'Lithurgus',
          taxonRank: 'genus',
          taxa: 1336587
        },
        {
          scientificName: 'Megachile',
          taxonRank: 'genus',
          taxa: 1335011
        },
        {
          scientificName: 'Metadioxys',
          taxonRank: 'genus',
          taxa: 1334739
        },
        {
          scientificName: 'Osmia',
          taxonRank: 'genus',
          taxa: 1337664
        },
        {
          scientificName: 'Paradioxys',
          taxonRank: 'genus',
          taxa: 1334368
        },
        {
          scientificName: 'Protosmia',
          taxonRank: 'genus',
          taxa: 1334765
        },
        {
          scientificName: 'Pseudoanthidium',
          taxonRank: 'genus',
          taxa: 1334636
        },
        {
          scientificName: 'Rhodanthidium',
          taxonRank: 'genus',
          taxa: 1334618
        },
        {
          scientificName: 'Stelis',
          taxonRank: 'genus',
          taxa: 1334181
        },
        {
          scientificName: 'Stenoheriades',
          taxonRank: 'genus',
          taxa: 1338204
        },
        {
          scientificName: 'Trachusa',
          taxonRank: 'genus',
          taxa: 5038555
        },
      ]
    },
    {
      scientificName: 'Melittidae',
      taxonRank: 'family',
      children: [
        {
          scientificName: 'Dasypoda',
          taxonRank: 'genus',
          taxa: 1345853
        },
        {
          scientificName: 'Macropis',
          taxonRank: 'genus',
          taxa: 1345894
        },
        {
          scientificName: 'Melitta',
          taxonRank: 'genus',
          taxa: 1345736
        }
      ]
    }
  ]
})
