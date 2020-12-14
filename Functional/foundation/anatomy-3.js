// Function expression
const increment1 = function(n) {
    return n + 1;
}

// Arrow function is always anonymous
const increment2 = n => n + 1;

console.log(increment1(1));
console.log(increment2(5));