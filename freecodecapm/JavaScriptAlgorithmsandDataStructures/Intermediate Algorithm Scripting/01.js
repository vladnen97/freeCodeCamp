/*Sum All Numbers in a Range*/

function sumAll(arr) {
    let sum =0;
    let maxA = Math.max(arr[0], arr[1]);
    let minA = Math.min(arr[0], arr[1]);
    for (let i = minA; i <= maxA; i++) {
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
    return newArr;
}

diffArray([7, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);

/*Seek and Destroy*/

function destroyer(arr, ...args) {
    return arr.filter(elem => !args.includes(elem));
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/*Wherefore art thou*/

function whatIsInAName(collection, source) {
    const sourceKeys = Object.keys(source);
    return collection.filter(obj => {
        for (let i = 0; i < sourceKeys.length; i++) {
            if (!obj.hasOwnProperty(sourceKeys[i]) ||
                obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
                return false;
            }
        }
        return true;
    });
}
whatIsInAName([{ first: "Romeo", last: "Montague" },
                        { first: "Mercutio", last: null },
                        { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

/*Spinal Tap Case*/

function spinalCase(str) {
    let regExp = new RegExp("(?=[A-Z])|[_ -]", "g");
    return str.split(regExp).join("-").toLowerCase();
}

spinalCase('thisIsSpinalTap');
spinalCase('AllThe-small Things');
spinalCase('Teletubbies say Eh-oh');

/*Pig Latin*/

function translatePigLatin(str) {
    if (str.match(/^[aeiou]/)) return str + "way";

    const consonantCluster = str.match(/^[^aeiou]+/)[0];
    return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

// console.log(translatePigLatin("csonsonant"));
// console.log(translatePigLatin("acson"));

/*Search and Replace*/

function myReplace(str, before, after) {
    if (/^[A-Z]/.test(before)) {
        after = after.replace(/^\w/, after[0].toUpperCase());
    }else {
        after = after.replace(/^\w/, after[0].toLowerCase());
    }
    return str.replace(before, after);
}

// console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

/*DNA Pairing*/

function pairElement(str) {
    const newArr = [];
    for (const i of str) {
        switch (i) {
            case "A":
                newArr.push(["A", "T"]);
                break;
            case "T":
                newArr.push(["T", "A"]);
                break;
            case "C":
                newArr.push(["C", "G"]);
                break;
            case "G":
                newArr.push(["G", "C"]);
                break;
        }
    }
    return newArr;
}

pairElement("ATCGA");
pairElement("TTGAG");

/*Missing letters*/

function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {

        const charCode = str.charCodeAt(i);

        if (charCode !== str.charCodeAt(0) + i) {
            return String.fromCharCode(charCode - 1);
        }
    }
    return undefined;
}

// console.log(fearNotLetter("abce"));

/*Sorted Union*/

// function uniteUnique(...arr) {
//     return [...new Set(arr.flat())];
// }

function uniteUnique(...args) {
    let finalArr =[args[0][0]];
    for (let i =0; i < args.length; i++) {
        for (let j=0; j < args[i].length; j++) {
            if (!finalArr.includes(args[i][j])) finalArr.push(args[i][j]);
        }
    }
    return finalArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/*Convert HTML Entities*/

function convertHTML(str) {
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    return str.replace(/([&<>"'])/g, match => htmlEntities[match]);
}

// console.log(convertHTML("Dolce & Gabbana"));

/*Sum All Odd Fibonacci Numbers*/

function sumFibs(num) {
    let prev = 0, next = 1, sumAllOdds = 0;
    while (next <= num) {
        if (next % 2) {
            sumAllOdds += next;
        }
        next += prev;
        prev = next - prev;
    }
    return sumAllOdds;
}
// console.log(sumFibs(75025));

/*Sum All Primes*/

function sumPrimes(num) {
    while (num >=2) {
        for (let j = 2; j < num; j++) {
            if (num % j === 0) {
                return false;
            }
        }
        num--;
    }
    return true;
}
// console.log(sumPrimes(10));

/*Drop it*/

function dropElements(arr, func) {
    for (let i =0; i < arr.length; i++) {
        if (func(arr[i])) return arr.slice(i);
    }
    return [];
}

// console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
// console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
