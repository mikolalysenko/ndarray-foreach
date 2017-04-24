var cwise = require('cwise')

module.exports = cwise({
  args: ['index', 'array', 'scalar'],
  body: function (i, a, f) {
    f(i, a)
  }
})
