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





































