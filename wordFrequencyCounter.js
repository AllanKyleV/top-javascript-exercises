function countWords(str) {
    let words = str.split(' ');
    for (let word of words) {
        console.log(word);
    }
};

console.log(countWords("the cat and the hat"));
// { the: 2, cat: 1, and: 1, hat: 1 }

// Weakness discovered:
//  lack of programming logic knowledge