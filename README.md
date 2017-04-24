ndarray-foreach
===============
Loop over an ndarray, convenience method using cwise.

# Install

```
npm i ndarray-foreach
```

# Example
```javascript
var ndarray = require('ndarray')
var ndforeach = require('ndarray-foreach')

var data = ndarray([
  0, 1, 2,
  3, 4, 5,
  6, 7, 8
], [3, 3])

ndforeach(data, function (i, a) {
  console.log(i, a)
})
```

### Output:

```
[ 0, 0 ] 0
[ 0, 1 ] 1
[ 0, 2 ] 2
[ 1, 0 ] 3
[ 1, 1 ] 4
[ 1, 2 ] 5
[ 2, 0 ] 6
[ 2, 1 ] 7
[ 2, 2 ] 8
```

# API

### `require('ndarray-foreach')(array, f(index, v))`
Scans an ndarray.

* `array` is an ndarray
* `f(index, v)` is a visitor function

# License
(c) 2017 Mikola Lysenko, MIT License
