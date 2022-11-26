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































