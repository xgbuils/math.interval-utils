const chai = require('chai')
const expect = chai.expect
const samples = require('./interval-samples')

const areDisjoint = require('../src/are-disjoint')

describe('areDisjoint', function () {
    it('it returns true if the intervals are disjoint', function () {
        const first = samples['[3, 9]']
        const second = samples['[-4, -2]']
        expect(areDisjoint(first, second)).to.be.equal(true)
    })
    it('it returns false if the intervals are not disjoint', function () {
        const first = samples['(2, 5)']
        const second = samples['[3, 9]']
        expect(areDisjoint(first, second)).to.be.equal(false)
    })
})
