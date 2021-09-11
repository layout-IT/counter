import React   from 'react';
import './App.module.css';
import {Counter} from "./Counter";
import {useDispatch, useSelector} from "react-redux";
import {addNumberAc, resetAc,} from "./bll/reduser";
import {appStateType} from "./bll/store";

function App() {

    let value = useSelector<appStateType, number >(state => state.counterReduser.value)
    const text = useSelector<appStateType, boolean>(state => state.counterReduser.text)
    let maxValue = useSelector<appStateType, number >(state => state.counterReduser.maxValue)
    let dispatch = useDispatch()


     const addNumber = () => {
        if (text &&  maxValue >value){
            dispatch(addNumberAc())
        }

    }


    const reset = (startValue: number) => {
        if (text){
            dispatch(resetAc(startValue))
        }

    }

    const addStartValueToInc = (startValue: number) => {
        dispatch(addStartValueToInc(startValue))
        // if (startValue >= 0) {
        //     value = startValue
        //     setState(value)
        // }

}

    return (
        <div className="App">
            <Counter
                state ={value}
                 reset={reset}
                text={text}
                 addNumber={addNumber}
                 addStartValueToInc={addStartValueToInc}
                maxValue={maxValue}


            />
        </div>
    );
}

export default App;
