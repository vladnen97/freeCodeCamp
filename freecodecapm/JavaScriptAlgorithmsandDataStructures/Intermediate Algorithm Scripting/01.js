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

/*Drop it*/

function dropElements(arr, func) {
    for (let i =0; i < arr.length; i++) {
        if (func(arr[i])) return arr.slice(i);
    }
    return [];
}

// console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
// console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));

/*Steamroller*/

function steamrollArray(arr) {
    return arr.reduce((flattenArr, elem) => {
        return Array.isArray(elem) ? [...flattenArr, ...steamrollArray(elem)] : [...flattenArr, elem];
    }, []);
}

// console.log(steamrollArray([1, [2], [3, [[4]]]]));

/*Binary Agents*/

function binaryAgent(str) {
    let charStr = "", arr =str.split(" ");
    for (let i =0; i < arr.length; i++) {
        charStr += String.fromCharCode(parseInt(arr[i], 2));
    }
    return charStr;
}

// console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000" +
//                             " 01100010 01101111 01101110 01100110 01101001 01110010 01100101" +
//                             " 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));


/*Everything Be True*/

function truthCheck(collection, pre) {
    return collection.every(function (element) {
        return element[pre];
    });
}

// console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false},
//     {name: "Naomi", role: "", isBot: false},
//     {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));

/*Arguments Optional*/

function addTogether(...args) {
    const [first, second] = args;
    if (args.length === 1 && typeof first === 'number') {
        return num => {
            if (typeof num === 'number') {
                return first + num;
            }
        }
    }
    if (typeof first === 'number' && typeof second === 'number') {
        return first + second;
    }
}
// console.log(addTogether(2,3));
// console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
// console.log(addTogether(5)(7));

/*Make a Person*/

const Person = function(firstAndLast) {
    let [firstName, lastName] = firstAndLast.split(" ");
    this.getFullName = () => `${firstName} ${lastName}`;

    this.getFirstName = () => `${firstName}`;

    this.getLastName = () => `${lastName}`;

    this.setFirstName = function(first) {
        firstName = first;
    };
    this.setLastName = function(last) {
        lastName = last;
    };
    this.setFullName = function(firstAndLast) {
        [firstName, lastName] = firstAndLast.split(" ");
    };
};

const bob = new Person('Bob Ross');
bob.setFirstName("Haskell");
bob.getFullName();

/*Smallest Common Multiple*/

function smallestCommons(arr) {
    let min = Math.min(arr[0], arr[1]);
    let max = Math.max(arr[0], arr[1]);
    let minNum = max, temp = 0;

    while (temp !== minNum) {
        temp = minNum;
        for (let i = min; i <= max; i++) {
            if (minNum % i !== 0) {
                minNum += max;
                break;
            }
        }
    }
    return minNum;
}


// console.log(smallestCommons([1,5]));

/*Sum All Primes*/

function sumPrimes(num) {
    function isPrime(num) {
        for (let i = 3; i <= Math.sqrt(num); i+=2) {
            if (num % i === 0)
                return false;
        }
        return true;
    }
    let sum = 2;
    for (let i = 3; i <= num; i++) {
        if (isPrime(i))
            sum += i;
    }
    return sum;
}

// function sumPrimes(num) {
//     let primes = [];
//     for (let i = 2; i <= num; i++) {
//         if (primes.every((prime) => i % prime !== 0))
//             primes.push(i);
//     }
//     return primes.reduce((sum, prime) => sum + prime, 0);
// }

// console.log(sumPrimes(10));

/*Map the Debris*/

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return arr.map(({name, avgAlt}) => ({name, orbitalPeriod: Math.round(2*Math.PI* Math.sqrt(Math.pow(earthRadius+avgAlt, 3)/GM))}));
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

