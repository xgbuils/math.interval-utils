const limitComparator = require('./limit-comparator.js')

/**
 * Intersection of a & b lists of disjoint ordered intervals
 *
 * @param {Array<interval>} a - list of intervals
 * @param {Array<interval>} b - list of intervals
 * @returns {Array<interval>} intersection of a and b
 */
function intersection (a, b) {
    if (a.length === 0 || b.length === 0) {
        return []
    }

    let i = 0
    let j = 0
    let aItem = a[i]
    let bItem = b[i]
    let result = []
    if (limitComparator(aItem[0], bItem[0]) > 0) {
        [aItem, bItem] = [bItem, aItem]
    }

    while (i < a.length && j < b.length) {
        const aEnd = aItem[1]
        let bEnd = bItem[1]
        const bStart = bItem[0]
        const diff = aEnd.value - bStart.value
        if (diff > 0 || diff === 0 && aEnd.limit - bStart.limit === 0) {
            if (limitComparator(aEnd, bEnd) < 0) {
                ++i
                bEnd = aEnd
                aItem = copyLimit(bItem)
                bItem = copyLimit(a[i])
            } else {
                ++j
                bItem = b[j]
            }
            result.push([
                copyLimit(bStart),
                copyLimit(bEnd)
            ])
        } else {
            ++i
            aItem = a[i]
            if (aItem && limitComparator(aItem[0], bItem[0]) > 0) {
                [aItem, bItem] = [bItem, aItem]
            }
        }
    }
    return result
}

function copyLimit (limit) {
    return Object.assign({}, limit)
}

module.exports = intersection
