function limitComparator (a, b) {
    return a.value !== b.value
        ? a.value - b.value
        : a.limit - b.limit
}

module.exports = limitComparator
