/*Caesars Cipher*/

function rot13(str) {
    const alphabet = ["A", "B", "C", "D",
                      "E", "F", "G", "H",
                      "I", "J", "K", "L",
                      "M", "N", "O", "P",
                      "Q", "R", "S", "T",
                      "U", "V", "W", "X",
                      "Y", "Z"];
    let uncipherStr = "";
    for (let i of str) {
        if (/[a-z]/i.test(i)) {
            if (alphabet.indexOf(i) > 12) {
                uncipherStr += alphabet[alphabet.indexOf(i) - 13];
            } else {
                uncipherStr += alphabet[alphabet.indexOf(i) + 13];
            }
        } else {
            uncipherStr += i;
        }

    }
    return uncipherStr;
}

console.log(rot13("SERR PBQR PNZC"));