const chai = require('chai')
const expect = chai.expect
const samples = require('./interval-samples')

const areEqual = require('../src/are-equal')

describe('areEqual', function () {
    it('it returns true if the intervals are equal', function () {
        const first = samples['[3, 9]']
        const second = samples['[3, 9]']
        expect(areEqual(first, second)).to.be.equal(true)
    })
    it('it returns false if the intervals are not equal', function () {
        const first = samples['(2, 5)']
        const second = samples['[3, 9]']
        expect(areEqual(first, second)).to.be.equal(false)
    })
})
