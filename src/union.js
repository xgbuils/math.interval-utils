const isEmpty = require('./is-empty.js')
const intervalComparator = require('./interval-comparator.js')
const limitComparator = require('./limit-comparator.js')

function union (intervals) {
    const arr = intervals.filter(function (interval) {
        return !isEmpty(interval)
    })
    .sort(intervalComparator)

    if (arr.length === 0) {
        return []
    }

    let count = 0
    let current = arr[count]
    const result = [copyInterval(arr[count])]

    for (let i = 1; i < arr.length; ++i) {
        const currentEnd = current[1]
        const item = arr[i]
        const itemStart = item[0]
        const diff = currentEnd.value - itemStart.value
        if (diff < 0 || diff === 0 && currentEnd.limit - itemStart.limit === -2) {
            result.push(copyInterval(item))
            ++count
            current = result[count]
        } else if (limitComparator(currentEnd, item[1]) < 0) {
            result[count][1] = item[1]
        }
    }

    return result
}

function copyInterval (interval) {
    return interval.map(function (e) {
        return {
            value: e.value,
            limit: e.limit
        }
    })
}

module.exports = union
