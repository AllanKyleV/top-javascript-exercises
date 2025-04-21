const sumAll = function(a, b) {
    let result = 0;

    if (a < 0 ||
        b < 0 ||
        !Number.isInteger(a) ||
        !Number.isInteger(b) ||
        typeof a !== 'number' ||
        typeof b !== 'number'
    ) {
        return 'ERROR'
    }

    if (a > b) [a, b] = [b, a];

    for (let i = a; i <= b; i++) {
        result += i;
    } return result;
};

// Do not edit below this line
module.exports = sumAll;