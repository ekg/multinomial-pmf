var mult = require('multinomial')
var logmult = require('multinomial-ln')

function multinomialPMF(probs, obs) {
  var n=obs.length, p=1.0
  for(var i=0; i<n; ++i) {
    p *= Math.pow(probs[i], obs[i])
  }
  return p * mult(obs)
}

function logMultinomialPMF(probs, obs) {
  var n=obs.length, p=0
  for(var i=0; i<n; ++i) {
    p += Math.log(probs[i]) * obs[i]
  }
  return p + logmult(obs)
}

module.exports = multinomialPMF
module.exports.log = logMultinomialPMF
