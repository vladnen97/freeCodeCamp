/*Convert Celsius to Fahrenheit*/

function convertCtoF(celsius) {
    return (celsius * 9 / 5) + 32;
}

convertCtoF(30);

/*Reverse a String*/

let reverseString = (str) => str.split("").reverse().join("");
reverseString("hello");

/*Factorialize a Number*/

function factorialize(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorialize(num-1);
    }
}
factorialize(5);

/*Find the Longest Word in a String*/

let str = "The quick brown fox jumped over the lazy dog";
str = str.split(" ");
let longestWord = str.sort((a,b) => b.length - a.length);
console.log(longestWord[0].length);