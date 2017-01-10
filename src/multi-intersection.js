const isEmpty = require('./is-empty')
const limitComparator = require('./utils/limit-comparator')
const intersection = require('./intersection')

/**
 * Intersection of a & b lists of disjoint ordered intervals
 *
 * @param {Array<interval>} first - list of disjoint ordered intervals
 * @param {Array<interval>} second - list of disjoint ordered intervals
 * @returns {Array<interval>} intersection of a and b
 */
function multiIntersection (first, second) {
    if (first.length === 0 || second.length === 0) {
        return []
    }

    const result = []
    let i = 0
    let j = 0
    let a = first[i]
    let b = second[j]

    while (i < first.length && j < second.length) {
        const is = intersection(a, b)
        if (!isEmpty(is)) {
            result.push(is)
        }
        if (limitComparator(a[1], b[1]) <= 0) {
            a = first[++i]
        } else {
            b = second[++j]
        }
    }
    return result
}

module.exports = multiIntersection
