const limitComparator = require('./utils/limit-comparator')

function areEqual (a, b) {
    return a.every((lim, i) => limitComparator(lim, b[i]) === 0)
}

module.exports = areEqual
