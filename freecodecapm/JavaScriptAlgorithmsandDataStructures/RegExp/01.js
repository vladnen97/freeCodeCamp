/*Using the Test Method*/

let myString = "Hello, World!";
let myRegex = /Hello/;
let resultA = myRegex.test(myString); // Change this line

/* Match Literal Strings*/

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let resultB = waldoRegex.test(waldoIsHiding);

/*Match a Literal String with Different Possibilities*/

let petString = "James has a pet cat.";
let petRegex = /cat| dog| bird| fish/; // Change this line
let resultC = petRegex.test(petString);

/**/

