const areDisjoint = require('./are-disjoint')
const areEqual = require('./are-equal')
const contains = require('./contains')
const intersection = require('./intersection')
const isEmpty = require('./is-empty')
const isInterval = require('./is-interval')
const multiIntersection = require('./multi-intersection')
const numToInterval = require('./num-to-interval')
const parser = require('./parser')
const relativeComplement = require('./relativeComplement')
const union = require('./union')

module.exports = {
	areDisjoint: areDisjoint,
	areEqual: areEqual,
	contains: contains,
	intersection: intersection,
    isEmpty: isEmpty,
    isInterval: isInterval,
    multiIntersection: multiIntersection
    numToInterval: numToInterval,
    parser: parser,
    relativeComplement: relativeComplement
    union: union
}
