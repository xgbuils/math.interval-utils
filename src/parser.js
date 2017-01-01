function parseStringToValues (str) {
    const matches = /^\{\s*(\S+)\s*\}|([\(\[])\s*(\S+)\s*,\s*(\S+)\s*([\)\]])$/.exec(str)
    if (!matches) {
        throw new Error('"' + str + '" does not match to interval expression')
    }
    const value = matches[1]
    if (value) {
        const num = Number(value)
        assertNum(num, value)
        return [0, num, num, 0]
    }
    return matches.slice(2).map(function (value, index) {
        if ((index === 1 || index === 2)) {
            const num = Number(value)
            assertNum(num, value)
            return num
        } else {
            return {
                '(': 1,
                '[': 0,
                ']': 0,
                ')': -1
            }[value]
        }
    })
}

function assertNum (num, value) {
    if (isNaN(num)) {
        throw new Error('"' + value + '" is not a number')
    }
}

module.exports = function stringToInterval (e) {
    const values = parseStringToValues(e)
    return [{
        value: values[1],
        limit: values[0]
    }, {
        value: values[2],
        limit: values[3]
    }]
}
