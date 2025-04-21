const repeatString = function(string, num) {
    if (num < 0) return 'ERROR'

    let result = [];

    for (let i = 0; i < num; i++) {
        if (num === 0) {
            return result;
        } else {
            result.push(string)
        }
    }
    return result.join('');
};

// Do not edit below this line
module.exports = repeatString;
