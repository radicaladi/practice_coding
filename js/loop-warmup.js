//Make a program that filters through this array: ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"]
// and returns a new array that contains only those whose name have only 4 letters in them.

var names = ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"];

// var vierBuchstabe = names.filter(names => names.length < 5 && names.length > 3) // using arrow function expression

var vierBuchstabe = names.filter(function (names) {       //using traditional function expression
    return names.length < 5 && names.length > 3;
})

console.log(vierBuchstabe);

///////////////////////////////////// Class Warmup – 20 Jan 2022

//write a function that accepts a string and checks whether each string is upperCase or lowerCase and returns "letter  [insert letter] is uppercase/lowercase", accordingly.  Bonus: return "is not a character" if it's not a letter
//
// input example: "bJIENsdfRAIRVIrsRFAijgRar"

function determineCharCase(string) {
    for (let i = 0; i <= string.length - 1; i++) {
        let character = string.charAt(i);

        if (character === character.toUpperCase()) {
            console.log("the character, " + string.charAt(i) + " is uppercase.");
        }
        if (character === character.toLowerCase()) {
            console.log("the character, " + string.charAt(i) + " is lowercase.");
        }

    }
}

console.log("//////////")
determineCharCase("bJIENsdfRAIRVIrsRFAijgRar");
