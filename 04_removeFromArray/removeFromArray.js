const removeFromArray = function(array, ...otherValues) {
    let newArray = [];
    for (let char of array) {
        if (!otherValues.includes(char)) {
            newArray.push(char);
        }
    }   return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;