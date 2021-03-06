import {bigNumbersNames, dozens, hundreds, valuesFrom10To19, valuesUpTo9, valuesUpTo9Options} from "./constants";



// разбиваем число в массив типа [ '11', '212', '555'], чтоб понять какой порядок числа

export const splitArr = (val) => {
    const arrRes = []
    const split = (num) => {
        const arrNum = num.toString().split("")

        if (arrNum.length > 3) {
            const arrStr = arrNum.splice(0 - 3).join("");
            arrRes.push(arrStr)
            split(arrNum.join(""))
        } else {
            if (arrNum.length > 0) arrRes.push(arrNum.join("").toString())
            return
        }
    }
    split(val)
    return arrRes.reverse()
}



//-------------------------------------------------------------------------------------------------------

// определяем склонение тысяч, миллионов и и т.д.

const bigNumbersNamesFormat = (num, i) => {

    const numStr = +num[num.length-1]
    const numStrDozens = +(((num.length>1)?num[num.length-2]:"") + num[num.length-1])

    num = Number(num)
    if (num !== 0) {
        if (numStr === 1 && numStrDozens!==11 && numStrDozens!==12) {
            return bigNumbersNames[i][0]
        }
        if (numStr > 1 && numStr < 5 && numStrDozens!==12 && numStrDozens!==13 && numStrDozens!==14) {debugger
            return bigNumbersNames[i][1]
        }
        return bigNumbersNames[i][2]

    } else {
        return ""
    }
};
//-------------------------------------------------------------------------------------------------------------
//перевод трехзначного числа в строку
export const SimpleValue = (value, i) => {
    if (value.length === 1) {
        value = "00" + value
    }
    if (value.length === 2) {
        value = "0" + value
    }
    const val = hundreds[+value[0]] + " " + (value[1] === "1" ?
        valuesFrom10To19[+(value[1] + value[2])]
        : dozens[+value[1]] + " "
        + ((i === 1 && +value[2] < 3) ? valuesUpTo9Options[+value[2]] : valuesUpTo9[+value[2]])) // проверяем на склонение (один, два)
    return val
}
//---------------------------------------------------------------------------------------------------------------
export const translate = (num) => {
    const split = splitArr(num) /*["11" "111" "222"]*/
    const newArr = split.reverse().map((itemNum, i) => SimpleValue(itemNum, i) + " " + bigNumbersNamesFormat(itemNum, i)).reverse()
    return newArr.join(" ")
}


