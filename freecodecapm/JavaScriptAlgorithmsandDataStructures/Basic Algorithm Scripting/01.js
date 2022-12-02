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

/*Repeat a String Repeat a String*/

function repeatStringNumTimes(str, num) {
    let newStr="";
    for (let i=0; i < num; i++) {
        newStr += str;
    }
    return newStr
}
// console.log(repeatStringNumTimes("abc", 3));

/*Truncate a String*/

function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + '...' : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("Peter Piper picked a peck of pickled peppers", 11);

/*Finders Keepers*/

function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
}

/*function findElement(arr, func) {
    return arr.find(func);
}*/

// console.log(findElement([1, 5, 3, 9], num => num % 2 === 0));

/*Boo who*/

function booWho(bool) {
    return typeof bool == "boolean";
}

// console.log(booWho(null));

/*Title Case a Sentence*/

function titleCase(str) {
    return str.toLowerCase().replace(/(?<!['".,-_])\b\w/g, a => a.toUpperCase());
}
console.log(titleCase("sHoRt AnD sToUt"));

/*Slice and Splice*/

function frankenSplice(arr1, arr2, n) {
    let mergedArr = arr2.slice();
    mergedArr.splice(n, 0, ...arr1);
    return mergedArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

/*Falsy Bouncer*/

function bouncer(arr) {
    return arr.filter(Boolean);
}


bouncer([7, "ate", "", false, 9]);



