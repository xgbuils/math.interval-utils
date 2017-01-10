const intersection = require('./intersection')
const areEqual = require('./are-equal')
const isEmpty = require('./is-empty')

function contains (a, b) {
    return isEmpty(b) || areEqual(b, intersection(a, b))
}

module.exports = contains
