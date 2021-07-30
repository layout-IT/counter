import s from './App.module.css'
import {useState} from "react";

export type CounterType = {
    title: number
    addNumber: (value: number) => void
    state: number
    reset: () => void
}
export const Counter = (props: CounterType) => {
let [maxValue,setmaxValue] = useState (0)
let [startValue,setstartValue] = useState (0)

const maxValueUp = () => {
    setmaxValue(maxValue +1)
}
const maxValueDown= () => {
    setmaxValue(maxValue - 1)
}

const startValueUp= () => {
    if (maxValue > (startValue+1) ){
        setstartValue(startValue + 1)
    }

}
const startValueDown= () => {
    setstartValue(startValue - 1)
}




    return <div className={s.wrapper}>

        <div className={s.left}>
            <div className={s.window}>
                <div className={s.top_string}>
                    <div className={s.max_value}> max value:
                        <div className={s.arrow}>
                            <span className={s.top_arrow} onClick={maxValueUp}  ></span>
                            <span className={s.bottom_arrow} onClick={maxValueDown}></span>
                            <span className={s.position_A} >{maxValue}</span>
                        </div>
                    </div>
                </div>
                <div className={s.bottom_string}>
                    <div className={s.max_value}> start value:
                        <div className={s.arrow}>
                            <span className={s.top_arrow} onClick={startValueUp}></span>
                            <span className={s.bottom_arrow} onClick={startValueDown}></span>
                            <span className={s.position_A}>{startValue}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.window_button}>
                <button className={s.set}>set</button>
            </div>

        </div>
        <div className={s.right}>
            <div className={props.state !== maxValue ? s.title : s.red}>{props.state}</div>
            <div className={s.obert}>
                <div className={s.items}>
                    <button className={props.state === maxValue ? s.op : s.inc} onClick={() => {
                        props.addNumber(maxValue)
                    }}>inc
                    </button>
                    <button className={props.state !== 0 ? s.reset : s.opasity} onClick={() => {
                        props.reset()
                    }}>reset
                    </button>
                </div>
            </div>
        </div>
    </div>
}