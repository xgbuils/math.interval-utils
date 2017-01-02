const chai = require('chai')
const expect = chai.expect
const samples = require('./interval-samples')

const intersection = require('../src/intersection')

describe('intersection', function () {
    describe('both empty lists', function () {
        it('returns empty list', function () {
            const first = []
            const second = []
            const result = intersection(first, second)
            expect(result).to.be.deep.equal([])
        })
    })

    describe('first empty list', function () {
        it('returns empty list', function () {
            const first = []
            const second = [samples['[3, 9)']]
            const result = intersection(first, second)
            expect(result).to.be.deep.equal([])
        })
    })

    describe('second empty list', function () {
        it('returns empty list', function () {
            const first = [samples['[3, 9)']]
            const second = []
            const result = intersection(first, second)
            expect(result).to.be.deep.equal([])
        })
    })

    describe('no empty lists', function () {
        describe('simple lists', function () {
            describe('disjoint lists', function () {
                it('it returns empty list', function () {
                    const first = [samples['[3, 5)']]
                    const second = [samples['(6, 8)']]
                    const result = intersection(first, second)
                    expect(result).to.be.deep.equal([])
                })

                it('it returns empty list', function () {
                    const first = [samples['(6, 8)']]
                    const second = [samples['[3, 5)']]
                    const result = intersection(first, second)
                    expect(result).to.be.deep.equal([])
                })
            })

            describe('non-disjoint lists', function () {
                it('it returns the intersection', function () {
                    const first = [samples['[3, 5)']]
                    const second = [samples['[4, 7)']]
                    const result = intersection(first, second)
                    expect(result).to.be.deep.equal([samples['[4, 5)']])
                })

                it('it returns the intersection', function () {
                    const first = [samples['[4, 7)']]
                    const second = [samples['[3, 5)']]
                    const result = intersection(first, second)
                    expect(result).to.be.deep.equal([samples['[4, 5)']])
                })
            })
        })

        describe('complex lists', function () {
            describe('disjoint lists', function () {
                it('it returns empty list', function () {
                    const first = [samples['[-5, -2)'], samples['[3, 5)']]
                    const second = [samples['{-1}'], samples['(6, 8)']]
                    const result = intersection(first, second)
                    expect(result).to.be.deep.equal([])
                })

                it('it returns empty list', function () {
                    const first = [samples['[-5, -2)'], samples['(6, 8)']]
                    const second = [samples['{-1}'], samples['[3, 5)']]
                    const result = intersection(first, second)
                    expect(result).to.be.deep.equal([])
                })
            })
        })
    })
})
