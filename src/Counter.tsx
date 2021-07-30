import s from './App.module.css'

export type CounterType = {
    title: number
    addNumber: () => void
    state: number
    reset: () => void
}
export const Counter = (props: CounterType) => {


    return <div className={s.wrapper}>

        <div className={s.left}>
            <div className={s.window}>
                <div className={s.top_string}>
                    <div className={s.max_value}> max value:
                        <div className={s.arrow}>
                            <span className={s.top_arrow}></span>
                            <span className={s.bottom_arrow}></span>
                            <span className={s.position_A}>5</span>
                        </div>
                    </div>
                </div>
                <div className={s.bottom_string}>
                    <div className={s.max_value}> start value:
                        <div className={s.arrow}>
                            <span className={s.top_arrow}></span>
                            <span className={s.bottom_arrow}></span>
                            <span className={s.position_A}>0</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.window_button}>
                <button className={s.set}>set</button>
            </div>

        </div>
        <div className={s.right}>
            <div className={props.state !== 5 ? s.title : s.red}>{props.state}</div>
            <div className={s.obert}>
                <div className={s.items}>
                    <button className={props.state === 5 ? s.op : s.inc} onClick={() => {
                        props.addNumber()
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