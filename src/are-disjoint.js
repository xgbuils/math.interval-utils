const isEmpty = require('./is-empty')
const intersection = require('./intersection')

function areDisjoint (a, b) {
    return isEmpty(intersection(a, b))
}

module.exports = areDisjoint
