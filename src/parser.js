const {Right, Left} = require('data.either')

const appendTo = (array) => (value) => {
    array.push(value)
    return array
}

const parseLimit = chars => str => Right(chars[str])
const parseLeftLimit = parseLimit({
    '(': 1,
    '[': 0
})
const parseRightLimit = parseLimit({
    ']': 0,
    ')': -1
})

const parseToNumber = str => {
    const num = Number(str)
    return isNaN(num)
        ? Left(`"${str}" is not a number`)
        : Right(num)
}

const parseChunkActions = [
    parseLeftLimit,
    parseToNumber,
    parseToNumber,
    parseRightLimit
]

const parseStringInterval = (intervalChunks) => {
    return parseChunkActions.reduce((interval, parseChunk, index) => {
        return interval.chain((interval) => {
            return parseChunk(intervalChunks[index])
                .map(appendTo(interval))
        })
    }, Right([]))
}

function parseStringToValues (str) {
    const matches = /^\{\s*(\S+)\s*\}|([\(\[])\s*(\S+)\s*,\s*(\S+)\s*([\)\]])$/.exec(str)
    if (!matches) {
        return Left(`"${str}" does not match to interval expression`)
    }
    const value = matches[1]
    return value
        ? parseToNumber(value).map(num => ([0, num, num, 0]))
        : parseStringInterval(matches.slice(2))
}

module.exports = function stringToInterval (e) {
    return parseStringToValues(e)
        .map(values => [{
            value: values[1],
            limit: values[0]
        }, {
            value: values[2],
            limit: values[3]
        }])
}
