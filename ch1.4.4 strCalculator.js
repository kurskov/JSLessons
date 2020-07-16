"use strict";

let calculator = {
  read() {
    this.a = 245;
    this.b = 491;
  },
  sum() {
    console.log( this.a + this.b );
  },
  mul() {
    console.log( this.a * this.b );
  }
};

calculator.read();
calculator.sum();
calculator.mul();