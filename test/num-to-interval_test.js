var chai = require('chai')
var expect = chai.expect
var numToInterval = require('../src/num-to-interval')

describe('numToInterval', function () {
    it('give a number it returns an isolated interval with this number', function () {
        var num = 5
        expect(numToInterval(num)).to.be.deep.equal([{
            value: num,
            limit: 0
        }, {
            value: num,
            limit: 0
        }])
    })
})
