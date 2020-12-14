// Anonymous function
(function (a, b, c){
    return a + b + c;
});

// Function expression
const sum = function (a, b){
    return a + b;
}

console.log(sum(10, 20));

const anotherSum = sum;

console.log(anotherSum(5, 5));