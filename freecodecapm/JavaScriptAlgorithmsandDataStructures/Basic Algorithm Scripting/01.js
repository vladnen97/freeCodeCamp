/*Convert Celsius to Fahrenheit*/

function convertCtoF(celsius) {
    return (celsius * 9 / 5) + 32;
}

convertCtoF(30);

/*Reverse a String*/

let reverseString = (str) => str.split("").reverse().join("");
reverseString("hello");

/*Factorialize a Number*/

function factorialize(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorialize(num-1);
    }
}
factorialize(5);