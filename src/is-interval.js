const typeVerify = require('type-verify')

function isInterval (e) {
    return typeVerify(e, ['Array']) && e.length === 2 && isLimit(e[0]) && isLimit(e[1])
}

function isLimit (e) {
    return typeVerify(e, ['Object']) && isNumber(e.value) && isNumber(e.limit)
}

function isNumber (e) {
    return typeVerify(e, ['Number'])
}

module.exports = isInterval
