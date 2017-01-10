const create = require('./utils/create')
const limitComparator = require('./utils/limit-comparator')

function intersection (a, b) {
    if (limitComparator(a[0], b[0]) > 0) {
        [a, b] = [b, a]
    }
    return create(b[0], limitComparator(a[1], b[1]) > 0 ? b[1] : a[1])
}

module.exports = intersection
