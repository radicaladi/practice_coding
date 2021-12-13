/**FUNCTION DRILLS
 */

/** Functions using conditionals but not loops or arrays:
 */

//Make a function named isOdd(number)

function isOdd(number){
    if (number % 3 === 0){
        return number + " is odd."
    }
}

console.log(isOdd(9));

//Make a function named isEven(number)

function isEven(number){
    if (number % 2 === 0){
        return number + " is even."
    }
}

console.log(isEven(8));

//Make a function named identity(input) that returns the input exactly as provided.

function identity(input) {
    return input;
}

console.log(identity("Bourne Identity"));

//Make a function named isFive(input)

function isFive(input) {
    if (input === 5) {
        return "Spot on."
    }
    else if (input !== 5) {
        return "Swing and a miss.";
    }
}

console.log(isFive(5));

//Make a function named addFive(input) that adds five to some input.

function addFive(input) {
    return input + 5;
}

console.log(addFive(5));

//Make a function named isMultipleOfFive(input)

function isMultipleOfFive(input) {
    if (input % 5 === 0) {
        return input + " is a multiple of five";
    }
}

console.log(isMultipleOfFive(25));

//Make a function named isThree(input)

function isThree(input) {
    if (input === 3){
        return input + " is three.";
    }
    else if (input !== 3) {
        return input + " is not three.";
    }
}

console.log(isThree(6));

//Make a function named isMultipleOfThree(input)

function isMultipleOfThree(input){
    if (input % 3 === 0) {
        return input + " is a multiple of three.";
    } else
        return input + " is not a multiple of three."
}

console.log(isMultipleOfThree(11));

//Make a function named isMultipleOfThreeAndFive(input)

function isMultipleOfThreeAndFive(input) {
    if (input % 3 === 0 && input % 5 === 0){
        return input + " is a multiple of three and five."
    }
}

console.log(isMultipleOfThreeAndFive(15));

//Make a function named isTrue(boolean)

function isTrue(boolean){
    return true;
}

console.log(isTrue(100));

//Make a function named isFalse(boolean)

function isFalse(boolean){
    return false;
}

console.log(isFalse(0));

//Make a function named isTruthy(input), remember that values other than true will behave like true

function isTruthy(input){
    if (input === false){
        return true;
    } else
        return true;
}

console.log(isTruthy(NaN));

//Make a function named isFalsy(input), remember that values other than false behave like false

function isFalsey(input){
    if (input === true){
        return false;
    } else
        return true;
}

console.log(isFalsey(NaN));

//Make a function named isVowel(letter)

function isVowel(letter) {
    var result;
    result = letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U";

    return result;
}

console.log(isVowel('A'));;

//Make a function named isConsonant(letter)

function isConsonant(letter) {
        return !isVowel(letter);
    }

console.log(isConsonant('A'));

//Make a function named isCapital(letter)

function isCapital(letter){
    if (letter == letter.toUpperCase()) {
        return "letter is capital";
    } else
        return "not a capital";
}

console.log(isCapital('a'));

//Make a function named isLowerCase(letter)

function isLowerCase(letter) {
    if (letter == letter.toLowerCase()) {
        return "letter is lower case";
    } else
        return "is not lower case";
}

console.log(isLowerCase('B'))

//Make a function named hasLowerCase(string) that returns if a string has any lower cased letter

function hasLowerCase(str) {
    return str == str.toLowerCase() && str != str.toUpperCase();
}

console.log(hasLowerCase('andromeda'));

//Make a function named isSpace(letter) that returns if a character is a space character

function isSpace(letter) {
    return letter === ' ';
}

console.log(isSpace(' '));

//Make a function named isZero(number)

function isZero(number) {
    if (number === 0) {
        return true;
    } else
        return false;
}

console.log(isZero(1));

//Make a function named notZero(input) that returns true if the input is not zero

function notZero(number) {
    if (number !== 0) {
        return true;
    } else
        return false;
}

console.log(notZero(3));

//Write a function named lowerCase(string)

function lowerCase(string) {
    return string.toLowerCase();
}

console.log(lowerCase("MARKANNEN"));

//Write a function named double(n) that returns a number times two

function double(n) {
    return n * 2;
}

console.log(double(3));

//Write a function named triple(n) that returns a number times 3

function triple(n) {
    return n * 3;
}

console.log(triple(4));

//Write a function named quadruple(n) that returns a number times 4

function quadruple(n) {
    return n * 4;
}

console.log(quadruple(5));

//Write a function named half(n) that returns 1/2 of the provided input

function half(n) {
    return n / 2;
}

console.log(half(20));

//Write a function named subtract(a, b) that returns a minus b

function subtract(a,b) {
    return a - b;
}

console.log(subtract(5, 4));

//Write a function named multiply(a, b) that returns the product of a times b

function multiply(a, b) {
    return a * b;
}

console.log(multiply(1, 10));

//Write a function named divide(a, b) that returns a divided by ~b~

function divide(a, b) {
    return a / b;
}

console.log(divide(10, 5));

//Write a function named remainder(a, b) that returns the remainder after dividing a by b

function remainder(a, b) {
    return a % b;
}

console.log(remainder(20, 2));

//Make a function named modulo(a, b) that returns the remainder after dividing a by b

function modulo(a, b) {
    return a % b;
}

console.log(modulo(20, 2));

//Write a function named cube(n) that returns n * n * n
//Write a function named squareRoot(n) that returns the square root of the input
//Write a function named cubeRoot(n) that returns the cube root of the input
//Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
//Write a function named degreesToRadians(number)
//Write a function named radiansToDegrees(number)
//Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
//Make a function named trim(string) that removes empty spaces before and after the input.
//Make a function named areEqual(input1, input2) that returns if both inputs have the same value
//Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
//Make a function named not(input) returns the input with a flipped boolean
//Make a function named notNot(input) that the negation of the negation of the input.
//Make a function named and(predicate1, predicate2) that returns the logical operation of AND
//Make a function named or(predicate1, predicate2) that returns the logical operation of OR
//Write a function called reverseString(string) that reverses a string
//Make a function named absoluteValue(number) that returns the absolute value of a number.
//Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.
