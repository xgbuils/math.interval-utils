var limitComparator = require('./limit-comparator.js')

function intervalComparator (x, y) {
    var startCmp = limitComparator(x[0], y[0])
    return startCmp !== 0 ? startCmp : limitComparator(y[1], x[1])
}

module.exports = intervalComparator
