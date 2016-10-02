var chai = require('chai')
var expect = chai.expect
var isEmpty = require('../src/is-empty')
var samples = require('./interval-samples')

describe('.isEmpty', function () {
    it('returns true if is empty interval', function () {
        var interval = samples['[2, 0)']
        expect(isEmpty(interval)).to.be.equal(true)
    })

    it('returns false if is not empty interval', function () {
        var interval = samples['(2, 7)']
        expect(isEmpty(interval)).to.be.equal(false)
    })
})
