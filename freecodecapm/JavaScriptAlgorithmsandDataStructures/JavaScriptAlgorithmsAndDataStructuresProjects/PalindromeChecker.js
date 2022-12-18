/*Palindrome Checker*/

function palindrome(str) {
    return str.match(/[a-z0-9]/gi).reverse().join("").toLowerCase() === str.match(/[a-z0-9]/gi).join("").toLowerCase();
}

console.log(palindrome("_eye"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("My age is 0, 0 si ega ym."));
