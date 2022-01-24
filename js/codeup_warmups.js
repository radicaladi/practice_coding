// -- 24 january warmup

// PROBLEM:  write a function that accepts a string of numbers and returns the sum of those numbers
// INPUT 1: "42958372" --- EXPECTED OUTPUT 1: 40
// INPUT 2: "917485"      --- EXPECTED OUTPUT 2: 34 (edited)

function sumOfStrings (string) {
    let numStrArr = string.split(''); //split to turn string into array, store it in variable.
    console.log(numStrArr); //log to check if occurs
    return numStrArr.reduce(function (total, num) { // .reduce(function()) results in keeping track of total sum each iteration.
        return parseInt(total) + parseInt(num); // parse turns numeric string into integers.
    });
}

console.log("should be 31...")
console.log(sumOfStrings("1298254")); //mine
console.log("should be 40...")
console.log(sumOfStrings("42958372")); //exercise given
console.log("should be 34...")
console.log(sumOfStrings("917485")); //exercise given