import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import './App.css';
import {valuesUpTo9, dozens, hundreds, valuesFrom10To19} from "./customValue";

function App() {

    let [typeValue, setTypeValue] = useState<string>('')
    let [erroe, setError] = useState<string | null>(null)
    let [figureInWords, setFigureInWords] = useState('zero')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value
        setTypeValue(newValue)
    }
    const onClickHandler = () => {
        comparisonFunction(typeValue)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onClickHandler()
        }
    }

    const comparisonFunction = (value: string) => {
        if (valuesUpTo9.hasOwnProperty(value)) {
            // @ts-ignore
            let figureInWords = valuesUpTo9[value]
            setFigureInWords(figureInWords)
        }
        if (valuesFrom10To19.hasOwnProperty(value)) {
            // @ts-ignore
            let figureInWords = valuesFrom10To19[value]
            setFigureInWords(figureInWords)
        }
        if (dozens.hasOwnProperty(value)) {
            if (value[1] === '0') {
                // @ts-ignore
                let figureInWords = dozens[value]
                setFigureInWords(figureInWords)
            }
        }
        if (value.length === 2 && !valuesFrom10To19.hasOwnProperty(value) && !dozens.hasOwnProperty(value)) {
            // @ts-ignore
            let newValue = dozens[value[0] + 0] + ' ' + valuesUpTo9[value[1]]
            setFigureInWords(newValue)
        }
        if (hundreds.hasOwnProperty(value)) {
            if (value[1] === '0' && value[1] === '0') {
                // @ts-ignore
                let figureInWords = hundreds[value]
                setFigureInWords(figureInWords)
            }
        }
        if (value.length === 3 && !hundreds.hasOwnProperty(value)) {
            // @ts-ignore
            let newValue1 = hundreds[value[0] + 0 + 0] + ' ' + dozens[value[1] + 0] + ' '
            if (value[2]) {
                debugger
                // @ts-ignore
                let newValue = newValue1 + ' ' + valuesUpTo9[value[2]]
                setFigureInWords(newValue)
            }
            setFigureInWords(newValue1)
        }
    }


    let concat = (value: string) => {
        if (value.length === 2 && !valuesFrom10To19.hasOwnProperty(value) && !dozens.hasOwnProperty(value)) {
            // @ts-ignore
            let newValue = dozens[value[0] + 0] + valuesUpTo9[value[1]]
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
                <span className="resultType">{figureInWords}</span>
            </header>
        </div>
    )
}

export default App;
