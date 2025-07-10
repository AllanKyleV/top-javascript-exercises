const fibonacci = function(i) {
    const n = parseInt(i);
    if (n < 0) return 'OOPS';
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log((fibonacci(4))); // 3

// Formula: F(n) = F(n - 1) + F(n - 2)

// Do not edit below this line
module.exports = fibonacci;
