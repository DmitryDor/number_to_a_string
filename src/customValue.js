const valuesUpTo9 = {
    1: "один",
    2: "два",
    3: "три",
    4: "четыре",
    5: "пять",
    6: "шесть",
    7: "семь",
    8: "восемь",
    9: "девять"
}

const valuesFrom10To19 = {
    10: "десять",
    11: "одиннадцать",
    12: "двенадцать",
    13: " тринадцать",
    14: "четырнадцать",
    15: "пятнадцать",
    16: "шестнадцать",
    17: "семнадцать",
    18: "восемнадцать",
    19: "девятнадцать"
}

const dozens = {
    20: "двадцать",
    30: "тридцать",
    40: "сорок",
    50: "пятьдесят",
    60: "шестьдесят",
    70: "семьдесят",
    80: "восемьдесят",
    90: "девяносто"
}

const hundreds = {
    100: "сто",
    200: "двести",
    300: "триста",
    400: "четыреста",
    500: "пятьсот",
    600: "шестьсот",
    700: "семьсот",
    800: "восемьсот",
    900: "девятьсот",
}

const bigNumbersNames = ["тысяча", "миллион", "миллиард", "триллион", "квадриллион"]
const namesOptions = ["одна", "две", "тысячи", "тысяч", "миллиона", "миллионов", "миллиарда", "миллиардов", "триллиона", "триллионов", "квадриллиона", "квадриллионов"]

export const unitProcessing = (value) => {

    if (valuesUpTo9.hasOwnProperty(value)) {
        return valuesUpTo9[value]
    } else {
        return ''
    }
}

export const dozensProcessing = (value) => {

    if (valuesFrom10To19.hasOwnProperty(value)) {
        return valuesFrom10To19[value]
    }

    if (dozens.hasOwnProperty(value)) {
        if (value[1] === '0') {
            return dozens[value]
        }
    }
    if (value.length === 2 && !valuesFrom10To19.hasOwnProperty(value) && !dozens.hasOwnProperty(value)) {
        return dozens[value[0] + 0] + ' ' + valuesUpTo9[value[1]]
    } else {
        return ''
    }
}

export const hundredsProcessing = (value) => {

    if (hundreds.hasOwnProperty(value)) {
        if (value[1] === '0' && value[1] === '0') {
            return hundreds[value]
        }
    }

    if (value.length === 3 && value[1] === '0') {
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesUpTo9[value[2]]
    }

    if (value.length === 3 && valuesFrom10To19.hasOwnProperty(value[1] + value[2])) {
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesFrom10To19[value[1] + value[2]]
    }

    if (value.length === 3 && value[1] !== '0' && value[1] !== '1' && value[2] === '0') {
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0']
    }

    if (value.length === 3 && value[1] !== '0' && value[1] !== '1' && value[2] !== '0') {
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0'] + ' ' + valuesUpTo9[value[2]]
    } else {
        return ''
    }
}

//   --------------------  thousands ----------------------------------------------------------

export const thousandsProcessing = (value) => {
    if (value.length === 4 && value[0] === '1') {
        return namesOptions[0] + ' ' + bigNumbersNames[0] + ' ' + halperFunction(value.split('').slice(1).join(''))
    }
    if (value.length === 4 && value[0] === '2') {
        return namesOptions[1] + ' ' + namesOptions[2] + ' ' + halperFunction(value.split('').slice(1).join(''))
    }
    if (value.length === 4 && (value[0] === '3' || value[0] === '4')) {
        return valuesUpTo9[value[0]] + ' ' + namesOptions[2] + ' ' + halperFunction(value.split('').slice(1).join(''))
    } else {
        return valuesUpTo9[value[0]] + ' ' + namesOptions[3] + ' ' + halperFunction(value.split('').slice(1).join(''))
    }
}

