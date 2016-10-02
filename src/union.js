var isEmpty = require('./is-empty.js')
var intervalComparator = require('./interval-comparator.js')
var limitComparator = require('./limit-comparator.js')

function union (intervals) {
    var arr = intervals.filter(function (interval) {
        return !isEmpty(interval)
    })
    .sort(intervalComparator)

    if (arr.length === 0) {
        return []
    }

    var count = 0
    var current = arr[count]
    var result = [copyInterval(arr[count])]

    for (var i = 1; i < arr.length; ++i) {
        var currentEnd = current[1]
        var item = arr[i]
        var rawItem = item
        var itemStart = rawItem[0]
        var diff = currentEnd.value - itemStart.value
        if (diff < 0 || diff === 0 && currentEnd.limit - itemStart.limit === -2) {
            result.push(copyInterval(item))
            ++count
            current = result[count]
        } else if (limitComparator(currentEnd, rawItem[1]) < 0) {
            result[count][1] = rawItem[1]
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
