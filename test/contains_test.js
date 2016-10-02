var chai = require('chai')
var expect = chai.expect
var contains = require('../src/contains')
var samples = require('./interval-samples')

describe('contains', function () {
    describe('isolated: {-2}', function () {
        var interval = samples['{-2}']

        it('contains {-2}', function () {
            expect(contains(interval, samples['{-2}'])).to.be.equal(true)
        })
        it('does not contain [1, 1]', function () {
            expect(contains(interval, samples['[1, 1]'])).to.be.equal(false)
        })
        it('does not contain [-2, 0)', function () {
            expect(contains(interval, samples['[-2, 0)'])).to.be.equal(false)
        })
        it('does not contain [-4, -2]', function () {
            expect(contains(interval, samples['[-4, -2]'])).to.be.equal(false)
        })
        it('does not contain (-2, 1]', function () {
            expect(contains(interval, samples['(-2, 1]'])).to.be.equal(false)
        })
        it('does not contain [-5, -2)', function () {
            expect(contains(interval, samples['[-5, -2)'])).to.be.equal(false)
        })
        it('does not contain [-4, 8)', function () {
            expect(contains(interval, samples['[-4, 8)'])).to.be.equal(false)
        })
        it('contains empty set: (8, -4]', function () {
            expect(contains(interval, samples['(8, -4]'])).to.be.equal(true)
        })
    })

    describe('[1, 6)', function () {
        var interval = samples['[1, 6)']

        it('contains {2}', function () {
            expect(contains(interval, samples['{2}'])).to.be.equal(true)
        })
        it('does not contain [1, 6]', function () {
            expect(contains(interval, samples['[1, 6]'])).to.be.equal(false)
        })
        it('contains [1, 6)', function () {
            expect(contains(interval, samples['[1, 6)'])).to.be.equal(true)
        })
        it('contains (1, 6)', function () {
            expect(contains(interval, samples['(1, 6)'])).to.be.equal(true)
        })
        it('contains (2, 5)', function () {
            expect(contains(interval, samples['(2, 5)'])).to.be.equal(true)
        })
        it('does not contain (0, 5)', function () {
            expect(contains(interval, samples['(0, 5)'])).to.be.equal(false)
        })
        it('contains empty set', function () {
            expect(contains(interval, samples['(100, 95)'])).to.be.equal(true)
        })
    })

    describe('empty set: (3, -2)', function () {
        var interval = samples['(3, -2)']

        it('does not contain [1, 5)', function () {
            expect(contains(interval, samples['[1, 5)'])).to.be.equal(false)
        })
        it('empty set contains empty set', function () {
            expect(contains(interval, samples['(100, 10)'])).to.be.equal(true)
        })
        it('does not contain [3, 3]', function () {
            expect(contains(interval, samples['[3, 3]'])).to.be.equal(false)
        })
        it('does not contain {-2}', function () {
            expect(contains(interval, samples['{-2}'])).to.be.equal(false)
        })
    })
})
