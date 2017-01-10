function create (...pair) {
    return pair.map(e => Object.assign({}, e))
}

module.exports = create
