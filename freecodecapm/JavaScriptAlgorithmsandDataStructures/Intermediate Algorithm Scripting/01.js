/*Sum All Numbers in a Range*/

function sumAll(arr) {
    let sum =0;
    arr =arr.sort((a, b) => a-b);
    for (let i = arr[0]; i < arr[1] + 1; i++) {
        sum+= i;
    }
    return sum;
}

// console.log(sumAll([1, 4]));
// console.log(sumAll([10, 5]));