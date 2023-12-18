export type TDataChart = {
    name: string;
    color: string;
    percent: number;
    part: number;
}

const dataChartBiznes: TDataChart[] = [
    {
        name: 'Эксплуатация',
        color: '#0e4cd3',
        percent: 2023.3,
        part: 56.9
    },{
        name: 'Создание и развитие',
        color: '#128dff',
        percent: 1490.0,
        part: 41.9
    },{
        name: 'Инфраструктура',
        color: '#ff8708',
        percent: 42.7,
        part: 1.2
    }
];

const dataChartOil: TDataChart[] = [
    {
        name: 'Прочие',
        color: '#7c839a',
        percent: 125.76,
        part: 24.2
    },{
        name: 'ПАО "НК Роснефть"',
        color: '#ff8708',
        percent: 195.22,
        part: 34.8
    },{
        name: 'ПАО "Лукойл"',
        color: '#0f9480',
        percent: 81.9,
        part: 14.6
    },{
        name: 'ПАО "Сургетнефтегаз"',
        color: '#b62020',
        percent: 60.5,
        part: 10.8
    },{
        name: 'ПАО "Газпром нефть"',
        color: '#0f2a94',
        percent: 39.27,
        part: 7
    },{
        name: 'ПАО "Татнефть"',
        color: '#179ec7',
        percent: 29.7,
        part: 5.3
    },{
        name: 'ПАО АНК "Башнефть"',
        color: '#151515',
        percent: 18.5,
        part: 3.3
    }
];


export const dataChartSet = [
    dataChartBiznes,
    dataChartOil
];

export const titlesCard = [
    'Доля расходов по направлениям',
    'Доли Компаний в объеме добычи нефти'
]


