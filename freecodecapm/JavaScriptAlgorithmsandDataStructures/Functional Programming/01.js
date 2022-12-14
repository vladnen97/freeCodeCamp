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

/*Sort an Array Alphabetically using the sort Method*/

function alphabeticalOrder(arr) {
    return arr.sort();
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

/*Return a Sorted Array Without Changing the Original Array*/

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    return arr.slice().sort((a, b) => a - b);
}
nonMutatingSort(globalArray);

/*Split a String into an Array Using the split Method*/

function splitify(str) {
    return str.split(/\W/gi);
}
splitify("Hello World,I-am code");

/*Combine an Array into a String Using the join Method*/

function sentensify(str) {
    return str.split(/\W/gi).join(" ");
}
sentensify("May-the-force-be-with-you");

/*Apply Functional Programming to Convert Strings to URL Slugs*/

// Only change code below this line
function urlSlug(title) {
    return title.toLowerCase().split(/\s+/gi).filter(n => n !== "").join("-");
}
// console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
// console.log(urlSlug(" Winter Is  Coming"));

/*every method*/

function checkPositiveA(arr) {
    return arr.every(n => n >= 0);
}
checkPositiveA([1, 2, 3, -4, 5]);

/*Use the some Method to Check that Any Elements in an Array Meet a Criteria*/

function checkPositiveB(arr) {
    return arr.some(n => n >= 0);
}
checkPositiveB([1, 2, 3, -4, 5]);

/*Introduction to Currying and Partial Application*/

function add(x) {
    return function(y) {
        return function(z) {
            return x + y + z;
        };
    };
}
add(10)(20)(30);
