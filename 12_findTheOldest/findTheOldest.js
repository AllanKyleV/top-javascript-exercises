const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

const findTheOldest = function(people) {
  let persons = [];

  for (let person of people) {
    let property = {};

    property['name'] = person.name;
    if (person.yearOfDeath === undefined) {
      property['age'] = new Date().getFullYear() - person.yearOfBirth;
    } else if (person.yearOfBirth === undefined) {
      property['age'] = person.yearOfDeath - new Date().getFullYear();
    } else {
      property['age'] = person.yearOfDeath - person.yearOfBirth;
    }

    persons.push(property);
  }

  const oldest = persons.reduce((oldestSoFar, currentPerson) => {
    return currentPerson.age > oldestSoFar.age ? currentPerson : oldestSoFar;
  });

  return oldest;
};

// Pseducode:
// Goal: Return the name of the oldest person from the given array data.
// Loop the array of objects, get the age of each person, age = yearOfBirth - yearOfDeath.
// We need an array of person, with their name and age as properties.

console.log(findTheOldest(people));
console.log(findTheOldest(people).name);

// Do not edit below this line
module.exports = findTheOldest;