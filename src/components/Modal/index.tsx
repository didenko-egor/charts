import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import {useState, useCallback, useMemo, useEffect} from "react";

import {dataChartBiznesTemplate} from 'constants/dataCharts'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#e8e8e8',
    border: '1px solid #414141',
    boxShadow: 24,
    p: 4,
};

const charts = JSON.parse(JSON.stringify(dataChartBiznesTemplate));

export default function TransitionsModal({
     isOpen,
     setOpen,
     setNameChart,
     setDataChart
}) {
    const [name, setName] = useState('');
    const [size, setSize] = useState('');
    const [data, setData] = useState(charts);

    useEffect( () => {
        // if(isOpen) {
        //     setName('');
        //     setSize('');
        //     setData([...dataChartBiznesTemplate]);
        // }


       return () => {
           setName('');
           setSize('');
           setData([]);
       }
    }, [] );

    const handelData = useCallback((val, id) => {
        const parts = id.split('-');
        let nemData = [...data];
        let partData = nemData[+parts[1]]

        if(parts[0] === 'percent') {
            // @ts-ignore
            partData[parts[0]] = +val;
            // @ts-ignore
            partData['part'] = ((size * +val) / 100).toFixed(2);
        } else {
            // @ts-ignore
            partData[parts[0]] =  val;
        }

        setData(nemData)
    }, [data, size])

    const handelCreate = useCallback(() => {
        const filterEmpty = data.filter(part => part.name);
        setNameChart(name);
        setDataChart(filterEmpty);

        setName('');
        setSize('');
        setData(dataChartBiznesTemplate);
    }, [data, name]);

    const isDisabledCreateButton = useMemo(() => {
        return (!name || !size ) || (!data[0].name || !data[0].part);
    }, [name, size, data])

    const inputs = useMemo(() => {
        return [0, 1, 2, 3, 4].map((num) => {
            return (
                <Box
                    component="form"
                    sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
                    noValidate
                    autoComplete="off"
                    key={num}
                >
                    <TextField
                        id={`name-${num}`}
                        label='Название раздела'
                        value={data[num].name}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            handelData(event.target.value, event.target.id);
                        }}
                        variant="standard"
                        size="small"
                        disabled={!Boolean(size)}
                    />
                    <TextField
                        id={`percent-${num}`}
                        label='Процент'
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            handelData(event.target.value, event.target.id);
                        }}
                        type="number"
                        variant="standard"
                        size="small"
                        value={data[num].percent === 0 ? '' : data[num].percent}
                        disabled={!Boolean(size) || !Boolean(data[num].name)}
                    />
                </Box>
            )
        })
    },[size, data])

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={isOpen}
            onClose={setOpen}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={isOpen}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                       Создать график
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        Заполните поля
                    </Typography>

                    <Box
                        component="form"
                        sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="mainName"
                            label="Название графика"
                            value={name}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setName(event.target.value);
                            }}
                            variant="standard"
                            size="small"
                            helperText="Не более 120 символов"
                        />
                        <TextField
                            id="size"
                            label="Общее значение"
                            variant="standard"
                            size="small"
                            value={size}
                            type="number"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setSize(event.target.value);
                            }}
                            helperText="Обязательно для заполнения (разблокирут нижние поля)"
                        />
                    </Box>

                    <br/>

                    {inputs}

                    <Box
                        component="form"
                        sx={{'& > :not(style)': { m: 1, width: '25ch', marginTop: 5 },}}
                    >
                        <Button
                            variant="contained"
                            onClick={handelCreate}
                            disabled={isDisabledCreateButton}
                        >
                            Создать график
                        </Button>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}