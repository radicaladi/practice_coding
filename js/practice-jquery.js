//mini - exercise:
// using jquery:
// 1. give all table cells a black border
$('th, tr, td').css("border", "1px solid black");

// 2. remove all bullet points from the unordered list items
$('li').css("list-style", "none");

// 3. change the font family of the entire page to luxurious roman
$('body').css("font-family", "luxurious roman, cursive");

//    ---> <link rel=“preconnect” href=“https://fonts.googleapis.com”>
//         <link rel=“preconnect” href=“https://fonts.gstatic.com” crossorigin>
//         <link href=“https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Questrial&display=swap” rel=“stylesheet”>
//    --->font-family: ‘Abril Fatface’, cursive;
//        font-family: ‘Questrial’, sans-serif;

// 4. give each section a unique id ✅
// 5. using the unique id’s give each section a different background color
$("header").css("background-color", "#cb997e");
$("#salesPitch").css("background-color", "#ddbea9");
$("#content").css("background-color", "#ffe8d6");
$("#closeView").css("background-color", "#b7b7a4");
$("#bottom").css("background-color", "#b7b7a4");

// 6. give 3 elements the same class name of “highlight” ✅
// 7. give each of those 3 elements a bright yellow background
$(".highlight").css("background-color", "#fbf8cc");

// 8. BONUS: when you click on the image, make the image larger than what it currently is
$("#floofers").hover(makeBigger, revert);

function makeBigger() {
    $(this).css("transform", "scale(2, 2)");
    $(this).css("padding-left", "150px");
    $(this).css("transition", "1s");
}
function revert() {
    $(this).css("transform", "");
    $(this).css("padding-left", "");
    $(this).css("transition", "1s");
}
