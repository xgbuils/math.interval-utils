const chai = require('chai')
const expect = chai.expect
const isEmpty = require('../src/is-empty')
const samples = require('./interval-samples')

describe('.isEmpty', function () {
    it('returns true if is empty interval', function () {
        const interval = samples['[2, 0)']
        expect(isEmpty(interval)).to.be.equal(true)
    })

    it('returns false if is not empty interval', function () {
        const interval = samples['(2, 7)']
        expect(isEmpty(interval)).to.be.equal(false)
    })
})
