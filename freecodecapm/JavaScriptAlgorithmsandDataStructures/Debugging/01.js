/*Use the JavaScript Console to Check the Value of a Variable*/
let a = 5;
let b = 1;
a++;
console.log(a)

let sumAB = a + b;
console.log(sumAB);

/*Understanding the Differences between the freeCodeCamp and Browser Console*/

let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();

/*Use typeof to Check the Typeof a Variable*/

let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);

/*Use Caution When Reinitializing Variables Inside a Loop*/

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
        // Adds the m-th row into newArray

        for (let j = 0; j < n; j++) {
            // Pushes n zeroes into the current row to create the columns
            row.push(0);
        }
        // Pushes the current row, which now has n zeroes in it, to the array
        newArray.push(row);
        row=[];
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);



