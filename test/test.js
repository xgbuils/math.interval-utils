const chai = require('chai')
const expect = chai.expect
const utils = require('../src/index.js')

describe('src/index.js', function () {
    describe('all exposed properties are functions', function () {
        Object.keys(utils).forEach(function (key) {
            it(`${key} is a function`, function () {
                expect(utils[key]).to.be.a('function')
            })
        })
    })
})
