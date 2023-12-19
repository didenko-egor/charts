import React, {useState, useCallback} from 'react';

import TransitionsModal from 'components/Modal';
import Charts from 'components/Chart';

import styles from 'styles/App.module.scss'

import { dataChartSet, titlesCard } from 'constants/dataCharts';

const App: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(dataChartSet);
    const [titles, settitlesCard] = useState(titlesCard);
    const [startIndex, setStartIndex] =  useState(0);

    const handelOpen = useCallback(() => {
        setOpen(!open);
    }, [open])


    const setNameChart = useCallback((title) => {
        settitlesCard([...titles, title]);
    }, [])

    const setDataChart = useCallback((chart) => {
        const newCharts = [...data, chart];
        setData(newCharts);
        setStartIndex(newCharts.length - 1 );
        setOpen(false);
    }, [])

  return (
      <div className={styles.app}>
        <TransitionsModal
            isOpen={open}
            setOpen={handelOpen}
            setNameChart={setNameChart}
            setDataChart={setDataChart}
        />
        <Charts
            setOpenModal={handelOpen}
            dataChartSet={data}
            titlesCard={titles}
            startIndex={startIndex}
            setStartIndex={setStartIndex}
        />
      </div>
  );
}

export default App;
