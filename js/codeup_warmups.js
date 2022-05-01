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
console.log("//////////")

// -- 25 january warmup

function findDuplicateNums (string) {
    let strNumArr = string.split('');
    let dupArr = {};
    console.log("your array is as follows...")
    console.log(strNumArr);
    let resultToReturn;
    for (let i = 0; i <= strNumArr.length - 1; i++) {
        if (dupArr[strNumArr[i]]) {
            resultToReturn = true;
            break;
        }
        dupArr[strNumArr[i]] = true;
    }
    if (resultToReturn) {
        console.log("Sorting dupes!")
        console.log(dupArr)
    }
    else {
        console.log("No dupes here!")
    }
}

findDuplicateNums("42992338111134");
console.log("//////////");
findDuplicateNums("BQAAIPPPPFFA");
console.log("//////////")

// -- 8 february warmup

//write a function that removes duplicates from the array

let numArr = [2,3,5,8,3,1,2,6,3,2,7,8,2,4,7]

let noDupes = numArr.reduce((previousValue, currentValue) => {
    if (previousValue.includes(currentValue)){
        return previousValue;
    }
    return [...previousValue, currentValue]
    // return previousValue.includes(currentValue) ? previousValue : [...previousValue, currentValue];
}, []);

console.log(numArr);
console.log(noDupes);

// -- 9 february warmup

// write a function that takes a string as argument and returns the number of vowels contained in that string.

let vowels = "aeiouAEIOU"; // set vowels parameters
let count = 0; // set the counter

function vowFilter (input) {
    for (let i = 0; i < input.length; i++) { // for loop through each character with input.length
        if (vowels.indexOf(input[i]) !== -1) { // if vowels has an index of input at i...
            count+= 1; // ...count 1.
        }
    }
    return count; // return the count after loop is complete
}

console.log(`your word has ` + vowFilter("Onomatopoeia") + ` vowels`);
console.log('//////////')

// -- 10 february warmup

// write a function that counts the number of duplicate characters

function countDupes (string) { // taking a string input
    let arr = string.split(""); // turns string into array
    console.log(arr)
    let counts = {}; // keeps tally of repeated chars
    arr.forEach((x) => { // use foreach to loop through array
        counts[x] = (counts[x] || 0) + 1; // adds to counts-object each value that is looped through and adds 1 to it every additional time.
    })
    console.log(counts);
}

countDupes("eventuality")

// -- 16 february '22 warmup

// Write a function that places all negative integers at the end of an array

let arrayToSort = [-2,5,8,-3,3,5,-9,6]

arrayToSort.sort(function (a, b) {
    return a - b;
}).reverse()

console.log(arrayToSort)
console.log("//////////")

// Write a function to determine if a string input is palindrome

function checkPalindrome(string) {
    const strArr = string.split('');
    const rvsdArr = strArr.reverse();
    const rvsdStr = rvsdArr.join('');
    if (string.toLowerCase() == rvsdStr.toLowerCase()) {
        console.log("is a palindrome!");
    } else { console.log("is not a palindrome!")}
}

checkPalindrome("bob")

// Given two temperatures , return true if one is less than 0 and the other is greater than 100

function icyHot(temp1, temp2) {
    return temp1 < 0 && temp2 > 100 || temp1 > 100 && temp2 < 0;
}

console.log(icyHot(-2, 109))