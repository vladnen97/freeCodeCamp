/*Telephone Number Validator*/

function telephoneCheck(str) {
    return /^1?\s?((\(\d{3})\)|([ -]?\d{3})){2}((\(\d{4}\))|([ -]?\d{4}))$/g.test(str);
}

console.log(telephoneCheck("555-555-5555"));