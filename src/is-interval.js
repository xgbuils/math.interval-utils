const isNumber = (e) => ({}).toString.call(e).slice(8, -1) === 'Number' && !Number.isNaN(e)

function isInterval (e) {
    return Array.isArray(e) && e.length === 2 && e.every(isLimit)
}

function isLimit (e) {
    return e && isNumber(e.value)
        && [-1, 0, 1].indexOf(e.limit.valueOf()) !== -1
}

module.exports = isInterval
