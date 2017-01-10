function numToInterval (num) {
    const limit = {
        value: num,
        limit: 0
    }
    return [limit, Object.assign({}, limit)]
}

module.exports = numToInterval
