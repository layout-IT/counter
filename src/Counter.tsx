import s from './App.module.css'
import {useDispatch} from "react-redux";
import {maxValueDownAC, maxValueUpAC, setButtonAC, startValueDownAC, startValueUpAC} from "./bll/reduser";


export type CounterType = {
text: boolean
    state: number
    addNumber: () => void
    reset: (startValue: number) => void
    locStorValue: () => void
    maxValue: number
    startValue: number
}

export const Counter = (props: CounterType) => {
    const dispatch = useDispatch()

    const maxValue = props.maxValue
    const startValue =  props.startValue

    const text = props.text




    const maxValueUp = () => {
        dispatch(maxValueUpAC())
    }

    const maxValueDown = () => {
        dispatch(maxValueDownAC())
    }

    const startValueUp = () => {
        dispatch(startValueUpAC())
    }

    const startValueDown = () => {
        dispatch(startValueDownAC())
    }

    const setButton = () => {
        props.locStorValue()
        if (props.startValue >=0){
            dispatch(setButtonAC())
        }
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
                        <div className={props.startValue < 0 ? s.arrowRed : s.arrow}>
                            <span className={s.top_arrow} onClick={startValueUp}></span>
                            <span className={s.bottom_arrow} onClick={startValueDown}></span>
                            <span className={props.startValue < 0 ? s.position_B : s.position_A}>{props.startValue}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.window_button}>
                <button className={props.startValue < 0 || maxValue < 0 ? s.unSet : s.set} onClick={setButton}>set</button>
            </div>

        </div>
        <div className={s.right}>
            <div

                className={props.state === maxValue && maxValue !== 0 && text ? s.red : s.title}>{!text && props.startValue < 0 ? 'negative value ' : !text ? "click on the 'set'" : props.state}</div>
            <div className={s.obert}>
                <div className={s.items}>
                    <button className={props.state > -1 && text ? s.inc : s.op} onClick={() => {props.addNumber()
                    }}>inc
                    </button>
                    <button className={props.state !== props.startValue && props.startValue > -1 && text ? s.reset : s.opasity}
                            onClick={() => {
                                props.reset(props.startValue)
                            }}>reset
                    </button>
                </div>
            </div>
        </div>
    </div>
}