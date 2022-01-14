//Make a program that filters through this array: ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"]
// and returns a new array that contains only those whose name have only 4 letters in them.

var names = ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"];

// var vierBuchstabe = names.filter(names => names.length < 5 && names.length > 3) // using arrow function expression

var vierBuchstabe = names.filter(function (names) {       //using traditional function expression
    return names.length < 5 && names.length > 3;
})

console.log(vierBuchstabe);