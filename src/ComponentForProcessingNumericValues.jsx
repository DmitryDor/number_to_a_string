import React, {useState} from 'react';
import './ComponentForProcessingNumericValues.css';
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

    let [typeValue, setTypeValue] = useState('')
    let [error, setError] = useState("")
    let [figureInWords, setFigureInWords] = useState("")

    const onChangeHandler = (e) => {
        const newValue = e.currentTarget.value
        setTypeValue(newValue)
    }
    const onClickHandler = () => {
        if (typeValue.length === 1) {
            setFigureInWords(unitProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 2) {
            setFigureInWords(dozensProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 3) {
            setFigureInWords(hundredsProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 4) {
            setFigureInWords(thousandsProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 5) {
            setFigureInWords(tensOfThousandsProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 6) {
            setFigureInWords(hundredsOfThousandsProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 7) {
            setFigureInWords(millionsProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 8) {
            setFigureInWords(tensOfmillionsProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 9) {
            setFigureInWords(hundredsOfmillionsProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 10) {
            setFigureInWords(billionProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 11) {
            setFigureInWords(tensOfbillionProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 12) {
            setFigureInWords(hundredsOfbillionsProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 13) {
            setFigureInWords(trillionProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 14) {
            setFigureInWords(tensOftrillionsProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 15) {
            setFigureInWords(hundredsOftrillionsProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 16) {
            setFigureInWords(quadrillionProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 17) {
            setFigureInWords(tensOfquadrillionsProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length === 18) {
            setFigureInWords(hundredsOfquadrillionProcessing(typeValue))
            setError(null)
        }
        if (typeValue.length > 18) {
            setError('Пожалуйста, введите число, содержащее не более 18 символов (квадриллион).')
        }
        if (typeValue.includes('-')) {
            setError('Пожалуйста, введите целое, натуральное, положительное число.')
        }
        if (typeValue.includes('.')) {
            setError('Пожалуйста, введите целое, натуральное, положительное число.')
        }
        if (typeValue.includes(',')) {
            setError('Пожалуйста, введите целое, натуральное, положительное число.')
        }
        if (!Number(typeValue)) {
            setError('Пожалуйста, введите целое, натуральное, положительное число.')
        }
    }

    const onKeyPressHandler = (e) => {
        if (e.key === "Enter") {
            onClickHandler()
        }
    }

    return (
        <header className="container">
            <div className= 'error'>{error && <div>{error}</div>}</div>
                <input  value={typeValue}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       className="inputType"
                       placeholder= "Ведите цифру"
                />
            <button onClick={onClickHandler} className="buttonType">Результат</button>
            <div>
                {!error && <span className="resultType">Результат: {figureInWords}</span>}
            </div>
        </header>

    )
}


