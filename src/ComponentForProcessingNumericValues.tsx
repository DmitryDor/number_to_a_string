import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import './App.css';
import {
    billionProcessing,
    dozensProcessing,
    hundredsOfbillionsProcessing,
    hundredsOfmillionsProcessing,
    hundredsOfquadrillionProcessing,
    hundredsOfThousandsProcessing,
    hundredsOftrillionsProcessing,
    hundredsProcessing,
    millionsProcessing,
    quadrillionProcessing,
    tensOfbillionProcessing,
    tensOfmillionsProcessing,
    tensOfquadrillionsProcessing,
    tensOfThousandsProcessing,
    tensOftrillionsProcessing,
    thousandsProcessing,
    trillionProcessing,
    unitProcessing
} from "./customValue";

export function ComponentForProcessingNumericValues() {

    let [typeValue, setTypeValue] = useState<string>('')
    let [error, setError] = useState<string | null>(null)
    let [figureInWords, setFigureInWords] = useState<string>('zero')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value
        setTypeValue(newValue)
    }
    const onClickHandler = () => {
        if (typeValue.length === 1) {
            // @ts-ignore
            setFigureInWords(unitProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 2) {
            // @ts-ignore
            setFigureInWords(dozensProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 3) {
            // @ts-ignore
            setFigureInWords(hundredsProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 4) {
            // @ts-ignore
            setFigureInWords(thousandsProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 5) {
            // @ts-ignore
            setFigureInWords(tensOfThousandsProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 6) {
            // @ts-ignore
            setFigureInWords(hundredsOfThousandsProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 7) {
            // @ts-ignore
            setFigureInWords(millionsProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 8) {
            debugger
            // @ts-ignore
            setFigureInWords(tensOfmillionsProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 9) {
            // @ts-ignore
            setFigureInWords(hundredsOfmillionsProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 10) {
            // @ts-ignore
            setFigureInWords(billionProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 11) {
            // @ts-ignore
            setFigureInWords(tensOfbillionProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 12) {
            // @ts-ignore
            setFigureInWords(hundredsOfbillionsProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 13) {
            // @ts-ignore
            setFigureInWords(trillionProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 14) {
            // @ts-ignore
            setFigureInWords(tensOftrillionsProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 15) {
            // @ts-ignore
            setFigureInWords(hundredsOftrillionsProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 16) {
            // @ts-ignore
            setFigureInWords(quadrillionProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 17) {
            // @ts-ignore
            setFigureInWords(tensOfquadrillionsProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 18) {
            // @ts-ignore
            setFigureInWords(hundredsOfquadrillionProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length > 18){
            setError('Please enter a number with a maximum of 18 characters (quadrillion)')
        }

        // setError(null)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onClickHandler()
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                {error && <div>{error}</div>}
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


