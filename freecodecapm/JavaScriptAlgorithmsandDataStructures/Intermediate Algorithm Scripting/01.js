/*Sum All Numbers in a Range*/

function sumAll(arr) {
    let sum =0;
    arr =arr.sort((a, b) => a-b);
    for (let i = arr[0]; i <= arr[1]; i++) {
        sum+= i;
    }
    return sum;
}

// console.log(sumAll([1, 4]));
// console.log(sumAll([10, 5]));

/*Diff Two Arrays*/

function diffArray(arr1, arr2) {
    const newArr = [];

    for (let i=0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            newArr.push(arr2[i]);
        }
    }
    for (let i=0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            newArr.push(arr1[i]);
        }
    }
    console.log(newArr);
}

diffArray([7, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);



