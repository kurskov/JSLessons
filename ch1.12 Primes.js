"use strict";

let stopNumber = prompt("Finite number", 10);

nextPrime:
for (let i = 2; i <= stopNumber; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }

  alert( i );

}

