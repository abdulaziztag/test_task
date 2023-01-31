function biggerNumber(num) {
    const largestNum = +num.toString().split('').sort((a, b) => b - a).join('')
    return largestNum === num ? -1 : largestNum
}