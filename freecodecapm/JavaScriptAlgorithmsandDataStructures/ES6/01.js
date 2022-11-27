const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

/*Use Destructuring Assignment to Assign Variables from Objects*/
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
const {today: highTodayA, tomorrow: highTomorrow}  = HIGH_TEMPERATURES;

/*Use Destructuring Assignment to Assign Variables from Nested Objects*/
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
const { today: { low: lowToday, high: highTodayB}} = LOCAL_FORECAST;

/*Use Destructuring Assignment to Assign Variables from Arrays*/
let a = 8, b = 6;
// Only change code below this line
[a, b] = [b,a];

/*Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements*/

function removeFirstTwo(list) {
    const [,, ...shorterList] = list;
    return shorterList;
}
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

/*Use Destructuring Assignment to Pass an Object as a Function's Parameters*/
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = ({max, min}) => console.log((max + min) / 2.0);
half(stats);

/*Create Strings using Template Literals*/

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    const failureItems = [];
    for (let i=0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return failureItems;
}

/*Write Concise Object Literal Declarations Using Object Property Shorthand*/

const createPerson = (name, age, gender) => {
    return {name, age, gender};
};

/*Write Concise Declarative Functions with ES6*/

const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};

/*Use class Syntax to Define a Constructor Function*/

class Vegetable {
    constructor(vegetable) {
        this.name = vegetable;
    }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

/*Use getters and setters to Control Access to an Object*/

// Only change code below this line
class Thermostat {
    constructor(temperatureInF) {
        this._temperatureInC = 5/9 * (temperatureInF - 32);
    }
    get temperature() {
        return this._temperatureInC;
    }
    set temperature(updateTempInC) {
        this._temperatureInC = updateTempInC;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

/*Create a Module Script*/

<html>
    <body>
        <!-- Only change code below this line -->
        <script type="module" src="index.js"></script>
        <!-- Only change code above this line -->
    </body>
</html>

/*Use export to Share a Code Block*/
const uppercaseString = (string) => {
    return string.toUpperCase();
}
const lowercaseString = (string) => {
    return string.toLowerCase()
}
export {uppercaseString, lowercaseString };

/*Reuse JavaScript Code Using import*/

import {uppercaseString, lowercaseString } from './string_functions.js';
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

/*Use * to Import Everything from a File*/

import * as stringFunctions from './string_functions.js';
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

/*Create an Export Fallback with export default*/
export default function subtract(x, y) {
    return x - y;
}

/*Import a Default Export*/

import subtract from './math_functions.js';
// Only change code above this line

subtract(7,4);

/*Create a JavaScript Promise*/

const makeServerRequestA = new Promise((resolve, reject) => {

});

/*Complete a Promise with resolve and reject*/

const makeServerRequestB = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if(responseFromServer) {
        resolve("We got the data"); // Change this line
    } else {
        reject("Data not received"); // Change this line
    }
});

/*Handle a Fulfilled Promise with "then"*/

const makeServerRequestC = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;

    if(responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});
makeServerRequestC.then(result => console.log(result));

/*Handle a Rejected Promise with catch*/

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;

    if(responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {
    console.log(result);
});

makeServerRequest.catch(error => console.log(error));















































