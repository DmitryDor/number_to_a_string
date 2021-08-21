import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import './App.css';
import {
    valuesUpTo9,

    hundreds,
    valuesFrom10To19,
    bigNumbersNames1,

    unitProcessing,
    dozensProcessing,
    hundredsProcessing,
    thousandsProcessing,
    tensOfThousandsProcessing,
    hundredsOfThousandsProcessing, millionsProcessing, tensOfmillionsProcessing, hundredsOfmillionsProcessing
} from "./customValue";

export function ComponentForProcessingNumericValues() {

    let [typeValue, setTypeValue] = useState<string>('')
    let [erroe, setError] = useState<string | null>(null)
    let [figureInWords, setFigureInWords] = useState<string>('zero')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value
        setTypeValue(newValue)
    }
    const onClickHandler = () => {
        if (typeValue.length === 1) {
            // @ts-ignore
            setFigureInWords(unitProcessing(typeValue))
        }
        if (typeValue.length === 2) {
            // @ts-ignore
            setFigureInWords(dozensProcessing(typeValue))
        }
        if (typeValue.length === 3) {
            // @ts-ignore
            setFigureInWords(hundredsProcessing(typeValue))
        }
        if (typeValue.length === 4) {
            // @ts-ignore
            setFigureInWords(thousandsProcessing(typeValue))
        }
        if (typeValue.length === 5) {
            // @ts-ignore
            setFigureInWords(tensOfThousandsProcessing(typeValue))
        }
        if (typeValue.length === 6) {
            // @ts-ignore
            setFigureInWords(hundredsOfThousandsProcessing(typeValue))
        }
        if (typeValue.length === 7) {
            // @ts-ignore
            setFigureInWords(millionsProcessing(typeValue))
        }
        if (typeValue.length === 8) {
            debugger
            // @ts-ignore
            setFigureInWords(tensOfmillionsProcessing(typeValue))
        }
        if (typeValue.length === 8) {
            // @ts-ignore
            setFigureInWords(hundredsOfmillionsProcessing(typeValue))
        }
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
                <span className="resultType">{figureInWords}</span>
            </header>
        </div>
    )
}


