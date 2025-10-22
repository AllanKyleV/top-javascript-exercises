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

// Another example, We have an array of words, lets filter words that are CAPITALIZED.
let words = ['HELLO', 'world', 'hi', 'CODE']

function getCapitalizedWords(words) {
    return words.filter(word => word === word.toUpperCase());
};

console.log(getCapitalizedWords(words));

// Let's try it on Objects.
// Lets say we an animals, now lets separate land  from sea animals.
let animals = {
    dog : 'land',
    fish : 'sea',
    whale : 'sea',
    cat : 'land',
    bird: 'air'
}

function separateAnimals(animals) {
    let separated = {
        land: [],
        sea: []
    };

    for (let key in animals) {
        const habitat = animals[key];

        if (!separated[habitat]) {
            separated[habitat] = []
            separated[habitat].push(key);
        }

        animals[key] === 'land' ? separated.land.push(key) : separated.sea.push(key);
    }

    return separated;
};

console.log(separateAnimals(animals));


// // Pseducode:
// Goal: Separate land from sea animal.
// An object that will hold the separated kinds, filter the land animal first, if the value of the animal is 'land', then add it to the created object under the collection land animals. Then 'sea', same idea.
// Return the separated animals, refactor if possible, end.

// I'll be back to it!

// let names = {
//     fisrt: 'john',
//     last: 'doe'
// }

// function getFullname(names) {
//     console.log(`${names.fisrt}`);
//     console.log(Object.values(names));
// }

// console.log(getFullname(names));