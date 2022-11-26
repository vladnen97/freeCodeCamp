/*Write Reusable JavaScript with Functions*/

function reusableFunction () {
    console.log("Hi World");
}

reusableFunction();

/*Passing Values to Functions with Arguments*/

function functionWithArgs(sum1, sum2) {
    console.log(sum1 + sum2);
}

functionWithArgs(1, 2);
functionWithArgs(7, 9);

/*Return a Value from a Function with Return*/

function  timesFive(someValue) {
    return someValue*5;
}

timesFive(5);
timesFive(2);
timesFive(0);

/*Global Scope and Functions*/
let myGlobal = 10;

function fun1() {
    oopsGlobal = 5; // Assign 5 to oopsGlobal Here

}

function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun2();

/*Local Scope and Functions*/

function myLocalScope() {
    let myVar="test";
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// console.log('outside myLocalScope', myVar);

/*Global vs. Local Scope in Functions*/

const outerWear = "T-Shirt";

function myOutfit() {
    const outerWear = "sweater"
    return outerWear;
}
myOutfit();

/*Understanding Undefined Value returned from a Function*/
//sum must be 8
let sum = 0;

function addThree() {
    sum = sum + 3;
}
function addFive() {
    sum+=5;
}
addThree();
addFive();

/*Assignment with a Returned Value*/
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);

/*Stand in Line*/

function nextInLine(arr, item) {
    arr.push(item);
    item = arr.shift();
    return item;
}
let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/*Use Conditional Logic with If Statements*/

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

/*Comparison with the Equality Operator*/
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

/*Comparison with the Strict Equality Operator*/

// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);

/*Comparison with the Inequality Operator*/
function testNotEqual(val) {
    if (valA != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);

/*Accessing Nested Objects*/

const myStorageA = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
const gloveBoxContents = myStorageA.car.inside["glove box"];

/*Accessing Nested Arrays*/

const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
const secondTree = myPlants[1].list[1];

/*Albums*/

const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, value) {
    if (prop !== "tracks" &&  value !== "") {
        records[id][prop] = value;
    }
    else if (prop === "tracks" && !records[id].hasOwnProperty(prop)) {
        records[id][prop] = [value];
    }
    else if (prop === "tracks" && value !=="") {
        records[id][prop].push(value);
    }
    else if (value === "") {
        delete records[id][prop];
    }
    return records;
}
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")

/*Iterate with JavaScript While Loops*/

const myArrayI = [];
let i = 5;
while (i >= 0) {
    myArrayI.push(i);
    i--;
}

/*Iterate with JavaScript For Loops*/

// Setup
const myArrayJ = [];

// Only change code below this line

for (let i = 1; i < 6; i++) {
    myArrayJ.push(i);
}




























































