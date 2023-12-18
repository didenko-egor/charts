import React, {useState, useMemo, useCallback} from 'react';
import {Doughnut} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'

import { dataChartSet, titlesCard, TDataChart } from 'constants/dataCharts';

import styles from 'styles/App.module.scss'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const buildDataSet = (key: string, dateSet : TDataChart[]): string[] => {
    // @ts-ignore
    return dateSet.map(data => data[key]);
}

const App: React.FC = () => {
    const [startIndex, setStartIndex] =  useState(0);
    const [dataChars, setDataChars] =  useState(dataChartSet[startIndex]);
    const [cardName, setCardName] =  useState(titlesCard[startIndex]);

    const handelSetCard = useCallback((vector) => {
        if(startIndex === dataChartSet.length - 1) {
            setStartIndex(0);
            return;
        }

        if(vector) {
            setStartIndex(startIndex + 1);
            return;
        }

        setStartIndex(startIndex - 1);

    }, [startIndex])

    const foo =() => {}

    const data =useMemo(() => (
        {
            labels: buildDataSet('name', dataChartSet[startIndex]),
            datasets: [{
                label: ' ',
                data: buildDataSet('part',  dataChartSet[startIndex]),
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
      <div className={styles.app}>
         <div className={styles.card}>
             <div className={styles.header}>
                <div className={styles.cardName}>
                    {cardName}
                </div>
                 <div className={styles.edit}  onClick={foo} >&#9881;</div>
             </div>

             <div className={styles.content}>
                 <div className={styles.doughnut}>
                     <Doughnut data={data} options={options} />
                 </div>

                 <div className={styles.descriptionList}>
                     { dataChartSet[startIndex].map((data) => (
                         <div className={styles.description}>

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
                 <div className={styles.left} onClick={() => handelSetCard(0)} >
                    <span className={styles.icon}> &#60;</span> Предыдущий
                 </div>
                 <div className={styles.right} onClick={() => handelSetCard(1)} >
                     Следующий <span className={styles.icon}>&#62;</span>
                 </div>
             </div>
         </div>
      </div>
  );
}

export default App;
