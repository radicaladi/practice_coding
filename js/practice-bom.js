// BOM – BROWSER OBJECT MODEL Intro


// let sirius = { // <-- sirius is the object.
//     numStudents: 30,
//     classroom: "remote",
// //    methods – are functions stored inside an object; method follows,
//
//     takeAttendeance: function () {
//         prompt("how many students?");
//         return this.numStudents
//     },
//     prompt: function (){
//         //    returns prompt window;
//     }
// }
//
// sirius.takeAttendeance(); // <--- this is how you would call that method; need to call object with its method.


// Js review...

//variable
var favoriteNumber = 12; //globally scoped

//this is a function...
function add (num1) {
    var num2 = 10; //not globally scoped
    return num1 + num2;
}

console.log("shoulder return 22...")
console.log(add(favoriteNumber));

// anything globally scoped in js will be added as a property to the window object (BOM).
// "let" will still access the property outside of a function, however let inside of a function cannot be accessed anywhere but the function.

//  –BOM METHODS-

        //set interval
'use strict';

// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop
//BE AWARE OF INFINITE LOOPS

// var count = 0; // starting point
// var max = 10; // our ceiling
// var interval = 1000; // interval time in milliseconds
//
//
// var intervalId = setInterval(function () {
//     if (count >= max) {
//         clearInterval(intervalId); // stops interval
//         console.log('All done');
//     } else {
//         count++;
//         console.log('Repeating this line ' + count);
//     }
// }, interval);

        //set timeout

'use strict';

var delay = 5000; // delay time in milliseconds

var timeoutId = setTimeout(function () {
    alert('Here is a delayed hello!');
}, delay);

// to cancel the timeout, you can call
// clearTimeout(timeoutId);
// prior to the delay expiring