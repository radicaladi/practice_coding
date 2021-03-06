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
console.log("//////////")

// Given two temperatures , return true if one is less than 0 and the other is greater than 100

function icyHot(temp1, temp2) {
    return temp1 < 0 && temp2 > 100 || temp1 > 100 && temp2 < 0;
}

console.log(icyHot(-2, 109))
console.log("//////////")

//Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back,
// so "kitten" yields "kikittenki".
// If the string length is less than 2, use whatever chars are there

function front22(string) {
    let take = 2;
    if (take > string.length) {
        take = string.length;
    }
    let front = string.substring(0, take);
    return front + string + front;
}

console.log(front22("kitten"))
console.log("//////////")

//Given three int values, a b c, return the largest.

function intMax (a, b, c) {
    return Math.max(a, b, c);
}

console.log(intMax(7, 8, 5));
console.log("//////////")

//Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie.
// Note that Math.abs(n) returns the absolute value of a number.

function close10 (num1, num2) {
    if (Math.abs(num1  - 10) < Math.abs(num2  - 10)) { return num1; }
    else if (Math.abs(num1 -10) === Math.abs(num2 -10) ){ return 0; }
    else return num2;
}

console.log(close10(3, 1))
console.log("//////////")

//Given 2 int values, return true if they are both in the range 30..40 inclusive,
// or they are both in the range 40..50 inclusive.

function in3050 (a, b) {
    if (a >= 30 && a <= 40 && b >= 30 && b <= 40) { return true; }
    if (a >= 40 && a <= 50 && b >= 40 && b <= 50) { return true; }
    return false;
}

console.log(in3050(35, 32))
console.log(in3050(12, 25))
console.log("//////////")

// Given a string, return a new string where the last 3 chars are now in upper case.
// If the string has less than 3 chars, uppercase whatever is there.
// Note that str.toUpperCase() returns the uppercase version of a string.

function endUp (string) {
    if (string.length <= 3) {return string.toUpperCase()};
    const cut = string.length - 3;
    const front = string.substring(0, cut);
    const back = string.substring(cut);
    return front + back.toUpperCase();
}

console.log(endUp("california"))
console.log("//////////")

//Given a non-empty string and an int N, return the string made starting with char 0, and then every Nth char of the string.
// So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.

function everyNth (string, number) {
    let result = "";
    for (let i = 0; i < string.length; i = i + number) {
        result = result + string.charAt(i);
    }
    return result;
}

console.log(everyNth("supercalifragilistic", 3))
console.log("//////////")

// Given an array of numbers, we'll say that a triple is a value appearing 3 times in a row in the array.
// Return true if the array does not contain any triples.

function noTriples(arr) {
    for (let i = 0; i < (arr.length-2); i++) {
        let first = arr[i];
        if (arr[i+1] === first && arr[i+2]=== first) return false;
    }
    return true;
}

console.log(noTriples(numArr))
console.log("//////////")

//Given an array of ints, return the number of 9's in the array.
let numArr2 = [2,3,5,8,3,1,2,9,3,2,7,8,2,4,7]


function countNines(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 9) { count++; }
    }
    return count;
}

console.log(countNines(numArr))
console.log(countNines(numArr2))
console.log("//////////")

// Given a string, return a string made of the first 2 chars (if present),
// however include first char only if it is 'o' and include the second only if it is 'z', so "ozymandias" yields "oz".

function startOz(string) {
    let result = "";

    if (string.length >= 1 && string.charAt(0)==='o') {
        result = result + string.charAt(0);
    }

    if (string.length >= 2 && string.charAt(1)==='z') {
        result = result + string.charAt(1);
    }

    return result;
}

console.log(startOz("ozymandias"))
console.log("//////////")

// Given a string, return a new string where the first and last chars have been exchanged.

function frontBack(string) {
    const exchange = string.split(" ").map(word => {
        const length = word.length;
        if (length > 1) {
            word = word[length-1] + word.substring(1, length-1) + word[0];
        }
        return word;
    }).join(" ")
    console.log(exchange)
}

frontBack("Until next time Honey");
console.log("//////////")

// Given a string, we'll say that the front is the first 3 chars of the string.
// If the string length is less than 3, the front is whatever is there.
// Return a new string which is 3 copies of the front.

function front3(string) {
    let front;
    if (string.length >- 3) {
        front = string.substring(0, 3);
    }
    else {
        front = string;
    }
    return front + front + front;
}

console.log(front3("hibernation"));
console.log(front3("abc"));
console.log("//////////")

// balanced bracket algorithm with JavaScript
// balanced bracket structures are as follows: (), [](), {()}
// this is not balanced  [{]}

function balancedBrackets(expression) {
    let stack = [];

    for (let i = 0; i <= expression.length; i++) {
        let x = expression[i];
        if (x === '{' || x === '(' || x === '[') {
            stack.push(x);
        }
        if (stack.length === 0)
            return "is not balanced";

        let check;
        switch (x) {
            case ')':
                check = stack.pop();
                if (check === '{' || check === '[')
                    return false;
                break;
            case '}':
                check = stack.pop();
                if (check === '(' || check === '[')
                    return false;
                break;
            case ']':
                check = stack.pop();
                if (check === '{' || check === '(')
                    return false;
                break;
        }
    }
    return (stack.length === 0);
}

let expression = "({[}])"
    if (balancedBrackets(expression)) {
        console.log("is balanced")}
    else console.log("is not balanced");
console.log("//////////")

// Given a string, return true if the string starts with "hi" and false otherwise.

function startHi(string) {
    if (string.length < 2) {
        return false;
    }
    let firstTwo = string.substring(0, 2);
    return firstTwo.toLowerCase() === "hi";
}

console.log(startHi("Hiatchi"));
console.log(startHi("Itachi"))
console.log("//////////")

// Given a string, take the last char and return a new string with the last char added at the front and back,
// so "cat" yields "tcatt".
// The original string will be length 1 or more.

function backAround(string) {
    let end = string.charAt(string.length-1);
    return end + string + end;
}

console.log(backAround("luke"));
console.log("//////////")

// Return true if the given non-negative number is a multiple of 3 or a multiple of 5. Use the % "mod" operator

function or35 (n) {
    return n > 0 && n % 3 === 0 || n % 5 === 0;
}

console.log(or35(70));
console.log(or35(1));
console.log("//////////");

// Given 2 int values, return true if either of them is in the range 10..20 inclusive.

function in1020 (x, y) {
    return (x >= 10 && x <= 20) || (y >= 10 && y<= 20);
}

console.log(in1020(8, 99));
console.log(in1020(12, 15));
console.log("//////////");

// Return true if the given string begins with "mix", except the 'm' can be anything, so "pix", "9ix" .. all count.

function mixStart(str) {
    if (str.length < 3) return false;
    let pair = str.substring(1,3);
    if (pair === "ix") return true;
}

console.log(mixStart("tix"));
console.log("//////////");

// Return true if the given string contains between 1 and 3 'e' chars.

function stringE(string) {
    let counter = 0;

    for ( let i = 0; i < string.length; i++) {
        if(string.charAt(i) === "e") counter++;
    }
    return (counter >= 1 && counter <= 3)
}

console.log(stringE("elements"));
console.log(stringE("peacekeeper"))
console.log("//////////");
