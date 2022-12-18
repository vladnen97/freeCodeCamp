/*Roman Numeral Converter*/

function convertToRoman(num) {
    const romanNum = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];


    let romanStr = "", i = 0;
    while (i < romanNum.length) {
        if (num - romanNum[i][1] < 0) {
            i++;
        } else {
            romanStr += romanNum[i][0];
            num -= romanNum[i][1];
            if (num === 0) return romanStr;
        }
    }
}

console.log(convertToRoman(36));