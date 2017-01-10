const chai = require('chai')
const expect = chai.expect
const intervalComparator = require('../../src/utils/interval-comparator')
const samples = require('../interval-samples')

describe('intervalComparator', function () {
    describe('if beginning of first interval is less than begginning of second interval', function () {
        it('always returns negative number', function () {
            const a = samples['(3, 11]']
            const b = samples['(4, 8)']
            expect(intervalComparator(a, b)).to.be.below(0)
        })

        it('always returns negative number', function () {
            const a = samples['[3, 5)']
            const b = samples['(3, 11]']
            expect(intervalComparator(a, b)).to.be.below(0)
        })
    })

    describe('if beginning of first interval is greater than begginning of second interval', function () {
        it('always returns positive number', function () {
            const a = samples['(4, 5]']
            const b = samples['[4, 5]']
            expect(intervalComparator(a, b)).to.be.above(0)
        })

        it('always returns positive number', function () {
            const a = samples['(3, 11]']
            const b = samples['[3, 5)']
            expect(intervalComparator(a, b)).to.be.above(0)
        })
    })

    describe('Given beginning of first interval equal to begginning of second interval', function () {
        describe('if end of first interval is greater than end of second interval', function () {
            it('returns positive number', function () {
                const a = samples['(4, 8)']
                const b = samples['(4, 5]']
                expect(intervalComparator(a, b)).to.be.below(0)
            })
        })

        describe('if end of first interval is less than end of second interval', function () {
            it('returns negative number', function () {
                const a = samples['[3, 9]']
                const b = samples['[3, 9)']
                expect(intervalComparator(a, b)).to.be.below(0)
            })
        })

        describe('if end of first interval is equal to end of second interval', function () {
            it('returns 0', function () {
                const a = samples['[4, 5]']
                const b = samples['[4, 5]']
                expect(intervalComparator(a, b)).to.be.equal(0)
            })
        })
    })
})
