import { generateRegionTree } from './generateRegionTree';

test('地域ごとに都道府県をまとめたオブジェクトの配列を生成する', () => {
  expect(generateRegionTree(PrefCheckList)).toStrictEqual(regionTree);
});

const PrefCheckList = [
  {
    id: 1,
    prefCode: '01',
    region: '北海道・東北',
    prefName: '北海道',
    population: 5224614,
    populationDensity: 66.6,
    populationIncrease: -157119,
    populationIncreaseRatio: -2.91949,
    checked: true,
  },
  {
    id: 2,
    prefCode: '02',
    region: '北海道・東北',
    prefName: '青森県',
    population: 1237984,
    populationDensity: 128.3,
    populationIncrease: -70281,
    populationIncreaseRatio: -5.37208,
    checked: true,
  },
  {
    id: 3,
    prefCode: '03',
    region: '北海道・東北',
    prefName: '岩手県',
    population: 1210534,
    populationDensity: 79.2,
    populationIncrease: -69060,
    populationIncreaseRatio: -5.39702,
    checked: true,
  },
  {
    id: 8,
    prefCode: '08',
    region: '関東',
    prefName: '茨城県',
    population: 2867009,
    populationDensity: 470.2,
    populationIncrease: -49967,
    populationIncreaseRatio: -1.71297,
    checked: true,
  },
  {
    id: 9,
    prefCode: '09',
    region: '関東',
    prefName: '栃木県',
    population: 1933146,
    populationDensity: 301.7,
    populationIncrease: -41109,
    populationIncreaseRatio: -2.08225,
    checked: true,
  },
  {
    id: 10,
    prefCode: '10',
    region: '関東',
    prefName: '群馬県',
    population: 1939110,
    populationDensity: 304.8,
    populationIncrease: -34005,
    populationIncreaseRatio: -1.72342,
    checked: true,
  },
  {
    id: 15,
    prefCode: '15',
    region: '中部',
    prefName: '新潟県',
    population: 2201272,
    populationDensity: 174.9,
    populationIncrease: -102992,
    populationIncreaseRatio: -4.46963,
    checked: true,
  },
  {
    id: 16,
    prefCode: '16',
    region: '中部',
    prefName: '富山県',
    population: 1034814,
    populationDensity: 243.6,
    populationIncrease: -31514,
    populationIncreaseRatio: -2.95538,
    checked: true,
  },
  {
    id: 17,
    prefCode: '17',
    region: '中部',
    prefName: '石川県',
    population: 1132526,
    populationDensity: 270.5,
    populationIncrease: -21482,
    populationIncreaseRatio: -1.86151,
    checked: true,
  },
  {
    id: 24,
    prefCode: '24',
    region: '近畿',
    prefName: '三重県',
    population: 1770254,
    populationDensity: 306.6,
    populationIncrease: -45611,
    populationIncreaseRatio: -2.51181,
    checked: true,
  },
  {
    id: 25,
    prefCode: '25',
    region: '近畿',
    prefName: '滋賀県',
    population: 1413610,
    populationDensity: 351.9,
    populationIncrease: 694,
    populationIncreaseRatio: 0.04912,
    checked: true,
  },
  {
    id: 26,
    prefCode: '26',
    region: '近畿',
    prefName: '京都府',
    population: 2578087,
    populationDensity: 559,
    populationIncrease: -32266,
    populationIncreaseRatio: -1.23608,
    checked: true,
  },
  {
    id: 31,
    prefCode: '31',
    region: '中国',
    prefName: '鳥取県',
    population: 553407,
    populationDensity: 157.8,
    populationIncrease: -20034,
    populationIncreaseRatio: -3.49365,
    checked: true,
  },
  {
    id: 32,
    prefCode: '32',
    region: '中国',
    prefName: '島根県',
    population: 671126,
    populationDensity: 100.1,
    populationIncrease: -23226,
    populationIncreaseRatio: -3.34499,
    checked: true,
  },
  {
    id: 33,
    prefCode: '33',
    region: '中国',
    prefName: '岡山県',
    population: 1888432,
    populationDensity: 265.4,
    populationIncrease: -33093,
    populationIncreaseRatio: -1.72223,
    checked: true,
  },
  {
    id: 36,
    prefCode: '36',
    region: '四国',
    prefName: '徳島県',
    population: 719559,
    populationDensity: 173.5,
    populationIncrease: -36174,
    populationIncreaseRatio: -4.78661,
    checked: true,
  },
  {
    id: 37,
    prefCode: '37',
    region: '四国',
    prefName: '香川県',
    population: 950244,
    populationDensity: 506.3,
    populationIncrease: -26019,
    populationIncreaseRatio: -2.66516,
    checked: true,
  },
  {
    id: 38,
    prefCode: '38',
    region: '四国',
    prefName: '愛媛県',
    population: 1334841,
    populationDensity: 235.2,
    populationIncrease: -50421,
    populationIncreaseRatio: -3.63982,
    checked: true,
  },
  {
    id: 40,
    prefCode: '40',
    region: '九州・沖縄',
    prefName: '福岡県',
    population: 5135214,
    populationDensity: 1029.8,
    populationIncrease: 33658,
    populationIncreaseRatio: 0.65976,
    checked: true,
  },
  {
    id: 41,
    prefCode: '41',
    region: '九州・沖縄',
    prefName: '佐賀県',
    population: 811442,
    populationDensity: 332.5,
    populationIncrease: -21390,
    populationIncreaseRatio: -2.56835,
    checked: true,
  },
  {
    id: 42,
    prefCode: '42',
    region: '九州・沖縄',
    prefName: '長崎県',
    population: 1312317,
    populationDensity: 317.7,
    populationIncrease: -64870,
    populationIncreaseRatio: -4.71033,
    checked: true,
  },
];

