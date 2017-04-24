var ndarray = require('ndarray')
var ndforeach = require('../foreach')
var test = require('tape')

test('ndarray-foreach', function (t) {
  var data = ndarray([
    0, 1, 2,
    3, 4, 5,
    6, 7, 8
  ], [3, 3])

  ndforeach(data, function (i, a) {
    t.equals(3 * i[0] + i[1], a, i + '=' + a)
  })

  t.end()
})
