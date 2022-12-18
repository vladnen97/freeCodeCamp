/*Palindrome Checker*/

function palindrome(str) {
    let letters = str.toLowerCase().match(/[a-z0-9]/gi);
    return  letters.reverse().join("") === letters.join("");
}

console.log(palindrome("_eye"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("My age is 0, 0 si ega ym."));
