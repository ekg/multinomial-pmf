var test = require('tape')
var multpmf = require('./')
var logmultpmf = require('./').log

test('multinomial probability mass function test', function (t) {

  t.plan(4)
  t.equals(multpmf([0.5, 0.5], [2, 3]), 0.3125)
  t.equals(multpmf([0.5, 0.5, 0.25, 0.25], [2, 3, 10, 1]), 0.003579854965209961)
  t.ok((Math.exp(logmultpmf([0.5, 0.5], [2, 3]))
        - multpmf([0.5, 0.5], [2, 3]))
       < 1e-14)
  t.ok((Math.exp(logmultpmf([0.5, 0.5, 0.25, 0.25], [2, 3, 10, 1]))
        - multpmf([0.5, 0.5, 0.25, 0.25], [2, 3, 10, 1]))
       < 1e-14)

})
