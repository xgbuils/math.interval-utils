const limitComparator = require('./utils/limit-comparator.js')

function isEmpty (interval) {
    return limitComparator(interval[0], interval[1]) > 0
}

module.exports = isEmpty
