"use strict";

function Accumulator(startingValue = 0) {
  this.value = startingValue;

  this.read = function(addValue = 0) {
    this.value += addValue;
    return this;
  } 

  this.getValue = function() {
    console.log(this.value);
    return this;
  }
}

let accumulator = new Accumulator(3);

accumulator.read(2).read(4).getValue();