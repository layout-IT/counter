import React, {useState} from 'react';
import './App.module.css';
import {Counter} from "./Counter";

function App() {
    let [state, setState] = useState(0)


    const addNumber = () => {
        if (state !== 5) {
            state += 1
            setState(state)
        }
    }
const reset = ()=> {
        if (state > 0){
            setState(0)
        }
    }

    return (
        <div className="App">

            <Counter
                state={state}
                reset={reset}
                title={0}
                addNumber={addNumber}

            />
        </div>
    );
}

export default App;
