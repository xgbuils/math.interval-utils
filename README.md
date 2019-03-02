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

Real interval can be represented with an pair of real numbers and two flags to indicate if these numbers are included or not in interval. This library defines the interval as an array of two objects with `value` and `limit`:

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

### areDisjoint(interval1, interval2)
Given `interval1` and `interval2`, it returns `true` or `false` if intervals are disjoint or not, respectively.

Example:
``` javascript
var areDisjoint = require('math.interval-utils').areDisjoint

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

// {1}
var interval3 = [
    {value: 1, limit: 0},
    {value: 1, limit: 0}
]

areDisjoint(interval1, interval2) // false
areDisjoint(interval2, interval3) // true
```

### areEqual(interval1, interval2)
Given `interval1` and `interval2`, it returns `true` or `false` if intervals are equal or not, respectively.

Example:
``` javascript
var areEqual = require('math.interval-utils').areEqual

// [1, 3)
var interval1 = [
    {value: 1, limit: 0},
    {value: 3, limit: -1}
]

// [1, 3)
var interval1 = [
    {value: 1, limit: 0},
    {value: 3, limit: -1}
]

// [1, 3]
var interval3 = [
    {value: 1, limit: 0},
    {value: 3, limit: 0}
]

areEqual(interval1, interval2) // true
areEqual(interval2, interval3) // false
```

### contains(interval1, interval2)
Given `interval1` and `interval2`, it returns `true` or `false` if `interval1` contains `interval2` or not, respectively.

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
contains(interval2, interval1) // false
```

### intersection(interval1, interval2)
Given `interval1` and `interval2`, it returns the intersection of intervals.

Example:
``` javascript
var intersection = require('math.interval-utils').intersection

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

// (3, 4)
var interval3 = [
    {value: 3, limit: 1},
    {value: 4, limit: -1}
]

intersection(interval1, interval2) // (1, 2)
intersection(interval2, interval3) // (3, 4)
intersection(interval1, interval3) // empty
```

### isEmpty(interval)
Given an `interval`, it returns `true` or `false` if `interval` [is empty](#empty-interval) or not, respectively.

Example:
``` javascript
var isEmpty = require('math.interval-utils').isEmpty

// [2, -2]
var interval1 = [
    {value: 2, limit: 0},
    {value: -2, limit: 0}
]

// (1, 1]
var interval2 = [
    {value: 1, limit: 1},
    {value: 1, limit: 0}
]

// [1, 1]
var interval3 = [
    {value: 1, limit: 0},
    {value: 1, limit: 0}
]

isEmpty(interval1) // true
isEmpty(interval2) // true
isEmpty(interval3) // false
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

var interval2 = [
    {value: -2, limit: 0}
]

var interval3 = [
    {value: 2, limit: 0},
    {value: Infinity, limit: -1}
]

isInterval(interval1) // true
isInterval(interval2) // false
isInterval(interval3) // true
```

### multiIntersection(listIntervals1, listIntervals2)
Given two sorted lists of disjoint intervals `listIntervals1` and `listIntervals2`, it returns a list of intervals that represent the intersection of these.

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

This method has better perfomance that recolect the intersections of each interval of each lists and intersects one by one.

### numToInterval(num)
Given a number as parameter, it returns an singleton interval that contains this number.

Example:
``` javascript
var numToInterval = require('math.interval-utils').numToInterval

// returns {5}
numToInterval(5) /* returns [
    {value: 5, limit: 0},
    {value: 5, limit: 0}
]*/
```

### parser(string)
Given a string that represents an interval, it returns the interval that means. It throws an error if string does not represents an interval.

Example:
``` javascript
const parser = require('math.interval-utils').parser

parser('(2, 3]') /* returns [
    {value: 2, limit: 1},
    {value: 3, limit: 0}
]*/

parser('{5}') /* returns [
    {value: 5, limit: 0},
    {value: 5, limit: 0}
]*/

parser('(2, 5(') // throws an error
```

### relativeComplement(interval1, interval2)
Given `interval1` and `interval2` parameters, it returns a list of intevals that represents the relative complement. (`interval1 / interval2`).

Example:
``` javascript
const intersection = require('math.interval-utils').intersection

// [1, 5)
const interval1 = [
    {value: 1, limit: 0},
    {value: 5, limit: -1}
]

// (2, 3)
const interval2 = [
    {value: 2, limit: 1},
    {value: 2, limit: -1}
]

// [4, 6]
const interval3 = [
    {value: 3, limit: 1},
    {value: 4, limit: -1}
]

// returns [1, 2] U [3, 5)
intersection(interval1, interval2) /* [[
  {value: 1, limit: 0},
  {value: 2, limit: 0}
], [
  {value: 3, limit: 0},
  {value: 5, limit: -1}
]] */

// returns [1, 4)
intersection(interval1, interval3) /* [[
  {value: 1, limit: 0},
  {value: 4, limit: -1}
]] */

// returns (2, 3)
intersection(interval2, interval3) /* [[
    {value: 2, limit: 1},
    {value: 2, limit: -1}
]] */
```

// returns empty
intersection(interval2, interval1) // []

### union(...intervals)
Given interval parameters, it returns a sorted list of disjoint intervals that represents the union of these intervals.

Example:
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