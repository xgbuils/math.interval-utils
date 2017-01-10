const chai = require('chai')
const expect = chai.expect
const samples = require('./interval-samples')

const relativeComplement = require('../src/relative-complement')

describe('relativeComplement', function () {
    describe('fisrt interval is empty', function () {
        it('it returns an empty list', function () {
            const firstEmpty = samples['[2, 0)']
            const second = samples['[1, 6)']
            const result = relativeComplement(firstEmpty, second)
            expect(result).to.be.deep.equal([])
        })
    })

    describe('first interval is not empty', function () {
        it('if intervals are disjoint, it returns a list with first interval', function () {
            const first = samples['(0, 2]']
            const second = samples['[3, 9]']
            const result = relativeComplement(first, second)
            expect(result).to.be.deep.equal([first])
        })
        it('if intervals are equal, it returns an empty list', function () {
            const first = samples['(2, 5)']
            const second = samples['(2, 5)']
            const result = relativeComplement(first, second)
            expect(result).to.be.deep.equal([])
        })
        it('if first interval contains the second interval, it returns a list with the two relative complement intervals', function () {
            const first = samples['[3, 9]']
            const second = samples['(4, 5]']
            const result = relativeComplement(first, second)
            expect(result).to.be.deep.equal([
                samples['[3, 4]'],
                samples['(5, 9]']
            ])
        })
        it('if second interval contains the first interval, it returns an empty list', function () {
            const first = samples['[3, 9]']
            const second = samples['(4, 5]']
            const result = relativeComplement(first, second)
            expect(result).to.be.deep.equal([
                samples['[3, 4]'],
                samples['(5, 9]']
            ])
        })
        describe('otherwise', function () {
            it('it returns correct relative complement', function () {
                const first = samples['[3, 5)']
                const second = samples['(4, 8)']
                const result = relativeComplement(first, second)
                expect(result).to.be.deep.equal([samples['[3, 4]']])
            })
            it('it returns correct relative complement', function () {
                const first = samples['(4, 8)']
                const second = samples['[3, 5)']
                const result = relativeComplement(first, second)
                expect(result).to.be.deep.equal([samples['[5, 8)']])
            })
        })
    })
})
