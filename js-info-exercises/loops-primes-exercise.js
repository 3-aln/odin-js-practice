// Exercise: https://javascript.info/while-for#output-prime-numbers

"use strict";

function printPrimesTo(n) {
  let outputString = "";


  let dividendIsPrime;
  for (let dividend = 2; dividend <= n; dividend++) {
    dividendIsPrime = true;
    
    for (let divisor = 2; divisor < dividend; divisor++) {
      if (dividend % divisor === 0) {
        dividendIsPrime = false;
      }
    }

    if (dividendIsPrime) {
      outputString = outputString + dividend + ",";
    }
  }
  console.log(outputString.slice(0, -1));

  // More elegant solution
  
  outputString = "";
  
  nextPrime:
  for (let dividend = 2; dividend <= n; dividend++) {
    
    for (let divisor = 2; divisor < dividend; divisor++) {
      if (dividend % divisor == 0) continue nextPrime; // not a prime
    }

    outputString = outputString + dividend + ",";
  }

  console.log(outputString.slice(0, -1));
}

printPrimesTo(10);
