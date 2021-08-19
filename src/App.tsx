import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import './App.css';

function App() {

    let [typeValue, setTypeValue] = useState<string>('')
    let [erroe, setError] = useState<string | null>(null)
    let [result, setResult] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value
        setTypeValue(newValue)
    }
    const onClickHandler = () => {
        setResult(typeValue)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onClickHandler()
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <input type="text" value={typeValue}
                       onChange={onChangeHandler} className="inputType"
                       onKeyPress={onKeyPressHandler}
                />
                <button onClick={onClickHandler} className="buttonType">Enter</button>
                <span className="resultType">{result.length}</span>
            </header>
        </div>
    )
}

export default App;
