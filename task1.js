function sortStr(str) {
    if (!str) return ''
    return str.split(' ').map(getNumFromStr).sort((a,b) => a.num - b.num).map((key) => key.str).join(' ')
}

function getNumFromStr(str) {
    const num = +str.match(/\d/)[0]
    return {str, num}
}