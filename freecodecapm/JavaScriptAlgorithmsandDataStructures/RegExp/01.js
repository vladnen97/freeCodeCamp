/*Using the Test Method*/

let myStringA = "Hello, World!";
let myRegexAd = /Hello/;
let resultA = myRegexAd.test(myStringA); // Change this line

/* Match Literal Strings*/

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let resultB = waldoRegex.test(waldoIsHiding);

/*Match a Literal String with Different Possibilities*/

let petString = "James has a pet cat.";
let petRegex = /cat | dog | bird | fish/; // Change this line
let resultC = petRegex.test(petString);

/*Ignore Case While Matching*/

let myStringB = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let resultD = fccRegex.test(myStringB);

/*Extract matched string */
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let resultDA = extractStr.match(codingRegex); // Change this line

/*Find More Than the First Match*/

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let resultEA = twinkleStar.match(starRegex); // Change this line

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

let quoteSampleC = "Blueberry 3.141592653s are delicious.";
let myRegexA = /[h-s2-6]/gi; // Change this line
let resultH = quoteSampleC.match(myRegexA); // Change this line

/*Match Single Characters Not Specified*/

let quoteSampleD = "3 blind mice.";
let myRegexB = /[^0-9aeiou]/gi; // Change this line
let resultI = quoteSampleD.match(myRegexB); // Change this line

/*Match Characters that Occur One or More Times*/

let difficultSpelling = "Mississippi";
let myRegexC = /s+/gi; // Change this line
let resultJ = difficultSpelling.match(myRegexC);

/*Match Characters that Occur Zero or More Times*/
let chewieQuote = "Aaaaaaaaaaaaaaaaaargh";
let chewieRegex = /Aa*/;
let resultK = chewieQuote.match(chewieRegex);

/*Find Characters with Lazy Matching*/

let text = "<h1>Winter is coming</h1>";
let myRegexD = /<.*?>/;
let resultL = text.match(myRegexD);

/*Match Beginning string patterns */

let cabooseA = "The last car on a train is the caboose";
let firstRegex = /^the/i;
let resultM = firstRegex.test(cabooseA);

/*Match Ending String Patterns*/

let cabooseB = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let resultN = lastRegex.test(cabooseB);

/*Match All Letters and Numbers*/

let quoteSampleE = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi;
let resultO = quoteSampleE.match(alphabetRegexV2).length;

/*Match Everything But Letters and Numbers*/

let quoteSampleF = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi;
let resultP = quoteSampleF.match(nonAlphabetRegex).length;

/*Match All Numbers*/

let movieNameA = "2001: A Space Odyssey";
let numRegex = /\d/gi;
let resultQ = movieNameA.match(numRegex).length;

/*Match All Non-Numbers*/
let movieNameB = "2001: A Space Odyssey";
let noNumRegex = /\D/gi;
let resultR = movieNameB.match(noNumRegex).length;

/*Restrict Possible Usernames*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/gi;
let resultS = userCheck.test(username);

/*Match Whitespace*/

let sampleA = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let resultT = sampleA.match(countWhiteSpace);

/*Match Non-Whitespace Characters*/

let sampleB = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let resultU = sampleB.match(countNonWhiteSpace);

/*Specify Upper and Lower Number of Matches*/

let ohStr = "Ohhh no";
let ohRegex = /oh{3,6} no/gi;
let resultV = ohRegex.test(ohStr);

/*Specify Only the Lower Number of Matches*/

let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/gi;
let resultW = haRegex.test(haStr);

/*Specify Exact Number of Matches*/

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/g;
let resultX = timRegex.test(timStr);

/*Check for All or None*/

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let resultY = favRegex.test(favWord);

/*Positive and Negative Lookahead*/

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d\d\D*)/; // Change this line
let resultZ = pwRegex.test(sampleWord);

/*Check For Mixed Grouping of Characters*/

let myStringAz = "Eleanor Roosevelt";
let myRegexAa = /(Franklin D.|Eleanor) Roosevelt/; // Change this line
let resultAa = myRegexAa.test(myStringAz); // Change this line


/*Reuse Patterns Using Capture Groups*/

let repeatNum = "42 42 42";
let reRegex = /(\d+) \1 \1/; // Change this line
let resultAb = reRegex.test(repeatNum);








































