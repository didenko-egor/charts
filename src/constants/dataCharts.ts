export type TDataChart = {
    name: string;
    color: string;
    part: number;
    percent: number;
}

const dataChartBiznes: TDataChart[] = [
    {
        name: 'Эксплуатация',
        color: '#0e4cd3',
        part: 2023.3,
        percent: 56.9
    },{
        name: 'Создание и развитие',
        color: '#128dff',
        part: 1490.0,
        percent: 41.9
    },{
        name: 'Инфраструктура',
        color: '#ff8708',
        part: 42.7,
        percent: 1.2
    }
];

const dataChartOil: TDataChart[] = [
    {
        name: 'Прочие',
        color: '#7c839a',
        part: 125.76,
        percent: 24.2
    },{
        name: 'ПАО "НК Роснефть"',
        color: '#ff8708',
        part: 195.22,
        percent: 34.8
    },{
        name: 'ПАО "Лукойл"',
        color: '#0f9480',
        part: 81.9,
        percent: 14.6
    },{
        name: 'ПАО "Сургетнефтегаз"',
        color: '#b62020',
        part: 60.5,
        percent: 10.8
    },{
        name: 'ПАО "Газпром нефть"',
        color: '#0f2a94',
        part: 39.27,
        percent: 7
    },{
        name: 'ПАО "Татнефть"',
        color: '#179ec7',
        part: 29.7,
        percent: 5.3
    },{
        name: 'ПАО АНК "Башнефть"',
        color: '#151515',
        part: 18.5,
        percent: 3.3
    }
];


export const dataChartSet = [
    dataChartBiznes,
    dataChartOil
];

export const titlesCard = [
    'Доля расходов по направлениям',
    'Доли компаний в объеме добычи нефти'
]




const colors = [
    '#7c839a',
    '#ff8708',
    '#0f9480',
    '#b62020',
    '#0f2a94',
    '#2a49c5',
    '#179ec7',
    '#c76017',
    '#151515',
    '#814d2c',
    '#a3c523',
    '#8a23c5',
    '#c523b8',
    '#23c581',
    ]


export const dataChartBiznesTemplate: TDataChart[] = [
    {
        name: '',
        color: colors[0],
        part: 0,
        percent: 0
    },{
        name: '',
        color: colors[1],
        part: 0,
        percent: 0
    },{
        name: '',
        color: colors[2],
        part: 0,
        percent: 0
    },{
        name: '',
        color: colors[3],
        part: 0,
        percent: 0
    },{
        name: '',
        color: colors[4],
        part: 0,
        percent: 0
    },
];


