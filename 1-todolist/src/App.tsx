import React, {useState} from 'react';
import './App.css';
import {Button} from "./Btn";

function App() {

    const [counter, setCounter] = useState<number>(0);
    const incrementCounter = () => {
        if (counter < 5) {
            setCounter(counter + 1);
        }
    };
    const resetCounter = () => {
        setCounter(0);
    };

    return (
        <div className="App">
            <div className="display">
                <span style={{ color: counter === 5 ? 'red' : 'black' }}>{counter}</span>
            </div>

            <div className="btn-zone">
                <Button
                    name="incr"
                    className={counter >= 5 ? 'disabled' : ''}
                    onClick={incrementCounter}
                    disabled={counter >= 5}/>
                <Button
                    name="reset"
                    className={counter === 0 ? 'disabled' : ''}
                    onClick={resetCounter}
                    disabled={counter === 0}/>
            </div>
        </div>
    );
}
export default App;
