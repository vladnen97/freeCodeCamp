/*Use an Array to Store a Collection of Data*/
let yourArray = ["string", 5, true, {a: "darova", b:4}, null]; // Change this line

/*Access an Array's Contents Using Bracket Notation*/

let myArray = ["a", "e", "c", "d"];
console.log(myArray[1]);

/*Add Items to an Array with push() and unshift()*/
function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    // Only change code above this line
    return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));

/*Remove Items from an Array with pop() and shift()*/

function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

/*Remove Items Using splice()*/

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1,4);
// Only change code above this line
console.log(arr);

/*Add Items Using splice()*/

function htmlColorNames(arr) {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
    return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

/*Copy Array Items Using slice()*/

function forecast(arr) {
    // Only change code below this line
    arr = arr.slice(2, 4);
    return arr;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

/*Copy an Array with the Spread Operator*/
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));

/*Combine Arrays with the Spread Operator*/

function spreadOut() {
    let fragment = ['to', 'code'];
    return ['learning', ...fragment, 'is', 'fun'];
}
console.log(spreadOut());

/*Check For The Presence of an Element With indexOf()*/

function quickCheck(arr, elem) {
    return arr.indexOf(elem) !== -1;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

/*Iterate Through All an Array's Items Using For Loops*/

function filteredArray(arr, elem) {
    let newArr = [];
    for (let i =0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
 console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

/*Add Key-Value Pairs to JavaScript Objects*/

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};
// Only change code below this line
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
// Only change code above this line
console.log(foods);

/*Modify an Object Nested Within an Object*/

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};
userActivity.data.online = 45;
console.log(userActivity);

/*Access Property Names with Bracket Notation*/
let foodsA = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
let checkInventory = (scannedItem) => foodsA[scannedItem];
console.log(checkInventory("apples"));

/*Use the delete Keyword to Remove Object Properties*/

let foodsD = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
delete foodsD.oranges;
delete foodsD.plums;
delete foodsD.strawberries;
console.log(foodsD);

/*Check if an Object has a Property*/

let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(userObj) {
    // Only change code below this line
    return "Alan" in userObj && "Sarah" in userObj && "Ryan" in userObj && "Jeff" in userObj;
    // Only change code above this line
}
console.log(isEveryoneHere(users));

/*Iterate Through the Keys of an Object with a for...in Statement*/

const usersC = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}
function countOnline(usersObj) {
    let count =0;
    for (let user in usersObj) {
        if(usersObj[user].online) {
            count ++;
        }
    }
    return count;
}
console.log(countOnline(usersC));

/*Generate an Array of All Object Keys with Object.keys()*/

let usersB = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};
function getArrayOfUsers(obj) {
    return Object.keys(obj);
}
 console.log(getArrayOfUsers(usersB));

















