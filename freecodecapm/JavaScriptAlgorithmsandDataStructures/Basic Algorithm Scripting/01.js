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

/*Return Largest Numbers in Arrays*/

function largestOfFour(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i].sort((a, b) => b -a);
        newArr.push(arr[i][0]);
    }
    return newArr;
}
// console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
// console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

/*Confirm the Ending*/

function confirmEnding(str, target) {
    let regEx = new RegExp(`${target}$`, 'gmi');
    return regEx.test(str);
}
// console.log(confirmEnding("Bastian", "n"));





