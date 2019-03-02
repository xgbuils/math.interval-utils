const chai = require('chai')
const expect = chai.expect
const parser = require('../src/parser')
const samples = require('./interval-samples')
const ERROR = 'error'

describe('parser', function () {
    it('[4,5]', function () {
        const interval = parser('[4,5]').getOrElse(ERROR)
        expect(interval).to.be.deep.equal(samples['[4, 5]'])
    })

    it('[3, 9)', function () {
        const interval = parser('[3, 9)').getOrElse(ERROR)
        expect(interval).to.be.deep.equal(samples['[3, 9)'])
    })

    it('(3 ,11]', function () {
        const interval = parser('(3 ,11]').getOrElse(ERROR)
        expect(interval).to.be.deep.equal(samples['(3, 11]'])
    })

    it('[ 7 ,  7 ]', function () {
        const interval = parser('[ 7 , 7 ]').getOrElse(ERROR)
        expect(interval).to.be.deep.equal(samples['{7}'])
    })

    it('{ 5}', function () {
        const interval = parser('{ 5}').getOrElse(ERROR)
        expect(interval).to.be.deep.equal(samples['{5}'])
    })

    it('"(a, b)" returns a left error value', function () {
        const error = parser('(a, b)').swap().getOrElse(ERROR)
        expect(error).to.be.equal('"a" is not a number')
    })

    it('"[4, 5*" throws an exception', function () {
        const error = parser('[4, 5*').swap().getOrElse(ERROR)
        expect(error).to.be.equal('"[4, 5*" does not match to interval expression')
    })
})
