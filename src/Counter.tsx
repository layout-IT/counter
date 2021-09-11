import s from './App.module.css'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {maxValueDownAC, maxValueUpAC, setButtonAC, startValueDownAC, startValueUpAC} from "./bll/reduser";
import {appStateType} from "./bll/store";


export type CounterType = {
text: boolean
    state: number
    addNumber: () => void
    reset: (startValue: number) => void
    addStartValueToInc: (startValue: number) => void
    maxValue: number
}

export const Counter = (props: CounterType) => {
    const dispatch = useDispatch()
    const maxValue = props.maxValue
    const startValue = useSelector<appStateType, number>(state => state.counterReduser.startValue)
    const text = props.text

    // let [maxValue, setmaxValue] = useState(0)
    // let [startValue, setstartValue] = useState(0)
    // let [text, setText] = useState(false)

    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('startValue')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setstartValue(newValue)
    //     }
    // }, [])
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('maxValue')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setmaxValue(newValue)
    //     }
    // }, [])
    //
    //
    // const locStorValue = () => {
    //     localStorage.setItem('maxValue', maxValue.toString())
    //     localStorage.setItem('startValue', startValue.toString())
    // }


    const maxValueUp = () => {
        dispatch(maxValueUpAC())
    }
    const maxValueDown = () => {
        dispatch(maxValueDownAC())
        // if (maxValue - 1 > startValue) {
        //     setmaxValue(maxValue - 1)
        //     setText(true)
        // }
    }

    const startValueUp = () => {
        dispatch(startValueUpAC())
        // if (maxValue > (startValue + 1)) {
        //     setstartValue(startValue + 1)
        //     setText(true)
        // }

    }
    const startValueDown = () => {
        dispatch(startValueDownAC())

        // if (maxValue > (startValue - 1)) {
        //     setstartValue(startValue - 1)
        //     setText(true)
        // }
    }


    const setButton = () => {
        if (startValue >=0){
            dispatch(setButtonAC())
        }

         // setText(false)
         // props.addStartValueToInc(startValue)

        // locStorValue()
    }

    return <div className={s.wrapper}>

        <div className={s.left}>
            <div className={s.window}>
                <div className={s.top_string}>
                    <div className={s.max_value}> max value:
                        <div className={maxValue < 0 ? s.arrowRed : s.arrow}>
                            <span className={s.top_arrow} onClick={maxValueUp}></span>
                            <span className={s.bottom_arrow} onClick={maxValueDown}></span>
                            <span className={maxValue < 0 ? s.position_B : s.position_A}>{maxValue}</span>
                        </div>
                    </div>
                </div>
                <div className={s.bottom_string}>
                    <div className={s.max_value}> start value:
                        <div className={startValue < 0 ? s.arrowRed : s.arrow}>
                            <span className={s.top_arrow} onClick={startValueUp}></span>
                            <span className={s.bottom_arrow} onClick={startValueDown}></span>
                            <span className={startValue < 0 ? s.position_B : s.position_A}>{startValue}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.window_button}>
                <button className={startValue < 0 || maxValue < 0 ? s.unSet : s.set} onClick={setButton}>set</button>
            </div>

        </div>
        <div className={s.right}>
            <div

                className={props.state === maxValue && maxValue !== 0 && text ? s.red : s.title}>{!text && startValue < 0 ? 'negative value ' : !text ? "click on the 'set'" : props.state}</div>
            <div className={s.obert}>
                <div className={s.items}>
                    <button className={props.state > -1 && text ? s.inc : s.op} onClick={() => {props.addNumber()
                    }}>inc
                    </button>
                    <button className={props.state !== startValue && startValue > -1 && text ? s.reset : s.opasity}
                            onClick={() => {
                                props.reset(startValue)
                            }}>reset
                    </button>
                </div>
            </div>
        </div>
    </div>
}