export const tensOfThousandsProcessing = (value) => {
    if (value.length === 5 && value[0] !== '1' && value[1] === '0' && value[2] === '0' && value[4] === '0') {
        return dozens[value[0] + value[1]] + ' ' + namesOptions[3] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 5 && value[0] === '1') {
        return valuesFrom10To19[value[0] + value[1]] + ' ' + namesOptions[3] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 5 && value[0] !== '1' && value[1] === '1') {
        return dozens[value[0] + '0'] + ' ' + namesOptions[0] + ' ' + bigNumbersNames[0] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 5 && value[0] !== '1' && value[1] === '2') {
        return dozens[value[0] + '0'] + ' ' + namesOptions[1] + ' ' + namesOptions[2] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 5 && value[0] !== '1' && (value[1] === '3' || value[1] === '4')) {
        return dozens[value[0] + '0'] + ' ' + unitProcessing(value[1]) + ' ' + namesOptions[2] + ' ' + halperFunction(value.split('').slice(2).join(''))
    } else {
        return dozens[value[0] + '0'] + ' ' + unitProcessing(value[1]) + ' ' + namesOptions[3] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
}

export const hundredsOfThousandsProcessing = (value) => {
    if (value.length === 6 && value[1] === '0' && value[2] === '0') {
        return hundreds[value[0] + '0' + '0'] + ' ' + namesOptions[3] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 6 && valuesFrom10To19.hasOwnProperty(value[1] + value[2])) {
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesFrom10To19[value[1] + value[2]] + ' ' + namesOptions[3] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 6 && dozens.hasOwnProperty(value[1] + value[2]) && value[2] === '0') {
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + value[2]] + ' ' + namesOptions[3] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 6 && value[1] === '0' && value[2] === '1') {
        return hundreds[value[0] + '0' + '0'] + ' ' + namesOptions[0] + ' ' + bigNumbersNames[0] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 6 && value[1] === '0' && value[2] === '2') {
        return hundreds[value[0] + '0' + '0'] + ' ' + namesOptions[1] + ' ' + namesOptions[2] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 6 && value[1] === '0' && (value[2] === '3' || value[2] === '4')) {
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + namesOptions[2] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 6 && value[1] === '0' && (value[2] === '5' || value[2] === '6' || value[2] === '7' || value[2] === '8' || value[2] === '9')) {
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + namesOptions[3] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 6 && value[2] === '1') {
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0'] + ' ' + namesOptions[0] + ' ' + bigNumbersNames[0] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 6 && value[2] === '2') {
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0'] + ' ' + namesOptions[1] + ' ' + namesOptions[2] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 6 && (value[2] === '3' || value[2] === '4')) {
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + namesOptions[2] + ' ' + halperFunction(value.split('').slice(3).join(''))
    } else {
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + namesOptions[3] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
}

//   --------------------  millions ----------------------------------------------------------

export const millionsProcessing = (value) => {
    if (value.length === 7 && value[0] === '1') {
        return valuesUpTo9[value[0]] + ' ' + bigNumbersNames[1] + ' ' + halperFunction(value.split('').slice(1).join(''))
    }
    if (value.length === 7 && (value[0] === '2' || value[0] === '3' || value[0] === '4')) {
        return valuesUpTo9[value[0]] + ' ' + namesOptions[4] + ' ' + halperFunction(value.split('').slice(1).join(''))
    } else {
        return valuesUpTo9[value[0]] + ' ' + namesOptions[5] + ' ' + halperFunction(value.split('').slice(1).join(''))
    }
}

export const tensOfmillionsProcessing = (value) => {
    if (value.length === 8 && valuesFrom10To19.hasOwnProperty(value[0] + value[1])) {
        return valuesFrom10To19[value[0] + value[1]] + ' ' + namesOptions[5] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 8 && value[0] !== '1' && value[1] === '0') {
        return dozens[value[0] + '0'] + ' ' + namesOptions[5] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }

    if (value.length === 8 && value[1] === '1') {
        return dozens[value[0] + '0'] + ' ' + valuesUpTo9[value[1]] + ' ' + bigNumbersNames[1] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 8 && (value[1] === '2' || value[1] === '3' || value[1] === '4')) {
        return dozens[value[0] + '0'] + ' ' + valuesUpTo9[value[1]] + ' ' + namesOptions[4] + ' ' + halperFunction(value.split('').slice(2).join(''))
    } else {
        return dozens[value[0] + '0'] + ' ' + valuesUpTo9[value[1]] + ' ' + namesOptions[5] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
}

export const hundredsOfmillionsProcessing = (value) => {
    if (value.length === 9 && value[1] === '0' && value[2] === '0') {
        return hundreds[value[0] + '0' + '0'] + ' ' + namesOptions[5] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 9 && dozens.hasOwnProperty(value[1] + value[2])) {
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + value[2]] + ' ' + namesOptions[5] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 9 && valuesFrom10To19.hasOwnProperty(value[1] + value[2])) {
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesFrom10To19[value[1] + value[2]] + ' ' + namesOptions[5] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }

    if (value.length === 9 && value[1] === '0' && value[2] === '1') {
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + bigNumbersNames[1] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 9 && value[1] === '0' && (value[2] === '2' || value[2] === '3' || value[2] === '4')) {
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + namesOptions[4] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 9 && value[1] === '0' && (value[2] === '5' || value[2] === '6' || value[2] === '7' || value[2] === '8' || value[2] === '9')) {
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + namesOptions[5] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 9 && value[2] === '1') {
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + bigNumbersNames[1] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 9 && (value[2] === '2' || value[2] === '3' || value[2] === '4')) {
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + namesOptions[4] + ' ' + halperFunction(value.split('').slice(3).join(''))
    } else {
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + namesOptions[5] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
}

//     ------------------  billions  ----------------------------------------------------------

export const billionProcessing = (value) => {
    if (value.length === 10 && value[0] === '1') {
        return valuesUpTo9[value[0]] + ' ' + bigNumbersNames[2] + ' ' + halperFunction(value.split('').slice(1).join(''))
    }
    if (value.length === 10 && (value[0] === '2' || value[0] === '3' || value[0] === '4')) {
        return valuesUpTo9[value[0]] + ' ' + namesOptions[6] + ' ' + halperFunction(value.split('').slice(1).join(''))
    } else {
        return valuesUpTo9[value[0]] + ' ' + namesOptions[7] + ' ' + halperFunction(value.split('').slice(1).join(''))
    }
}

export const tensOfbillionProcessing = (value) => {
    if (value.length === 11 && valuesFrom10To19.hasOwnProperty(value[0] + value[1])) {
        return valuesFrom10To19[value[0] + value[1]] + ' ' + namesOptions[7] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 11 && value[0] !== '1' && value[1] === '0') {
        return dozens[value[0] + '0'] + ' ' + namesOptions[7] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }

    if (value.length === 11 && value[0] !== '1' && value[1] === '1') {
        return dozens[value[0] + '0'] + ' ' + valuesUpTo9[value[1]] + ' ' + bigNumbersNames[2] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 11 && value[0] !== '1' && (value[1] === '2' || value[1] === '3' || value[1] === '4')) {
        return dozens[value[0] + '0'] + ' ' + valuesUpTo9[value[1]] + ' ' + namesOptions[6] + ' ' + halperFunction(value.split('').slice(2).join(''))
    } else {
        return dozens[value[0] + '0'] + ' ' + valuesUpTo9[value[1]] + ' ' + namesOptions[7] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
}

export const hundredsOfbillionsProcessing = (value) => {
    if (value.length === 12 && value[1] === '0' && value[2] === '0') {
        return hundreds[value[0] + '0' + '0'] + ' ' + namesOptions[7] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 12 && dozens.hasOwnProperty(value[1] + value[2])) {
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + value[2]] + ' ' + namesOptions[7] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 12 && valuesFrom10To19.hasOwnProperty(value[1] + value[2])) {
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesFrom10To19[value[1] + value[2]] + ' ' + namesOptions[7] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 12 && value[1] === '0' && value[2] === '1') {
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + bigNumbersNames[2] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 12 && value[1] === '0' && (value[2] === '2' || value[2] === '3' || value[2] === '4')) {
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + namesOptions[6] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 12 && value[1] === '0' && (value[2] === '5' || value[2] === '6' || value[2] === '7' || value[2] === '8' || value[2] === '9')) {
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + namesOptions[7] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 12 && value[2] === '1') {
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + bigNumbersNames[2] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 12 && (value[2] === '2' || value[2] === '3' || value[2] === '4')) {
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + namesOptions[6] + ' ' + halperFunction(value.split('').slice(3).join(''))
    } else {
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + namesOptions[7] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
}

//     ------------------  trillions  ----------------------------------------------------------

export const trillionProcessing = (value) => {
    if (value.length === 13 && value[0] === '1') {
        return valuesUpTo9[value[0]] + ' ' + bigNumbersNames[3] + ' ' + halperFunction(value.split('').slice(1).join(''))
    }
    if (value.length === 13 && (value[0] === '2' || value[0] === '3' || value[0] === '4')) {
        return valuesUpTo9[value[0]] + ' ' + namesOptions[8] + ' ' + halperFunction(value.split('').slice(1).join(''))
    } else {
        return valuesUpTo9[value[0]] + ' ' + namesOptions[9] + ' ' + halperFunction(value.split('').slice(1).join(''))
    }
}

export const tensOftrillionsProcessing = (value) => {
    if (value.length === 14 && valuesFrom10To19.hasOwnProperty(value[0] + value[1])) {
        return valuesFrom10To19[value[0] + value[1]] + ' ' + namesOptions[9] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 14 && value[0] !== '1' && value[1] === '0') {
        return dozens[value[0] + '0'] + ' ' + namesOptions[9] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 14 && value[0] !== '1' && value[1] === '1') {
        return dozens[value[0] + '0'] + ' ' + valuesUpTo9[value[1]] + ' ' + bigNumbersNames[3] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 14 && value[0] !== '1' && (value[1] === '2' || value[1] === '3' || value[1] === '4')) {
        return dozens[value[0] + '0'] + ' ' + valuesUpTo9[value[1]] + ' ' + namesOptions[8] + ' ' + halperFunction(value.split('').slice(2).join(''))
    } else {
        return dozens[value[0] + '0'] + ' ' + valuesUpTo9[value[1]] + ' ' + namesOptions[9] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
}

export const hundredsOftrillionsProcessing = (value) => {
    if (value.length === 15 && value[1] === '0' && value[2] === '0') {
        return hundreds[value[0] + '0' + '0'] + ' ' + namesOptions[9] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 15 && dozens.hasOwnProperty(value[1] + value[2])) {
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + value[2]] + ' ' + namesOptions[9] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 15 && valuesFrom10To19.hasOwnProperty(value[1] + value[2])) {
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesFrom10To19[value[1] + value[2]] + ' ' + namesOptions[9] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }

    if (value.length === 15 && value[1] === '0' && value[2] === '1') {
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + bigNumbersNames[3] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 15 && value[1] === '0' && (value[2] === '2' || value[2] === '3' || value[2] === '4')) {
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + namesOptions[8] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 15 && value[1] === '0' && (value[2] === '5' || value[2] === '6' || value[2] === '7' || value[2] === '8' || value[2] === '9')) {
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + namesOptions[9] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 15 && value[2] === '1') {
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + bigNumbersNames[3] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 15 && (value[2] === '2' || value[2] === '3' || value[2] === '4')) {
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + namesOptions[8] + ' ' + halperFunction(value.split('').slice(3).join(''))
    } else {
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + namesOptions[9] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
}

//     ------------------  quadrillions  ----------------------------------------------------------

export const quadrillionProcessing = (value) => {
    if (value.length === 16 && value[0] === '1') {
        return valuesUpTo9[value[0]] + ' ' + bigNumbersNames[4] + ' ' + halperFunction(value.split('').slice(1).join(''))
    }
    if (value.length === 16 && (value[0] === '2' || value[0] === '3' || value[0] === '4')) {
        return valuesUpTo9[value[0]] + ' ' + namesOptions[10] + ' ' + halperFunction(value.split('').slice(1).join(''))
    } else {
        return valuesUpTo9[value[0]] + ' ' + namesOptions[11] + ' ' + halperFunction(value.split('').slice(1).join(''))
    }
}

export const tensOfquadrillionsProcessing = (value) => {
    if (value.length === 17 && valuesFrom10To19.hasOwnProperty(value[0] + value[1])) {
        return valuesFrom10To19[value[0] + value[1]] + ' ' + namesOptions[11] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 17 && value[0] !== '1' && value[1] === '0') {
        return dozens[value[0] + '0'] + ' ' + namesOptions[11] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 17 && value[0] !== '1' && value[1] !== '0' && value[1] === '1') {
        return dozens[value[0] + '0'] + ' ' + valuesUpTo9[value[1]] + ' ' + bigNumbersNames[4] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 17 && value[0] !== '1' && value[1] !== '0' && (value[1] === '2' || value[1] === '3' || value[1] === '4')) {
        return dozens[value[0] + '0'] + ' ' + valuesUpTo9[value[1]] + ' ' + namesOptions[10] + ' ' + halperFunction(value.split('').slice(2).join(''))
    } else {
        return dozens[value[0] + '0'] + ' ' + valuesUpTo9[value[1]] + ' ' + namesOptions[11] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
}

export const hundredsOfquadrillionProcessing = (value) => {
    if (value.length === 18 && value[1] === '0' && value[2] === '0') {
        return hundreds[value[0] + '0' + '0'] + ' ' + namesOptions[11] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 18 && dozens.hasOwnProperty(value[1] + value[2])) {
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + value[2]] + ' ' + namesOptions[11] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 18 && valuesFrom10To19.hasOwnProperty(value[1] + value[2])) {
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesFrom10To19[value[1] + value[2]] + ' ' + namesOptions[11]  + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 18 && value[1] === '0' && value[2] === '1') {
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + bigNumbersNames[4] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 18 && value[1] === '0' && (value[2] === '2' || value[2] === '3' || value[2] === '4')) {
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + namesOptions[10] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 18 && value[1] === '0' && (value[2] === '5' || value[2] === '6' || value[2] === '7' || value[2] === '8' || value[2] === '9')) {
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + namesOptions[11] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
   if(value.length === 18 && value[1] !== '0' && value[2] === '1'){
       return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + bigNumbersNames[4] + ' ' + halperFunction(value.split('').slice(3).join(''))
   }
    if (value.length === 18 && value[1] !== '0' && (value[2] === '2' || value[2] === '3' || value[2] === '4')) {
        return hundreds[value[0] + '0' + '0'] + ' ' + namesOptions[10] + ' ' + namesOptions[10] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    else {
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + namesOptions[11] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
}


function halperFunction(value) {
    debugger
    let newValue1 = Number(value)
    let newValue = newValue1.toString()


    if (newValue.length === 17) {
        return tensOfquadrillionsProcessing(newValue)
    }
    if (newValue.length === 16) {
        return quadrillionProcessing(newValue)
    }
    if (newValue.length === 15) {
        return hundredsOftrillionsProcessing(newValue)
    }
    if (newValue.length === 14) {
        return tensOftrillionsProcessing(newValue)
    }
    if (newValue.length === 13) {
        return trillionProcessing(newValue)
    }
    if (newValue.length === 12) {
        return hundredsOfbillionsProcessing(newValue)
    }
    if (newValue.length === 11) {
        return tensOfbillionProcessing(newValue)
    }
    if (newValue.length === 10) {
        return billionProcessing(newValue)
    }
    if (newValue.length === 9) {
        return hundredsOfmillionsProcessing(newValue)
    }
    if (newValue.length === 8) {
        return tensOfmillionsProcessing(newValue)
    }
    if (newValue.length === 7) {
        return millionsProcessing(newValue)
    }
    if (newValue.length === 6) {
        return hundredsOfThousandsProcessing(newValue)
    }
    if (newValue.length === 5) {
        return tensOfThousandsProcessing(newValue)
    }
    if (newValue.length === 4) {
        return thousandsProcessing(newValue)
    }
    if (newValue.length === 3) {
        return hundredsProcessing(newValue)
    }
    if (newValue.length === 2) {
        return dozensProcessing(newValue)
    }
    if (newValue.length === 1) {
        return unitProcessing(newValue)
    } else {
        return ''
    }
}