# math.interval-utils

[![travis ci][1]][2]
[![npm version][3]][4]
[![Coverage Status][5]][6]
[![Dependency Status][7]][8]

This library provides a data structure and functions to do operations with intervals.

## Version
0.3.0

## Install
``` bash
npm install math.inteval-utils --save
```

## Index
- [Interval](#interval)
  - [Data structure and valid values](#data-structure-and-valid-values)
  - [Empty interval](#empty-interval)
- [Functions](#functions)
  - [areDisjoint](#aredisjointinterval1-interval2)
  - [areEqual](#areequalinterval1-interval2)
  - [contains](#containsinterval1-interval2)
  - [intersection](#intersectioninterval1-interval2)
  - [isEmpty](#isemptyinterval)
  - [isInterval](#isintervalinterval)
  - [multiIntersection](#multiintersectionlistintervals1-listintervals2)
  - [numToInterval](#numtointervalnum)
  - [parser](#parserstring)
  - [relativeComplement](#relativecomplementinterval1-interval2)
- [License](#license)

## Interval

### Data structure and valid values

Real interval can be represented with an pair of real numbers and two flags to indicate if these numbers are included or not in interval. This library defines the `Interval` type as the set of arrays of two objects with `value` and `limit` number properties:

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

`value` properties correspond to the values of interval and `limit` properties correspond to if values of interval are included or not.
- If limit is `0`, it indicates that value is included.
- If the `limit` of first item is `1` , it indicates that first `value` is not included in interval.
- If the `limit` of second item is `-1`, it indicates that second `value` is not included in interval.

 For example:
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

### Empty interval
An interval is empty in these cases:
- `value` of first element is greater than `value` of second element.
- `value` of first and second elements are equal but `limit` of first element is greater than `limit` of second element.

## Functions

### areDisjoint :: (Interval, Interval) -> Boolean
Given two interval inputs, it returns `true` or `false` depending on intervals are disjoint or not, respectively.

Example:
``` javascript
const { areDisjoint } = require('math.interval-utils')

// [1, 3)
const interval1 = [
    {value: 1, limit: 0},
    {value: 3, limit: -1}
]

// (1, 2)
const interval2 = [
    {value: 1, limit: 1},
    {value: 2, limit: -1}
]

// {1}
const interval3 = [
    {value: 1, limit: 0},
    {value: 1, limit: 0}
]

areDisjoint(interval1, interval2) // false
areDisjoint(interval2, interval3) // true
```

### areEqual :: (Interval, Interval) -> Boolean
Given two interval inputs, it returns `true` or `false` depending on intervals are equal or not, respectively.

Example:
``` javascript
const { areEqual } = require('math.interval-utils')

// [1, 3)
const interval1 = [
    {value: 1, limit: 0},
    {value: 3, limit: -1}
]

// [1, 3)
const interval2 = [
    {value: 1, limit: 0},
    {value: 3, limit: -1}
]

// [1, 3]
const interval3 = [
    {value: 1, limit: 0},
    {value: 3, limit: 0}
]

areEqual(interval1, interval2) // true
areEqual(interval2, interval3) // false
```

### contains :: (Interval, Interval) -> Boolean
Given two interval inputs, it returns `true` or `false` if first interval contains the second interval or not, respectively.

Example:
``` javascript
const { contains } = require('math.interval-utils')

// [1, 3)
const interval1 = [
    {value: 1, limit: 0},
    {value: 3, limit: -1}
]

// (1, 2)
const interval2 = [
    {value: 1, limit: 1},
    {value: 2, limit: -1}
]

contains(interval1, interval2) // true
contains(interval2, interval1) // false
```

### intersection :: (Interval, Interval) -> Interval
Given two interval inputs, it returns the intersection of these intervals.

Example:
``` javascript
const { intersection } = require('math.interval-utils')
const I = {}
// [1, 3)
I['[1, 3)'] = [
    {value: 1, limit: 0},
    {value: 3, limit: -1}
]

// (1, 2)
I['(1, 2)'] = [
    {value: 1, limit: 1},
    {value: 2, limit: -1}
]

// (3, 4)
I['(3, 4)'] = [
    {value: 3, limit: 1},
    {value: 4, limit: -1}
]

intersection(I['[1, 3)'], I['(1, 2)']) // (1, 2)
intersection(I['(1, 2)'], I['(3, 4)']) // (3, 4)
intersection(I['[1, 3)'], I['(3, 4)']) // empty
```

### isEmpty :: Interval -> Boolean
Given an `interval`, it returns `true` or `false` if `interval` [is empty](#empty-interval) or not, respectively.

Example:
``` javascript
const { isEmpty } = require('math.interval-utils')

// [2, -2]
const interval1 = [
    {value: 2, limit: 0},
    {value: -2, limit: 0}
]

// (1, 1]
const interval2 = [
    {value: 1, limit: 1},
    {value: 1, limit: 0}
]

// [1, 1]
const interval3 = [
    {value: 1, limit: 0},
    {value: 1, limit: 0}
]

isEmpty(interval1) // true
isEmpty(interval2) // true
isEmpty(interval3) // false
```

### isInterval :: Interval -> Boolean
It returns `true` or `false` if `interval` is an [Interval](#interval).

Example:
``` javascript
const { isInterval } = require('math.interval-utils')

const interval1 = [
    {value: 2, limit: 0},
    {value: -2, limit: 0}
]

const interval2 = [
    {value: -2, limit: 0}
]

const interval3 = [
    {value: 2, limit: 0},
    {value: Infinity, limit: -1}
]

isInterval(interval1) // true
isInterval(interval2) // false
isInterval(interval3) // true
```

### multiIntersection :: ([Interval], [Interval]) -> [Interval]
Given two lists of disjoint sorted intervals, it returns a new list of disjoint sorted intervals that represent the intersection of these sets.

Example:
``` javascript
// (1, 3) U {4} U [5, 6)
const listIntervals1 = [[
  {value: 1, limit: 1},
  {value: 3, limit: -1}
], [
  {value: 4, limit: 0},
  {value: 4, limit: 0}
], [
  {value: 5, limit: 0},
  {value: 6, limit: -1}
]]

// {0} U [1, 2] U (3, 4] U (5, 7)
const listIntervals2 = [[
  {value: 0, limit: 0},
  {value: 0, limit: 0}
], [
  {value: 3, limit: 1},
  {value: 4, limit: 0}
], [
  {value: 5, limit: 1},
  {value: 7, limit: -1}
]]

// returns (1, 2] U {4} U (5, 6)
multiIntersection(listIntervals1, listIntervals2) // [[
  {value: 1, limit: 1},
  {value: 2, limit: 0}
], [
  {value: 4, limit: 0},
  {value: 4, limit: 0}
], [
  {value: 5, limit: 1},
  {value: 6, limit: -1}
]]
```

This method has better perfomance than recolecting the intersections of each interval of each lists and intersecting one by one.

### numToInterval :: Number -> Interval
Given a number input, it returns an singleton interval that contains this number.

Example:
``` javascript
const { numToInterval } = require('math.interval-utils')

// returns {5} or [5, 5]
numToInterval(5) /* returns [
    {value: 5, limit: 0},
    {value: 5, limit: 0}
]*/
```

### parser :: string -> Either Interval String
Given a string that represents an interval, it returns an Either.Right value that saves an interval. If the string does not represent an interval it returns and Either.Left value that saves an error.

Example:
``` javascript
const { Right, Left } = require('data.either')
const { parser } = require('math.interval-utils')

parser('(2, 3]') /* Right [
    {value: 2, limit: 1},
    {value: 3, limit: 0}
] */

parser('{5}') /* Right([
    {value: 5, limit: 0},
    {value: 5, limit: 0}
]) */

parser('(2, 5(') // Left('"(2, 5(" does not match to interval expression')
```

### relativeComplement :: (Interval, Interval) -> [Interval]
Given two interval inputs, it returns a list of intevals that represents the relative complement. It means, the set of numbers that belongs to the first interval but not the second.

Example:
``` javascript
const { relativeComplement } = require('math.interval-utils')
const I = {}
// [1, 5)
I['[1, 5)'] = [
    {value: 1, limit: 0},
    {value: 5, limit: -1}
]

// (2, 3)
I['(2, 3)'] = [
    {value: 2, limit: 1},
    {value: 3, limit: -1}
]

// [4, 6]
I['[4, 6]'] = [
    {value: 4, limit: 0},
    {value: 6, limit: 0}
]

// returns [1, 2] U [3, 5)
relativeComplement(I['[1, 5)'], I['(2, 3)']) /* [[
  {value: 1, limit: 0},
  {value: 2, limit: 0}
], [
  {value: 3, limit: 0},
  {value: 5, limit: -1}
]] */

// returns [1, 4)
relativeComplement(I['[1, 5)'], I['[4, 6]']) /* [[
  {value: 1, limit: 0},
  {value: 4, limit: -1}
]] */

// returns (2, 3)
relativeComplement(I['(2, 3)'], I['[4, 6]']) /* [[
    {value: 2, limit: 1},
    {value: 3, limit: -1}
]] */
```

// returns empty array
relativeComplement(I['(2, 3)'], I['[1, 5)']) // []

### union :: [Interval] -> [Interval]
Given an array of intervals, it returns an array of sorted disjoint intervals that represents the union of these intervals.

Example:
``` javascript
const { union } = require('math.interval-utils').union
const I = {}
// [1, 3)
I['[1, 3)'] = [
    {value: 1, limit: 0},
    {value: 3, limit: -1}
]

// (2, 4)
I['(2, 4)'] = [
    {value: 2, limit: 1},
    {value: 4, limit: -1}
]

// [5, 5]
I['[5, 5]'] = [
    {value: 5, limit: 0},
    {value: 5, limit: 0}
]

// (5, 6)
I['(5, 6)'] = [
    {value: 5, limit: 1},
    {value: 6, limit: -1}
]

// returns [1, 4) U [5, 6)
union([interval1, interval2 interval3, interval4]) /* [[
    {value: 1, limit: 0},
    {value: 4, limit: -1}
], [
    {value: 5, limit: 0},
    {value: 6, limit: -1}
]] */
```

## LICENSE
MIT

  [1]: https://travis-ci.org/xgbuils/math.interval-utils.svg?branch=master
  [2]: https://travis-ci.org/xgbuils/math.interval-utils
  [3]: https://badge.fury.io/js/math.interval-utils.svg
  [4]: https://badge.fury.io/js/math.interval-utils
  [5]: https://coveralls.io/repos/github/xgbuils/math.interval-utils/badge.svg?branch=master
  [6]: https://coveralls.io/github/xgbuils/math.interval-utils?branch=master
  [7]: https://david-dm.org/xgbuils/math.interval-utils.svg
  [8]: https://david-dm.org/xgbuils/math.interval-utils
