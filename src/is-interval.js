const typeVerify = require('type-verify')

function isInterval (e) {
    return Array.isArray(e) && e.length === 2 && e.every(isLimit)
}

function isLimit (e) {
    return typeVerify(e, ['Object'])
        && typeVerify(e.value, ['Number'])
        && [-1, 0, 1].indexOf(e.limit.valueOf()) !== -1
}

module.exports = isInterval
