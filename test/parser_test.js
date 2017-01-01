const chai = require('chai')
const expect = chai.expect
const parser = require('../src/parser')
const samples = require('./interval-samples')

describe('parser', function () {
    it('[4,5]', function () {
        const interval = parser('[4,5]')
        expect(interval).to.be.deep.equal(samples['[4, 5]'])
    })

    it('[3, 9)', function () {
        const interval = parser('[3, 9)')
        expect(interval).to.be.deep.equal(samples['[3, 9)'])
    })

    it('(3 ,11]', function () {
        const interval = parser('(3 ,11]')
        expect(interval).to.be.deep.equal(samples['(3, 11]'])
    })

    it('[ 7 ,  7 ]', function () {
        const interval = parser('[ 7 , 7 ]')
        expect(interval).to.be.deep.equal(samples['{7}'])
    })

    it('{ 5}', function () {
        const interval = parser('{ 5}')
        expect(interval).to.be.deep.equal(samples['{5}'])
    })

    it('"(a, b)" throws an exception', function () {
        function foo () {
            parser('(a, b)')
        }
        expect(foo).to.throw('"a" is not a number')
    })

    it('"[4, 5*" throws an exception', function () {
        function foo () {
            parser('[4, 5*')
        }
        expect(foo).to.throw('"[4, 5*" does not match to interval expression')
    })
})
