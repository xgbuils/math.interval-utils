function limitComparator (a, b) {
    if (a.value !== b.value) {
        return a.value - b.value
    } else {
        return a.limit - b.limit
    }
}

module.exports = limitComparator
