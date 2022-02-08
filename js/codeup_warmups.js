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