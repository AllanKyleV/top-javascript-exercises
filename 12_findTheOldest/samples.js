const persons = [
    {name: 'jack', lastname: 'will', age: 21}, 
    {name: 'ben', lastname: 'johnson', age: 22},
];

// Get the person's fullname out the given object
function getfullname(persons) {
    const toCapitalized = function(name) {
        let result = '';
        for (let item of name.split(' ')) {
            result += item[0].toUpperCase() + item.slice(1) + ' ';
        }
        return result.trim();
    }

    let result = [];

    for (let person of persons) {
        let people  = {};

        let fullname = `${person.name} ${person.lastname}`;
        people['fullname'] = toCapitalized(fullname);
        people['age'] = person.age;

        result.push(people);
    }
    return result;
;}

console.log(getfullname(persons));

// Ps. This is just a sample to practice what I have understand about targeting/modefying objects, strings, and arrays