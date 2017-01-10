const chai = require('chai')
const expect = chai.expect
const limitComparator = require('../../src/utils/limit-comparator')

describe('limitComparator', function () {
    describe('when property value of first item is greater than second', function () {
        it('always return positive number', function () {
            expect(limitComparator({
                value: 100,
                limit: 1
            }, {
                value: 50,
                limit: 1
            })).to.be.above(0)
        })

        it('always return positive number', function () {
            expect(limitComparator({
                value: 100,
                limit: -1
            }, {
                value: 50,
                limit: 1
            })).to.be.above(0)
        })
    })

    describe('when property value of first item is less than second', function () {
        it('always return negative number', function () {
            expect(limitComparator({
                value: -3.1,
                limit: -1
            }, {
                value: 50,
                limit: 0
            })).to.be.below(0)
        })

        it('always return negative number', function () {
            expect(limitComparator({
                value: -2,
                limit: -1
            }, {
                value: 50,
                limit: -1
            })).to.be.below(0)
        })
    })

    describe('when property value of first item is equal to second', function () {
        describe('knowing that limit property must be -1, 0 or 1', function () {
            it('if first is less than second returns negative number', function () {
                expect(limitComparator({
                    value: 5,
                    limit: -1
                }, {
                    value: 5,
                    limit: 1
                })).to.be.below(0)
            })

            it('if first is greater than second returns positive number', function () {
                expect(limitComparator({
                    value: 0,
                    limit: 1
                }, {
                    value: 0,
                    limit: 0
                })).to.be.above(0)
            })

            it('if first is equal to second returns negative number', function () {
                expect(limitComparator({
                    value: -3,
                    limit: 0
                }, {
                    value: -3,
                    limit: 0
                })).to.be.equal(0)
            })
        })
    })
})
