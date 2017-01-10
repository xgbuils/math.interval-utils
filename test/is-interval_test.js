const chai = require('chai')
const expect = chai.expect
const isInterval = require('../src/is-interval')

describe('isInterval', function () {
    describe('interval must be an array of length 2', function () {
        it('it returns false if it is passed a regexp', function () {
            const notArray = /a+/
            expect(isInterval(notArray)).to.be.equal(false)
        })

        it('it returns false if it is not an array of 2 elements', function () {
            const threeItems = [{
                value: 7,
                limit: 0
            }, {
                value: 5,
                limit: -1
            }, {
                value: 3,
                limit: 1
            }]
            expect(isInterval(threeItems)).to.be.equal(false)
        })
    })

    describe('interval must have object as items', function () {
        it('it returns false if not', function () {
            const arrayOfNumbers = [5, 2]
            expect(isInterval(arrayOfNumbers)).to.be.equal(false)
        })
    })

    describe('each item of interval must have `value` and `limit` properties', function () {
        it('it returns false if `value` is not numeric', function () {
            const arrayOfNumbers = [{
                value: 1,
                limit: 0
            }, {
                value: 'foo',
                limit: -1
            }]
            expect(isInterval(arrayOfNumbers)).to.be.equal(false)
        })

        it('it returns true if `value` is numeric', function () {
            const arrayOfNumbers = [{
                value: -1,
                limit: 1
            }, {
                value: new Number(-3),
                limit: 0
            }]
            expect(isInterval(arrayOfNumbers)).to.be.equal(true)
        })

        it('it returns false if `limit` is different to -1, 0 or 1', function () {
            const arrayOfNumbers = [{
                value: -1,
                limit: new Number(5)
            }, {
                value: -5,
                limit: 0
            }]
            expect(isInterval(arrayOfNumbers)).to.be.equal(false)
        })

        it('it returns true if `limit` is 0', function () {
            const arrayOfNumbers = [{
                value: 6,
                limit: 0
            }, {
                value: -2,
                limit: new Number(0)
            }]
            expect(isInterval(arrayOfNumbers)).to.be.equal(true)
        })

        it('it returns true if `limit` is -1', function () {
            const arrayOfNumbers = [{
                value: 6,
                limit: new Number(-1)
            }, {
                value: -2,
                limit: -1
            }]
            expect(isInterval(arrayOfNumbers)).to.be.equal(true)
        })

        it('it returns true if `limit` is 1', function () {
            const arrayOfNumbers = [{
                value: 6,
                limit: 1
            }, {
                value: -2,
                limit: new Number(1)
            }]
            expect(isInterval(arrayOfNumbers)).to.be.equal(true)
        })
    })
})
