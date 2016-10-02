var chai = require('chai')
var expect = chai.expect
var union = require('../src/union')
var samples = require('./interval-samples')
var clone = require('clone')

describe('union.js', function () {
    describe('an interval contains the other: [4,5] U [ 3 , 9) --> [3, 9)', function () {
        var copies = {
            '[4, 5]': clone(samples['[4, 5]']),
            '[3, 9)': clone(samples['[3, 9)'])
        }
        var intervalList = union([
            samples['[4, 5]'],
            samples['[3, 9)']
        ])

        it('returns expected union', function () {
            expect(intervalList).to.be.deep.equal([
                samples['[3, 9)']
            ])
        })

        it('does not produce side effects', function () {
            expect(samples['[4, 5]']).to.deep.equal(copies['[4, 5]'])
            expect(samples['[3, 9)']).to.deep.equal(copies['[3, 9)'])
        })
    })

    describe('union of disjoint sets: (0, 1](0, 1] U [ 3 , 9) --> [3, 9)', function () {
        var copies = {
            '(0, 1]': clone(samples['(0, 1]']),
            '[3, 9)': clone(samples['[3, 9)'])
        }
        var intervalList = union([
            samples['(0, 1]'],
            samples['[3, 9)']
        ])

        it('returns expected union', function () {
            expect(intervalList).to.be.deep.equal([
                samples['(0, 1]'],
                samples['[3, 9)']
            ])
        })

        it('does not produce side effects', function () {
            expect(samples['(0, 1]']).to.deep.equal(copies['(0, 1]'])
            expect(samples['[3, 9)']).to.deep.equal(copies['[3, 9)'])
        })
    })

    describe('(4, 8) U [3 ,5) U {-1} U {7} --> {-1} U [3, 8)', function () {
        var copies = {
            '(4, 8)': clone(samples['(4, 8)']),
            '[3, 5)': clone(samples['[3, 5)']),
            '{-1}': clone(samples['{-1}']),
            '{7}': clone(samples['{7}'])
        }

        var intervalList = union([
            samples['(4, 8)'],
            samples['[3, 5)'],
            samples['{-1}'],
            samples['{7}']
        ])

        it('returns expected union', function () {
            expect(intervalList).to.be.deep.equal([
                samples['{-1}'],
                samples['[3, 8)']
            ])
        })

        it('does not produce side effects', function () {
            expect(samples['(4, 8)']).to.deep.equal(copies['(4, 8)'])
            expect(samples['[3, 5)']).to.deep.equal(copies['[3, 5)'])
            expect(samples['{-1}']).to.deep.equal(copies['{-1}'])
            expect(samples['{7}']).to.deep.equal(copies['{7}'])
        })
    })

    it('[5, 5] --> {5}', function () {
        var intervalList = union([
            samples['{5}']
        ])

        expect(intervalList).to.be.deep.equal([
            samples['{5}']
        ])
    })

    it('(3, 11] --> (3, 11]', function () {
        var intervalList = union([
            samples['(3, 11]']
        ])

        expect(intervalList).to.be.deep.equal([
            samples['(3, 11]']
        ])
    })

    it('(3, 0] --> empty', function () {
        var intervalList = union([
            samples['(3, 0]']
        ])

        expect(intervalList).to.be.deep.equal([])
    })

    describe('(3, 0] U [7, 7] U (2, 7) --> (2, 7]', function () {
        var copies = {
            '(2, 7)': clone(samples['(2, 7)']),
            '{7}': clone(samples['{7}'])
        }
        var intervalList = union([
            samples['(2, 7)'],
            samples['{7}']
        ])

        it('returns expected union', function () {
            expect(intervalList).to.be.deep.equal([
                samples['(2, 7]']
            ])
        })

        it('does not produce side effects', function () {
            expect(samples['(2, 7)']).to.deep.equal(copies['(2, 7)'])
            expect(samples['{7}']).to.deep.equal(copies['{7}'])
        })
    })
})
