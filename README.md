# bitcoin-fs

multinomial probability mass function

```
npm install multinomial-pmf
```

## Usage

``` js
var multpmf = require('multinomial-pmf')
multpmf([0.5,0.5], [1,1]) // coin toss: HT
// 0.5
multpmf([0.5,0.5], [0,3]) // coin toss: TTT
// 0.125
var diceProbs = [1,1,1,1,1,1].map(function(x) { return x/6 })
multpmf(diceProbs, [1,2,0,3,0,1]) // fair six-sided die
// 0.0015003429355281205
```

## What is this?

This module calculates the discrete sampling probability of a multiset of a given size from an underlying source multinomial distribution. In other words, it implements the [multinomial probability mass function](https://en.wikipedia.org/wiki/Multinomial_distribution#Probability_mass_function).

It helps us answer questions like:

- If I have 5 red, 3 blue, and 1 yellow ball in a bag, what's the probability that I draw 3 blue and 1 red (with replacement, in other words, the balls go back in the back after I've pulled them)?

``` js
var bag   = [5,3,1]
var pulls = [1,3,0]

function countsToProbs(counts) {
    var sum = counts.reduce(function(x,y) { return x+y })
    return counts.map(function(x) { return x/sum })
}

multpmf(countsToProbs(bag), pulls)
// 0.0823045267489712
```

The binomial distribution is a special case of the multinomial where the number of categories is 2.

## To do

- Work in log-space (suggests need for a log-space multinomial calculation)

## License

MIT
