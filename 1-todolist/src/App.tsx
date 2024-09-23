import React, {useState} from 'react';
import './App.css';
import {Button} from "./Btn";

function App() {

    const [counter, setCounter] = useState<number>(0);

    const setLocalStorage = () => {
        localStorage.setItem("counterValue", JSON.stringify(counter))
    }

    const getLocalStorage = () => {
        let valueAsString = localStorage.getItem("counterValue")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCounter(newValue)
        }
    }

    const clearLocalStorage = () => {
        localStorage.clear();
        setCounter(0);
    }

    const removeItemFromLocStorHandler = () => {
        localStorage.removeItem("counterValue + 1")
    }

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
            <div className="btn-local-storage-div">
                <Button
                    name="setLocalStorage"
                    onClick={setLocalStorage}
                    className={"setLocalStorage"}/>
                <Button
                    name="getLocalStorage"
                    onClick={getLocalStorage}
                    className={"getLocalStorage"}/>
                <Button
                    name="clearLocalStorage"
                    onClick={clearLocalStorage}
                    className={"clearLocalStorage"}/>
                <Button
                    name="removeItemFromLocStor"
                    onClick={removeItemFromLocStorHandler}
                    className={"removeItemFromLocStor"}/>
            </div>
        </div>
    );
}
export default App;
