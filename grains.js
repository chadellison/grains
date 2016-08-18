"use strict"

var BigInt = require('./big-integer.js');

class Grains {
  square(count) {
    let grains = count.toString()
    if (count > 2) {
      grains = BigInt(2).pow(count - 1).toString()
    }
    return grains
  }

  total() {
    return BigInt(2).pow(64).prev().toString()
  }
}

module.exports = Grains
