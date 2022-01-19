"use strict";

document.getElementById("heading") //DOM method


//JQuery methods as follows...
let myEL = $('#p-one'); //this is equivalent of getting document by ID.
console.log(myEL);

let header = $('#heading'); // same as above.
console.log(header);

let valHeading = header.text(); //returns content of whatever you assign it to.
console.log(valHeading);

console.log(header.html()); //returns the content of whatever you assign it to but from the html.

//adding class to 'border' to p tag...
// $('#p-one').addClass('border');

// ADDING A BORDER TO HEADING IF USER IS LOGGED IN

//user object as follows,
let user1 = {
    name: "Adi",
    isLoggedIn: true,
    age: 31,
}

//check the status of the user...
let loginStatus = user1.isLoggedIn;

//if user is logged in the header will get a red border...
if(loginStatus === true){
    $('#heading').addClass('border');
}