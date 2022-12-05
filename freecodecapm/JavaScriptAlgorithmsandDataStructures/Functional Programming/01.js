/*Implement map on a Prototype*/

Array.prototype.myMap = function(callback) {
    const newArrayA = [];
    for (let i=0; i < this.length; i++) {
        newArrayA.push(callback(this[i], i, this));
    }
    // console.log(newArray);
};

[23, 65, 98, 5, 13].myMap(item => item * 2);
[1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0])


/*Implement the filter Method on a Prototype*/

Array.prototype.myFilter = function(callback) {
    const newArray = [];
    for (let i=0; i < this.length; i++) {
        if (callback(this[i], i, this))  newArray.push(this[i]);
    }
    // console.log(newArray);
};
[23, 65, 98, 5, 13].myFilter(item => item % 2);
["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi");


/*Return Part of an Array Using the slice Method*/

function sliceArray(anim, beginSlice, endSlice) {
    return anim.slice(beginSlice, endSlice);
}

sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3);

/*Remove Elements from an Array Using slice Instead of splice*/

function nonMutatingSplice(cities) {
    return cities.slice(0, 3);
}
nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]);

/*Combine Two Arrays Using the concat Method*/

function nonMutatingConcat(original, attach) {
    return original.concat(attach);
}
nonMutatingConcat([1, 2, 3], [4, 5]);

/**/

