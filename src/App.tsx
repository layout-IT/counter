import React, {useEffect} from 'react';
import './App.module.css';
import {Counter} from "./Counter";
import {useDispatch, useSelector} from "react-redux";
import {addNumberAc, resetAc, setMaxNumberOutOfLocalStorageAC, setMinNumberOutOfLocalStorageAC,} from "./bll/reduser";
import {appStateType} from "./bll/store";

function App() {


    let value = useSelector<appStateType, number>(state => state.counterReduser.value)
    const text = useSelector<appStateType, boolean>(state => state.counterReduser.text)
    let maxValue = useSelector<appStateType, number>(state => state.counterReduser.maxValue)
    const startValue = useSelector<appStateType, number>(state => state.counterReduser.startValue)
    let dispatch = useDispatch()


    const addNumber = () => {
        if (text && maxValue > value) {
            dispatch(addNumberAc())
        }

    }


    const reset = (startValue: number) => {
        if (text) {
            dispatch(resetAc(startValue))
        }

    }

    // const addStartValueToInc = (startValue: number) => {
    //     dispatch(addStartValueToInc(startValue))
    // }
    const locStorValue = () => {
        localStorage.setItem('maxValue', maxValue.toString())
        localStorage.setItem('startValue', startValue.toString())
    }

    useEffect(() => {
        let startValue = localStorage.getItem('startValue')
        if (startValue) {
            let parseMinValue = JSON.parse(startValue)
            dispatch(setMinNumberOutOfLocalStorageAC(parseMinValue))
        }
        let maxValue = localStorage.getItem('maxValue')
        if (maxValue) {
            let parseMaxValue = JSON.parse(maxValue)
            dispatch(setMaxNumberOutOfLocalStorageAC(parseMaxValue))
        }
    }, [])
    return (
        <div className="App">
            <Counter
                state={value}
                reset={reset}
                text={text}
                addNumber={addNumber}
                locStorValue={locStorValue}
                maxValue={maxValue}
                startValue={startValue}
            />
        </div>
    );
}

export default App;
