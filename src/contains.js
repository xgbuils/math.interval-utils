var limitComparator = require('./limit-comparator')
var isEmpty = require('./is-empty')

function contains (a, b) {
	console.log(a, b)
	console.log('isEmpty', isEmpty(b), isEmpty(a))
    return isEmpty(b) || !isEmpty(a) && limitComparator(b[0], a[0]) >= 0 &&
        limitComparator(b[1], a[1]) <= 0
}

module.exports = contains