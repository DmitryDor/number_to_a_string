export let valuesUpTo9 = {
    // 0: "ноль",
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

export let valuesFrom10To19 = {
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
export let dozens = {
    20: "двадцать",
    30: "тридцать",
    40: "сорок",
    50: "пятьдесят",
    60: "шестьдесят",
    70: "семьдесят",
    80: "восемьдесят",
    90: "девяносто"
}

export let hundreds = {
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

export const bigNumbersNames1 = ["тысяча", "миллион", "миллиард", "триллион", "квадриллион", "квинтиллион", "секстиллион", ]

// export const bigNumbersNames2 = []

export const unitProcessing = (value: string) => {
    if (valuesUpTo9.hasOwnProperty(value)) {
        // @ts-ignore
        return valuesUpTo9[value]
    } else {
        return ''
    }
}
export const dozensProcessing = (value: string) => {
    if (valuesFrom10To19.hasOwnProperty(value)) {
        // @ts-ignore
        return valuesFrom10To19[value]

    }
    if (dozens.hasOwnProperty(value)) {
        if (value[1] === '0') {
            // @ts-ignore
            return dozens[value]
        }
    }
    if (value.length === 2 && !valuesFrom10To19.hasOwnProperty(value) && !dozens.hasOwnProperty(value)) {
        // @ts-ignore
        return dozens[value[0] + 0] + ' ' + valuesUpTo9[value[1]]
    } else {
        return ''
    }

}
export const hundredsProcessing = (value: string) => {
    if (hundreds.hasOwnProperty(value)) {
        if (value[1] === '0' && value[1] === '0') {
            // @ts-ignore
            return hundreds[value]
        }
    }
    if (value.length === 3 && value[1] === '0') {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesUpTo9[value[2]]

    }
    if (value.length === 3 && valuesFrom10To19.hasOwnProperty(value[1] + value[2])) {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesFrom10To19[value[1] + value[2]]

    }
    if (value.length === 3 && value[1] !== '0' && value[1] !== '1' && value[2] === '0') {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0']

    }
    if (value.length === 3 && value[1] !== '0' && value[1] !== '1' && value[2] !== '0') {

        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0'] + ' ' + valuesUpTo9[value[2]]
    } else {
        return ''
    }
}

//   --------------------  thousands ----------------------------------------------------------

export const thousandsProcessing = (value: string) => {
    if (value.length === 4 && value[1] === '0' && value[2] === '0' && value[3] === '0') {
        // @ts-ignore
        return valuesUpTo9[value[0]] + ' ' + bigNumbersNames1[0]
    }
    if (value[1] !== '0') {
        // @ts-ignore
        debugger
        // @ts-ignore
        return valuesUpTo9[value[0]] + ' ' + bigNumbersNames1[0] + ' ' + hundredsProcessing(value.split('').slice(1).join(''))
    }
    if (value[1] === '0' && value[2] !== '0') {
        debugger
        // @ts-ignore
        return valuesUpTo9[value[0]] + ' ' + bigNumbersNames1[0] + ' ' + dozensProcessing(value[2] + value[3])
    }
    if (value[2] === '0') {
        debugger
        // @ts-ignore
        return valuesUpTo9[value[0]] + ' ' + bigNumbersNames1[0] + ' ' + unitProcessing(value[3])
    }
}
export const tensOfThousandsProcessing = (value: string) => {

    if (value.length === 5 && value[0] !== '1' && value[1] === '0' && value[2] === '0' && value[4] === '0') {
        // @ts-ignore
        return dozens[value[0] + value[1]] + ' ' + bigNumbersNames1[0] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 5 && value[0] === '1') {
        // @ts-ignore
        return valuesFrom10To19[value[0] + value[1]] + ' ' + bigNumbersNames1[0] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 5 && value[0] !== '1') {

        // @ts-ignore
        return dozens[value[0] + '0'] + ' ' + unitProcessing(value[1]) + ' ' + bigNumbersNames1[0] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
}
export const hundredsOfThousandsProcessing = (value: string) => {
    if (value.length === 6 && value[1] === '0' && value[2] === '0') {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + bigNumbersNames1[0] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 6 && valuesFrom10To19.hasOwnProperty(value[1] + value[2])) {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesFrom10To19[value[1] + value[2]] + ' ' + bigNumbersNames1[0] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 6 && dozens.hasOwnProperty(value[1] + value[2]) && value[2] === '0') {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + value[2]] + ' ' + bigNumbersNames1[0] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 6 && value[1] === '0') {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + bigNumbersNames1[0] + ' ' + halperFunction(value.split('').slice(3).join(''))
    } else {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + bigNumbersNames1[0] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }

}

//   --------------------  millions ----------------------------------------------------------

export const millionsProcessing = (value: string) => {
    if (value.length === 7) {
        // @ts-ignore
        return valuesUpTo9[value[0]] + ' ' + bigNumbersNames1[1] + ' ' + halperFunction(value.split('').slice(1).join(''))
    }
}
export const tensOfmillionsProcessing = (value: string) => {
    if (value.length === 8 && valuesFrom10To19.hasOwnProperty(value[0] + value[1])) {
        // @ts-ignore
        return valuesFrom10To19[value[0] + value[1]] + ' ' + bigNumbersNames1[1] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 8 && value[0] !== '1' && value[1] === '0') {
        // @ts-ignore
        return dozens[value[0] + '0'] + ' ' + bigNumbersNames1[1] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 8 && value[0] !== '1' && value[1] !== '0') {
        // @ts-ignore
        return dozens[value[0] + '0'] + ' ' + valuesUpTo9[value[1]] + ' ' + bigNumbersNames1[1] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
}
export const hundredsOfmillionsProcessing = (value: string) => {
    if (value.length === 9 && value[1] === '0' && value[2] === '0') {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + bigNumbersNames1[1] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 9 && dozens.hasOwnProperty(value[1] + value[2])) {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + value[2]] + ' ' + bigNumbersNames1[1] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 9 && valuesFrom10To19.hasOwnProperty(value[1] + value[2])) {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesFrom10To19[value[1] + value[2]] + ' ' + bigNumbersNames1[1] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 9 && value[1] === '0') {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + bigNumbersNames1[1] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    else {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + bigNumbersNames1[1] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
}

//     ------------------  billions  ----------------------------------------------------------

export const billionProcessing = (value: string) => {
    if (value.length === 10) {
        // @ts-ignore
        return valuesUpTo9[value[0]] + ' ' + bigNumbersNames1[2] + ' ' + halperFunction(value.split('').slice(1).join(''))
    }
}

export const tensOfbillionProcessing = (value: string) => {
    if (value.length === 11 && valuesFrom10To19.hasOwnProperty(value[0] + value[1])) {
        // @ts-ignore
        return valuesFrom10To19[value[0] + value[1]] + ' ' + bigNumbersNames1[2] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 11 && value[0] !== '1' && value[1] === '0') {
        // @ts-ignore
        return dozens[value[0] + '0'] + ' ' + bigNumbersNames1[2] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 11 && value[0] !== '1' && value[1] !== '0') {
        // @ts-ignore
        return dozens[value[0] + '0'] + ' ' + valuesUpTo9[value[1]] + ' ' + bigNumbersNames1[2] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
}

export const hundredsOfbillionsProcessing = (value: string) => {
    if (value.length === 12 && value[1] === '0' && value[2] === '0') {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + bigNumbersNames1[2] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 12 && dozens.hasOwnProperty(value[1] + value[2])) {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + value[2]] + ' ' + bigNumbersNames1[2] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 12 && valuesFrom10To19.hasOwnProperty(value[1] + value[2])) {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesFrom10To19[value[1] + value[2]] + ' ' + bigNumbersNames1[2] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 12 && value[1] === '0') {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + bigNumbersNames1[2] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    else {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + bigNumbersNames1[2] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
}

//     ------------------  trillions  ----------------------------------------------------------

export const trillionProcessing = (value: string) => {
    if (value.length === 13) {
        // @ts-ignore
        return valuesUpTo9[value[0]] + ' ' + bigNumbersNames1[3] + ' ' + halperFunction(value.split('').slice(1).join(''))
    }
}

export const tensOftrillionsProcessing = (value: string) => {
    if (value.length === 14 && valuesFrom10To19.hasOwnProperty(value[0] + value[1])) {
        // @ts-ignore
        return valuesFrom10To19[value[0] + value[1]] + ' ' + bigNumbersNames1[3] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 14 && value[0] !== '1' && value[1] === '0') {
        // @ts-ignore
        return dozens[value[0] + '0'] + ' ' + bigNumbersNames1[3] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 14 && value[0] !== '1' && value[1] !== '0') {
        // @ts-ignore
        return dozens[value[0] + '0'] + ' ' + valuesUpTo9[value[1]] + ' ' + bigNumbersNames1[3] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
}

export const hundredsOftrillionsProcessing = (value: string) => {
    if (value.length === 15 && value[1] === '0' && value[2] === '0') {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + bigNumbersNames1[3] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 15 && dozens.hasOwnProperty(value[1] + value[2])) {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + value[2]] + ' ' + bigNumbersNames1[3] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 15 && valuesFrom10To19.hasOwnProperty(value[1] + value[2])) {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesFrom10To19[value[1] + value[2]] + ' ' + bigNumbersNames1[3] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 15 && value[1] === '0') {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + bigNumbersNames1[3] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    else {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + bigNumbersNames1[3] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
}

//     ------------------  quadrillions  ----------------------------------------------------------

export const quadrillionProcessing = (value: string) => {
    if (value.length === 16) {
        // @ts-ignore
        return valuesUpTo9[value[0]] + ' ' + bigNumbersNames1[4] + ' ' + halperFunction(value.split('').slice(1).join(''))
    }
}

export const tensOfquadrillionsProcessing = (value: string) => {
    if (value.length === 17 && valuesFrom10To19.hasOwnProperty(value[0] + value[1])) {
        // @ts-ignore
        return valuesFrom10To19[value[0] + value[1]] + ' ' + bigNumbersNames1[4] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 17 && value[0] !== '1' && value[1] === '0') {
        // @ts-ignore
        return dozens[value[0] + '0'] + ' ' + bigNumbersNames1[4] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 17 && value[0] !== '1' && value[1] !== '0') {
        // @ts-ignore
        return dozens[value[0] + '0'] + ' ' + valuesUpTo9[value[1]] + ' ' + bigNumbersNames1[4] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
}

export const hundredsOfquadrillionProcessing = (value: string) => {
    if (value.length === 18 && value[1] === '0' && value[2] === '0') {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + bigNumbersNames1[4] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 18 && dozens.hasOwnProperty(value[1] + value[2])) {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + value[2]] + ' ' + bigNumbersNames1[4] + ' ' + halperFunction(value.split('').slice(2).join(''))
    }
    if (value.length === 18 && valuesFrom10To19.hasOwnProperty(value[1] + value[2])) {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesFrom10To19[value[1] + value[2]] + ' ' + bigNumbersNames1[4] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    if (value.length === 18 && value[1] === '0') {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + bigNumbersNames1[4] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
    else {
        // @ts-ignore
        return hundreds[value[0] + '0' + '0'] + ' ' + dozens[value[1] + '0'] + ' ' + valuesUpTo9[value[2]] + ' ' + bigNumbersNames1[4] + ' ' + halperFunction(value.split('').slice(3).join(''))
    }
}





function halperFunction(value: string): any {
    debugger
    let newValue1 = Number(value)
    let newValue = newValue1.toString()

    if (newValue.length === 20) {
        // @ts-ignore
        return tensOfquintillionsProcessing(newValue)
    }
    if (newValue.length === 19) {
        // @ts-ignore
        return quintillionProcessing(newValue)
    }
    if (newValue.length === 18) {
        // @ts-ignore
        return hundredsOfquadrillionProcessing(newValue)
    }
    if (newValue.length === 17) {
        // @ts-ignore
        return tensOfquadrillionsProcessing(newValue)
    }
    if (newValue.length === 16) {
        // @ts-ignore
        return quadrillionProcessing(newValue)
    }
    if (newValue.length === 15) {
        // @ts-ignore
        return hundredsOftrillionsProcessing(newValue)
    }
    if (newValue.length === 14) {
        // @ts-ignore
        return tensOftrillionsProcessing(newValue)
    }
    if (newValue.length === 13) {
        // @ts-ignore
        return trillionProcessing(newValue)
    }
    if (newValue.length === 12) {
        // @ts-ignore
        return hundredsOfbillionsProcessing(newValue)
    }
    if (newValue.length === 11) {
        // @ts-ignore
        return tensOfbillionProcessing(newValue)
    }
    if (newValue.length === 10) {
        // @ts-ignore
        return billionProcessing(newValue)
    }
    if (newValue.length === 9) {
        // @ts-ignore
        return hundredsOfmillionsProcessing(newValue)
    }
    if (newValue.length === 8) {
        // @ts-ignore
        return tensOfmillionsProcessing(newValue)
    }
    if (newValue.length === 7) {
        // @ts-ignore
        return millionsProcessing(newValue)
    }
    if (newValue.length === 6) {
        // @ts-ignore
        return hundredsOfThousandsProcessing(newValue)
    }
    if (newValue.length === 5) {
        // @ts-ignore
        return tensOfThousandsProcessing(newValue)
    }
    if (newValue.length === 4) {
        // @ts-ignore
        return thousandsProcessing(newValue)
    }
    if (newValue.length === 3) {
        debugger
        // @ts-ignore
        return hundredsProcessing(newValue)
    }
    if (newValue.length === 2) {
        // @ts-ignore
        return dozensProcessing(newValue)
    }
    if (newValue.length === 1) {
        // @ts-ignore
        return unitProcessing(newValue)
    }
    else {
        return ''
    }
}