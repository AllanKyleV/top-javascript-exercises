const reverseString = function(str) {
    if (str === '') return str;
    let reversedWord = [];
    let array = str.split(' ');
    for (let word of array) {
        reversedWord.push(word.split('').reverse().join(''));
    } return reversedWord.reverse().join(' ');
};

// Do not edit below this line
module.exports = reverseString;
