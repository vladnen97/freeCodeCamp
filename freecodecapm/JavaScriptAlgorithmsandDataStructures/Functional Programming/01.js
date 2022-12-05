/*Implement map on a Prototype*/

Array.prototype.myMap = function(callback) {
    const newArray = [];
    for (let i=0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    console.log(newArray);
};

[23, 65, 98, 5, 13].myMap(item => item * 2);
[1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0])