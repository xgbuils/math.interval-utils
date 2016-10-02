var chai = require('chai')
var expect = chai.expect
var isInterval = require('../src/is-interval')

describe('isInterval', function () {
    describe('if beginning of first interval is less than begginning of second interval', function () {
        it('interval must be an array', function () {
            var notArray = /a+/
            expect(isInterval(notArray)).to.be.equal(false)
        })

        it('interval must be an array of two elements', function () {
            var threeItems = [{
                value: 1,
                limit: 0
            }, {
                value: 3,
                limit: -1
            }, {
                value: 5,
                limit: -1
            }]
            expect(isInterval(threeItems)).to.be.equal(false)
        })

        it('interval must be an array with object items', function () {
            var arrayOfNumbers = [5, 2]
            expect(isInterval(arrayOfNumbers)).to.be.equal(false)
        })

        it('items of interval must have a numeric `value` property', function () {
            var arrayOfNumbers = [{
                value: 3,
                limit: 0
            }, {
                value: 'foo',
                limit: 0
            }]
            expect(isInterval(arrayOfNumbers)).to.be.equal(false)
        })

        it('items of interval must have a numeric `limit` property', function () {
            var arrayOfNumbers = [{
                value: 3,
                limit: 0
            }, {
                value: 5,
                limit: 0
            }]
            expect(isInterval(arrayOfNumbers)).to.be.equal(true)
        })
    })
})
