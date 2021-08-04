import React, {useState} from 'react';
import './App.module.css';
import {Counter} from "./Counter";

function App() {
    let [state, setState] = useState<number>(0)


    const addNumber = (value: number) => {
        if (state !== value) {
            setState(state + 1)
        }
    }
    const reset = (startValue: number) => {
        if (state > 0) {
            setState(startValue)
        }
    }

    const addStartValueToInc = (startValue: number) => {
        if (startValue >= 0) {
            state = startValue
            setState(state)
        }

    }

    return (
        <div className="App">

            <Counter
                state={state}
                reset={reset}
                title={0}
                addNumber={addNumber}
                addStartValueToInc={addStartValueToInc}

            />
        </div>
    );
}

export default App;
