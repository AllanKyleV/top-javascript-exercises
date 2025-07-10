const palindromes = function (string) {
    let str = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    if (str.split('').reverse().join('') === str) return true;
    return false;
};

console.log(palindromes('RaCECAr!'))
console.log(palindromes('Animal loots foliated detail of stool lamina.'));
// Do not edit below this lines
module.exports = palindromes;