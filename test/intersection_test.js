const chai = require('chai')
const expect = chai.expect
const samples = require('./interval-samples')
const isEmpty = require('../src/is-empty')

const intersection = require('../src/intersection')

describe('intersection', function () {
    describe('both intervals are empty', function () {
        it('it returns an empty interval', function () {
            const first = samples['[2, 0)']
            const second = samples['[3, 0]']
            const result = intersection(first, second)
            expect(isEmpty(result)).to.be.equal(true)
        })
        it('it returns an empty interval', function () {
            const first = samples['(4, -4)']
            const second = samples['(2, -2)']
            const result = intersection(first, second)
            expect(isEmpty(result)).to.be.equal(true)
        })
    })

    describe('one interval is empty', function () {
        it('it returns an empty interval', function () {
            const firstEmpty = samples['[2, 0)']
            const second = samples['[3, 9]']
            const result = intersection(firstEmpty, second)
            expect(isEmpty(result)).to.be.equal(true)
        })
        it('it returns an empty interval', function () {
            const first = samples['(3, 11]']
            const secondEmpty = samples['(2, -2)']
            const result = intersection(first, secondEmpty)
            expect(isEmpty(result)).to.be.equal(true)
        })
    })

    describe('both interval are not empty', function () {
        it('intersection of [3, 9] and [-4, -2] returns empty interval', function () {
            const first = samples['[3, 9]']
            const second = samples['[-4, -2]']
            const result = intersection(first, second)
            expect(isEmpty(result)).to.be.equal(true)
        })
        it('intersection of (2, 5) and [3, 9] returns [3, 5)', function () {
            const first = samples['(2, 5)']
            const second = samples['[3, 9]']
            const result = intersection(first, second)
            expect(result).to.be.deep.equal(samples['[3, 5)'])
        })
        it('intersection of [3, 9] and [4, 7) returns empty interval', function () {
            const first = samples['[3, 9]']
            const second = samples['[4, 7)']
            const result = intersection(first, second)
            expect(result).to.be.deep.equal(samples['[4, 7)'])
        })
    })
})
