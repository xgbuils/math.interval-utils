# math.interval-utils

This library provides a data structure and functions to do operations with intervals of Real numbers to other libraries.

## Version
0.1.0

## Install
``` bash
npm install math.inteval-utils --save
```

## Interval

Real interval can be represented with a pair of real numbers and two flags to indicate if these numbers are included or not in interval. This library defines the interval as this data structure:

``` javascript
[
    {
        value: (Number)
        limit: (0|1)
    },
    {
        value: (Number)
        limit: (-1|0)
    }
]
```

If value is `0`, it indicates that value is included. If value is `1` or `-1`, it indicates that value is not included in interval. For example:

- `(1, 5]` is represented with:
``` javascript
[
    {
        value: 1
        limit: 1
    },
    {
        value: 5
        limit: 0
    }
]
```

- `[-1, 3]` is represented with:
``` javascript
[
    {
        value: -1
        limit: 0
    },
    {
        value: 3
        limit: 0
    }
]
```

- `(10, 12)` is represented with:
``` javascript
[
    {
        value: 10
        limit: 1
    },
    {
        value: 12
        limit: -1
    }
]
```

## Functions

### isEmpty(interval)
Given an `interval`, it returns `true` or `false` if `interval` is empty or not.

Example:
``` javascript
var isEmpty = require('math.interval-utils').isEmpty

var interval = [
    {value: 2, limit: 0},
    {value: -2, limit: 0}
]

isEmpty(interval) // true
```

### contains(interval1, interval2)
Given `interval1` and `interval2`, it returns `true` or `false` if `interval1` contains `interval2` or not.

Example:
``` javascript
var contains = require('math.interval-utils').contains

// [1, 3) 
var interval1 = [
    {value: 1, limit: 0},
    {value: 3, limit: -1}
]

// (1, 2) 
var interval2 = [
    {value: 1, limit: 1},
    {value: 2, limit: -1}
]

contains(interval1, interval2) // true
```

### union(...intervals)
Given interval parameters, it returns an array of disjoint intervals that represents the union of this interval.

``` javascript
var union = require('math.interval-utils').union

// [1, 3) 
var interval1 = [
    {value: 1, limit: 0},
    {value: 3, limit: -1}
]

// (2, 4) 
var interval2 = [
    {value: 2, limit: 1},
    {value: 4, limit: -1}
]

// [5, 5] 
var interval3 = [
    {value: 5, limit: 0},
    {value: 5, limit: 0}
]

// (5, 6) 
var interval4 = [
    {value: 5, limit: 1},
    {value: 6, limit: -1}
]

// returns [1, 4) U [5, 6)
union(interval1, interval2 interval3, interval4) /* [[
    {value: 1, limit: 0},
    {value: 4, limit: -1}
], [
    {value: 5, limit: 0},
    {value: 6, limit: -1}
]] */
```

### isInterval(interval)
It returns `true` or `false` if `interval` is a data structure defined [above](#interval).

Example:
``` javascript
var isInterval = require('math.interval-utils').isInterval

var interval1 = [
    {value: 2, limit: 0},
    {value: -2, limit: 0}
]

isInterval(interval1) // true

var interval2 = [
    {value: -2, limit: 0}
]

isInterval(interval2) // false
```

## LICENSE
MIT
