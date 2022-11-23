
/*Converting some string with "-_" to camel case*/

somestring = "the-stealth-warrior";

var result = somestring.replace(/[-_]./g, (m, o , s) =>  s[o+1].toUpperCase());

function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}







