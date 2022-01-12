"use strict";

// A function to produce the fibonacci sequence up to the terms declared by the user.

function fibonacciSequence (terms) {
    const number = terms; // terms is the number of terms that will be expressde by the fibonacci sequence.
    let n1 = 0, n2 = 1, nextTerm; // variables that will determine the math output of the fibonacci sequence.
    console.log("fibonacci sequence: ");
    // using a for loop as the number of terms to cycle through is known and declared to the function.
    for (let i = 0; i <= number ; i++) {  //won't exceed the number of loops chosen by terms.
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        // fibonacci sequence is a + b returning c and adding b... so on and so forth. Starting at zero.
    }
}

fibonacciSequence(20);
//enter an amount of terms and the function will output the sequence that number of times

//DOM PRACTICE --- changing html content within tags using DOM

var weatherContent = document.getElementById("content");

weatherContent.innerHTML = "The weather is currently fair with a temperature of 8.38 celsius.";