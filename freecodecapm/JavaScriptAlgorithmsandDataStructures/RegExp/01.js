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

/*Ignore Case While Matching*/

let myStringB = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let resultD = fccRegex.test(myStringB);

/*EXtract matched string */
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let resultD = extractStr.match(codingRegex); // Change this line

/*Find More Than the First Match*/

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let resultE = twinkleStar.match(starRegex); // Change this line

/*Match Anything with Wildcard Period*/

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let resultE = unRegex.test(exampleStr);

/*Match Single Character with Multiple Possibilities*/
let quoteSampleA = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let resultF = quoteSampleA.match(vowelRegex); // Change this line

/*Match Letters of the Alphabet*/

let quoteSampleB = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let resultG = quoteSampleB.match(alphabetRegex); // Change this line

/*Match Numbers and Letters of the Alphabet*/



