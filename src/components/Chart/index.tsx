import React, {useMemo, useCallback} from 'react';
import {Doughnut} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'

import Settings from '@mui/icons-material/Settings';
import ChevronRight from '@mui/icons-material/ChevronRight';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import Button from '@mui/material/Button';

import { TDataChart } from 'constants/dataCharts';

import styles from './Charts.module.scss'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const buildDataSet = (key: string, dateSet : TDataChart[]): string[] => {
    // @ts-ignore
    return dateSet.map(data => data[key]);
}

const Charts: React.FC = ({
  setOpenModal,
  dataChartSet,
  titlesCard,
  startIndex,
  setStartIndex
}) => {
    const handelSetCard = useCallback((vector) => {
        if(startIndex === dataChartSet.length - 1) {
            setStartIndex(0);
            return;
        }

        if(vector) {
            setStartIndex(startIndex + 1);
            return;
        }

        if(!vector) {
            setStartIndex(dataChartSet.length - 1);
            return;
        }

        setStartIndex(startIndex - 1);
    }, [startIndex, titlesCard])


    const data =useMemo(() => (
        {
            labels: buildDataSet('name', dataChartSet[startIndex]),
            datasets: [{
                label: ' ',
                data: buildDataSet('percent',  dataChartSet[startIndex]),
                borderWidth: 1,
                backgroundColor: buildDataSet('color',  dataChartSet[startIndex]),
                hoverOffset: 5,
                borderRadius: 5,
            }]
        }
    ), [ startIndex, dataChartSet]);

    const options =useMemo( () => (
        {
            plugins: {
                legend: {
                    display: false
                }
            },
            cutout: '60%',
            radius: '90%',
        }
    ), []);

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.cardName}>
                    {titlesCard}
                </div>
                <div className={styles.edit}  onClick={setOpenModal} >
                    <Settings color="primary" sx={{ fontSize: 25 }}/>
                </div>

            </div>

            <div className={styles.content}>
                <div className={styles.doughnut}>
                    <Doughnut data={data} options={options} />
                </div>

                <div className={styles.descriptionList}>
                    { dataChartSet[startIndex].map((data) => (
                        <div className={styles.description}  key={data.name}>
                            <span className={styles.name}>
                              <span className={styles.marker} style={{background: data.color }}/>
                              {data.name}
                            </span>
                            <div className={styles.part}>{`${data.part} (${data.percent}%)`}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.footer}>
                <Button variant="outlined" startIcon={<ChevronLeft />} onClick={() => handelSetCard(0)}>
                    Предыдущий
                </Button>
                <Button variant="outlined" endIcon={<ChevronRight />} onClick={() => handelSetCard(1)}>
                    Следующий
                </Button>
            </div>
        </div>
    );
}

export default Charts;
