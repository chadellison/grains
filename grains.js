"use strict"

var BigInt = require('./big-integer.js');

class Grains {
  square(count) {
    return this.countGrains(count).toString()
  }
  countGrains(count) {
    let grains = count
    if (count > 2) {
      grains = BigInt(2).pow(count - 1)
    }
    return grains
  }

  total() {
    return this.countGrains(65).prev().toString()
  }
}

module.exports = Grains
