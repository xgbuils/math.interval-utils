const create = require('./utils/create')
const intervalComparator = require('./utils/interval-comparator')
const limitComparator = require('./utils/limit-comparator')
const isEmpty = require('./is-empty')

function union (intervals) {
    const arr = intervals
        .filter((interval) => !isEmpty(interval))
        .sort(intervalComparator)

    if (arr.length === 0) {
        return []
    }

    let count = 0
    let current = arr[count]
    const result = [create(...arr[count])]

    for (let i = 1; i < arr.length; ++i) {
        const currentEnd = current[1]
        const item = arr[i]
        const itemStart = item[0]
        const diff = currentEnd.value - itemStart.value
        if (diff < 0 || diff === 0 && currentEnd.limit - itemStart.limit === -2) {
            result.push(create(...item))
            ++count
            current = result[count]
        } else if (limitComparator(currentEnd, item[1]) < 0) {
            result[count][1] = item[1]
        }
    }

    return result
}

module.exports = union
