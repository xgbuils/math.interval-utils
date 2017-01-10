const create = require('./utils/create')
const isEmpty = require('./is-empty')
const intersection = require('./intersection')
const limitComparator = require('./utils/limit-comparator')
const areEqual = require('./are-equal')

function relativeComplement (a, b) {
    const is = intersection(a, b)
    const result = []
    if (isEmpty(is)) {
        if (!isEmpty(a)) {
            result.push(create(...a))
        }
    } else if (!areEqual(a, is)) {
        if (limitComparator(a[0], b[0]) < 0) {
            result.push(create(a[0], {
                value: b[0].value,
                limit: b[0].limit - 1
            }))
        }
        if (limitComparator(a[1], b[1]) > 0) {
            result.push(create({
                value: b[1].value,
                limit: b[1].limit + 1
            }, a[1]))
        }
    }
    return result
}

module.exports = relativeComplement
