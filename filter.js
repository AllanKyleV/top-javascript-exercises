let numbers = [1, 2, 3, 4, 5, 6];

function getOddNumbers(numbers) {
    let oddNumbers = [];

    for (let num of numbers) {
        if (num % 2 !== 0) oddNumbers.push(num);
    }

    return oddNumbers;
};

console.log(getOddNumbers(numbers));
// Loop numbers, if number % 2 !== 0, push to created variable.

function getEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
};

console.log(getEvenNumbers(numbers));
// Let's apply the same idea but we'll use filter this time.
// From the word itself, filters are used to filter items in an array with a certain conditions.