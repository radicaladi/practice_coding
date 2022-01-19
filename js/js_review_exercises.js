// ********** CONDITIONAL LOGIC AND FUNCTIONS

// Write a function that takes in a number and returns triple the value of the passed number. Assume only number inputs.

function tripleNumber (number) {
    return number * 3;
}

console.log("should return 9...");
console.log(tripleNumber(3));
console.log("//////////");

// Modify the above function to work with numeric strings as well.

function newTripleNumber (number) {
    return parseInt(tripleNumber(number));
}

console.log("should return 9...")
console.log(newTripleNumber("3"));
console.log("//////////");

// Modify the above function to return a string output of 'not a number' if the input is not a number or numeric string.

function newNewTripleNumber (number) {
    if (isNaN(number)) {
        return "not a number";
    }
    return newTripleNumber(number);
}

console.log("should return not a number...");
console.log(newNewTripleNumber("three"));
console.log("but should return 9...")
console.log(newNewTripleNumber("3"));
console.log("//////////");

// Write a function that takes in a number and string and returns the string 'matches length' if the passed number is the length of the passed string and returns 'no length match' otherwise.

function matchLengths (number, string) {
    if (number === string.length) {
        return "matches length"
    }
    return "no length match."
}

console.log("should return matches length...");
console.log(matchLengths(3, "New"));
console.log("but should return no length match...");
console.log(matchLengths(3, "long"));
console.log("//////////");

// (CHALLENGE) Write a function that takes in a day of the week as a string and returns the number that matches the day of the week. 'Sunday' should return 1 and 'Saturday' should return 7.

let days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
function returnDay(day) {
    let dayValue = day.toLowerCase(); //makes any input lowercase and thus case-insensitive.
    return days.indexOf(dayValue) + 1;
} // function will use array 'days' and match the 'day' input to the indexOf the day provided plus 1.

console.log("should be 4...");
console.log(returnDay('Wednesday'));
console.log("should be 6...");
console.log(returnDay('friday'));
console.log("should be 0..."); //is 0 because there will be no index for any input not in the array.
console.log(returnDay("someday"));
console.log("//////////");

// ========== + Loops

// Write a function that takes in a string input and logs each character of the string separately

function separate (string) {
    for (let i = 0; i < string.length; i++) {
        console.log(string[i]);
    }
}

separate("string");
console.log("//////////")

// Write a function that takes in a string and logs it 133 times

function repeatIt (string) {
    return string.repeat(133);
}

console.log(repeatIt("liverpool"));
console.log("//////////")

// Write a function that takes in a string input and logs the first character, then the first two characters, etc., until the full string is logged.

function breadCrumbs (string) {

}

// Example Input: 'Codeup'
//
// Example Output:
//
// "C"
// "Co"
// "Cod"
// "Code"
// "Codeu"
// "Codeup"

// (CHALLENGE) Write a function that takes in two string inputs and for each letter in the first string, logs how many times that given letter appears in the second string. It should be case-insensitive. If a letter appears more than once in the first string, the output should simply log the same message as many times as it appears in the first string.

// Example Inputs: "Codeup", "Coding Challenges"
//
// Example Output:
//
//     'C' appears in 'Coding Challenges' 2 time(s)
// 'o' appears in 'Coding Challenges' 1 time(s)
// 'd' appears in 'Coding Challenges' 1 time(s)
// 'e' appears in 'Coding Challenges' 2 time(s)
// 'u' appears in 'Coding Challenges' 0 time(s)
// 'p' appears in 'Coding Challenges' 0 time(s)


// ========== + Arrays

// Write a function that takes in two inputs and returns an array with those two inputs

function makeArray (input1, input2) {
    let array = [];
    array.push(input1, input2);
    console.log(array);
}

makeArray("planet", "moon");
console.log("//////////");

// Write a function that takes in and array and another input and returns true if the value of the second input is an element in the first input array

let planets = ['venus', 'earth', 'mars'];

function matchPlanets(planet) {
    for(let i = 0; i < planets.length; i++) {
        if (planet === planets[i]) {
            return true;
        }
    }
    return false;
}

console.log("should return true...");
console.log(matchPlanets("mars"));
console.log("should return false...");
console.log(matchPlanets("pluto"));
console.log("//////////");

// Write a function that takes in an array of numbers and returns the lowest number. Assume only number element values and an array of at least two numbers.

let numbers = [34, 89, 67, 22, 16, 100]

function returnLowest (array) {
    return Math.min.apply(Math, array);
}

console.log("should return 16...")
console.log(returnLowest(numbers));
console.log("//////////")

// Write a function that takes in an array of numbers and returns the product of the lowest and highest number. Assume only number element values and an array of at least two numbers.

function productNumbers (array) {
    return Math.min.apply(Math, array) * Math.max.apply(Math, array);
}

console.log("should return 1600");
console.log(productNumbers(numbers));
console.log('//////////')

// Write a function that takes in an array of numbers and returns the sum of the lowest two numbers. Assume only number element values and an array of at least two numbers.

// Write a function that takes in an array of strings and returns the first two words as a string concatenated together with a dash. Assume at least three string elements in the passed array.

// Example Input: ['cat', 'dog', 'fish']
// Example Output: 'cat-dog'

// (CHALLENGE) Write a function that takes in an array of strings and returns the array of strings sorted from shortest to longest string


// ========== + Objects

// Write a function that takes in an object and returns the object with an added property called 'extra' and a value of 'extra value'

let subaru = {model: "outback", cylinder: '6', fourWheel: true}

function extraObjects (object) {
    return object.extra = 'extra value';
}

console.log(extraObjects(subaru));
console.log(subaru);
console.log("//////////");


// Assume for the next questions, this can be used as the array of user objects:

/*
  var users [
    {
      name: 'Justin',
      occupation: 'Web Developer',
      averageAnnualPizzasOrdered: 22
    },
    {
      name: 'Cathy',
      occupation: 'Web Developer',
      averageAnnualPizzasOrdered: 15
    },
    {
      name: 'Fred',
      occupation: 'Data Engineer',
      averageAnnualPizzasOrdered: 35
    },
    {
      name: 'Mary',
      occupation: 'DBA',
      averageAnnualPizzasOrdered: 10
    }
  ]
*/

// Write a function that takes in an array of user objects and returns the user object of the user with the longest name

// Write a function that takes in an array of user objects and returns the 'Web Developer' with highest averageAnnualPizzasOrdered value

// Write a function that takes in an array of user objects and returns the same array of user objects without the 'averageAnnualPizzasOrdered' properties

// (CHALLENGE) Write a function that takes in an array of user objects, increases the value of averageAnnualPizzasOrdered by 5 for each user and returns the average annual pizzas ordered across all users, after this adjustment.