const regionTree = [
  {
    region: '北海道・東北',
    prefList: [
      {
        id: 1,
        prefCode: '01',
        region: '北海道・東北',
        prefName: '北海道',
        population: 5224614,
        populationDensity: 66.6,
        populationIncrease: -157119,
        populationIncreaseRatio: -2.91949,
        checked: true,
      },
      {
        id: 2,
        prefCode: '02',
        region: '北海道・東北',
        prefName: '青森県',
        population: 1237984,
        populationDensity: 128.3,
        populationIncrease: -70281,
        populationIncreaseRatio: -5.37208,
        checked: true,
      },
      {
        id: 3,
        prefCode: '03',
        region: '北海道・東北',
        prefName: '岩手県',
        population: 1210534,
        populationDensity: 79.2,
        populationIncrease: -69060,
        populationIncreaseRatio: -5.39702,
        checked: true,
      },
    ],
  },
  {
    region: '関東',
    prefList: [
      {
        id: 8,
        prefCode: '08',
        region: '関東',
        prefName: '茨城県',
        population: 2867009,
        populationDensity: 470.2,
        populationIncrease: -49967,
        populationIncreaseRatio: -1.71297,
        checked: true,
      },
      {
        id: 9,
        prefCode: '09',
        region: '関東',
        prefName: '栃木県',
        population: 1933146,
        populationDensity: 301.7,
        populationIncrease: -41109,
        populationIncreaseRatio: -2.08225,
        checked: true,
      },
      {
        id: 10,
        prefCode: '10',
        region: '関東',
        prefName: '群馬県',
        population: 1939110,
        populationDensity: 304.8,
        populationIncrease: -34005,
        populationIncreaseRatio: -1.72342,
        checked: true,
      },
    ],
  },
  {
    region: '中部',
    prefList: [
      {
        id: 15,
        prefCode: '15',
        region: '中部',
        prefName: '新潟県',
        population: 2201272,
        populationDensity: 174.9,
        populationIncrease: -102992,
        populationIncreaseRatio: -4.46963,
        checked: true,
      },
      {
        id: 16,
        prefCode: '16',
        region: '中部',
        prefName: '富山県',
        population: 1034814,
        populationDensity: 243.6,
        populationIncrease: -31514,
        populationIncreaseRatio: -2.95538,
        checked: true,
      },
      {
        id: 17,
        prefCode: '17',
        region: '中部',
        prefName: '石川県',
        population: 1132526,
        populationDensity: 270.5,
        populationIncrease: -21482,
        populationIncreaseRatio: -1.86151,
        checked: true,
      },
    ],
  },
  {
    region: '近畿',
    prefList: [
      {
        id: 24,
        prefCode: '24',
        region: '近畿',
        prefName: '三重県',
        population: 1770254,
        populationDensity: 306.6,
        populationIncrease: -45611,
        populationIncreaseRatio: -2.51181,
        checked: true,
      },
      {
        id: 25,
        prefCode: '25',
        region: '近畿',
        prefName: '滋賀県',
        population: 1413610,
        populationDensity: 351.9,
        populationIncrease: 694,
        populationIncreaseRatio: 0.04912,
        checked: true,
      },
      {
        id: 26,
        prefCode: '26',
        region: '近畿',
        prefName: '京都府',
        population: 2578087,
        populationDensity: 559,
        populationIncrease: -32266,
        populationIncreaseRatio: -1.23608,
        checked: true,
      },
    ],
  },
  {
    region: '中国',
    prefList: [
      {
        id: 31,
        prefCode: '31',
        region: '中国',
        prefName: '鳥取県',
        population: 553407,
        populationDensity: 157.8,
        populationIncrease: -20034,
        populationIncreaseRatio: -3.49365,
        checked: true,
      },
      {
        id: 32,
        prefCode: '32',
        region: '中国',
        prefName: '島根県',
        population: 671126,
        populationDensity: 100.1,
        populationIncrease: -23226,
        populationIncreaseRatio: -3.34499,
        checked: true,
      },
      {
        id: 33,
        prefCode: '33',
        region: '中国',
        prefName: '岡山県',
        population: 1888432,
        populationDensity: 265.4,
        populationIncrease: -33093,
        populationIncreaseRatio: -1.72223,
        checked: true,
      },
    ],
  },
  {
    region: '四国',
    prefList: [
      {
        id: 36,
        prefCode: '36',
        region: '四国',
        prefName: '徳島県',
        population: 719559,
        populationDensity: 173.5,
        populationIncrease: -36174,
        populationIncreaseRatio: -4.78661,
        checked: true,
      },
      {
        id: 37,
        prefCode: '37',
        region: '四国',
        prefName: '香川県',
        population: 950244,
        populationDensity: 506.3,
        populationIncrease: -26019,
        populationIncreaseRatio: -2.66516,
        checked: true,
      },
      {
        id: 38,
        prefCode: '38',
        region: '四国',
        prefName: '愛媛県',
        population: 1334841,
        populationDensity: 235.2,
        populationIncrease: -50421,
        populationIncreaseRatio: -3.63982,
        checked: true,
      },
    ],
  },
  {
    region: '九州・沖縄',
    prefList: [
      {
        id: 40,
        prefCode: '40',
        region: '九州・沖縄',
        prefName: '福岡県',
        population: 5135214,
        populationDensity: 1029.8,
        populationIncrease: 33658,
        populationIncreaseRatio: 0.65976,
        checked: true,
      },
      {
        id: 41,
        prefCode: '41',
        region: '九州・沖縄',
        prefName: '佐賀県',
        population: 811442,
        populationDensity: 332.5,
        populationIncrease: -21390,
        populationIncreaseRatio: -2.56835,
        checked: true,
      },
      {
        id: 42,
        prefCode: '42',
        region: '九州・沖縄',
        prefName: '長崎県',
        population: 1312317,
        populationDensity: 317.7,
        populationIncrease: -64870,
        populationIncreaseRatio: -4.71033,
        checked: true,
      },
    ],
  },
];
