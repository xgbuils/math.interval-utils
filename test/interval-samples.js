module.exports = {
    '[-5, -2)': [{
        value: -5,
        limit: 0
    }, {
        value: -2,
        limit: -1
    }],

    '[-4, -2]': [{
        value: -4,
        limit: 0
    }, {
        value: -2,
        limit: 0
    }],

    '[-4, 8)': [{
        value: -4,
        limit: 0
    }, {
        value: 8,
        limit: -1
    }],

    '{-2}': [{
        value: -2,
        limit: 0
    }, {
        value: -2,
        limit: 0
    }],

    '[-2, 0)': [{
        value: -2,
        limit: 0
    }, {
        value: 0,
        limit: -1
    }],

    '(-2, 1]': [{
        value: -2,
        limit: 1
    }, {
        value: 1,
        limit: 0
    }],

    '{-1}': [{
        value: -1,
        limit: 0
    }, {
        value: -1,
        limit: 0
    }],

    '(0, 1]': [{
        value: 0,
        limit: 1
    }, {
        value: 1,
        limit: 0
    }],

    '(0, 5)': [{
        value: 0,
        limit: 1
    }, {
        value: 5,
        limit: -1
    }],

    '[1, 1]': [{
        value: 1,
        limit: 0
    }, {
        value: 1,
        limit: 0
    }],

    '[1, 5)': [{
        value: 1,
        limit: 0
    }, {
        value: 5,
        limit: -1
    }],

    '[1, 6)': [{
        value: 1,
        limit: 0
    }, {
        value: 6,
        limit: -1
    }],

    '[1, 6]': [{
        value: 1,
        limit: 0
    }, {
        value: 6,
        limit: 0
    }],

    '(1, 6)': [{
        value: 1,
        limit: 1
    }, {
        value: 6,
        limit: -1
    }],

    '[2, 0)': [{
        value: 2,
        limit: 0
    }, {
        value: 0,
        limit: -1
    }],

    '{2}': [{
        value: 2,
        limit: 0
    }, {
        value: 2,
        limit: 0
    }],

    '(2, 5)': [{
        value: 2,
        limit: 1
    }, {
        value: 5,
        limit: -1
    }],

    '(2, 7)': [{
        value: 2,
        limit: 1
    }, {
        value: 7,
        limit: -1
    }],

    '(2, 7]': [{
        value: 2,
        limit: 1
    }, {
        value: 7,
        limit: 0
    }],

    '[3, 3]': [{
        value: 3,
        limit: 0
    }, {
        value: 3,
        limit: 0
    }],

    '[3, 5)': [{
        value: 3,
        limit: 0
    }, {
        value: 5,
        limit: -1
    }],

    '[3, 8)': [{
        value: 3,
        limit: 0
    }, {
        value: 8,
        limit: -1
    }],

    '[3, 9)': [{
        value: 3,
        limit: 0
    }, {
        value: 9,
        limit: -1
    }],

    '[3, 9]': [{
        value: 3,
        limit: 0
    }, {
        value: 9,
        limit: 0
    }],

    // empty
    '(3, -2)': [{
        value: 3,
        limit: 1
    }, {
        value: -2,
        limit: -1
    }],

    // empty
    '(3, 0]': [{
        value: 3,
        limit: 1
    }, {
        value: 0,
        limit: 0
    }],

    '(3, 11]': [{
        value: 3,
        limit: 1
    }, {
        value: 11,
        limit: 0
    }],

    '(4, 5]': [{
        value: 4,
        limit: 1
    }, {
        value: 5,
        limit: 0
    }],

    '[4, 5)': [{
        value: 4,
        limit: 0
    }, {
        value: 5,
        limit: -1
    }],

    '[4, 5]': [{
        value: 4,
        limit: 0
    }, {
        value: 5,
        limit: 0
    }],

    '[4, 7)': [{
        value: 4,
        limit: 0
    }, {
        value: 7,
        limit: -1
    }],

    '(4, 8)': [{
        value: 4,
        limit: 1
    }, {
        value: 8,
        limit: -1
    }],

    '{5}': [{
        value: 5,
        limit: 0
    }, {
        value: 5,
        limit: 0
    }],

    '{7}': [{
        value: 7,
        limit: 0
    }, {
        value: 7,
        limit: 0
    }],

    '(6, 8)': [{
        value: 6,
        limit: 1
    }, {
        value: 8,
        limit: -1
    }],

    // empty
    '(8, -4]': [{
        value: 8,
        limit: 1
    }, {
        value: -4,
        limit: 0
    }],

    '(100, 10)': [{
        value: 100,
        limit: 1
    }, {
        value: 10,
        limit: -1
    }],

    '(100, 95)': [{
        value: 100,
        limit: 1
    }, {
        value: 95,
        limit: -1
    }]
}
