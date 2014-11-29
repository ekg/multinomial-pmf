var mult = require('multinomial')

function multinomialPMF(probs, obs) {
  var n=obs.length, m = 0, i, p=1.0
  for(i=0; i<n; ++i) {
    p *= Math.pow(probs[i], obs[i])
  }
  return p * mult(obs)
}

module.exports = multinomialPMF
