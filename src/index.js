const isEmpty = require('./is-empty')
const isInterval = require('./is-interval')
const contains = require('./contains')
const numToInterval = require('./num-to-interval')
const parser = require('./parser')
const union = require('./union')

module.exports = {
    isEmpty: isEmpty,
    isInterval: isInterval,
    contains: contains,
    numToInterval: numToInterval,
    parser: parser,
    union: union
}
