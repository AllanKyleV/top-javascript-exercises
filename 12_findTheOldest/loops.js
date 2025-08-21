// 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2 
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) console.log(i);
}

// 3
{
    const string = 'hello';
    for (let char of string) {
        console.log(char);
    }
}

// 4 
function sum(num) {
    let result = 0;
    for (let i = 1; i < num; i++) {
        result += i;
    }
    return result;
}
console.log(sum(100));

// 5
const array = [3, 7, 2, 9];
function getLargest(array) {
    let curr = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > curr) curr = array[i];
    } return curr;
}
console.log(getLargest(array));

// 6
const str = 'javascript';
function countVowels(str) {
    let count = 0;
    const vowels = 'aeiou';
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels(str));