function logParams(a, b, c) {
    console.log(a, b, c);
}

//Parametros adicionais são ignorados
logParams(1, 2, 3, 4, 5);

function defaultParams (a, b, c = 0) {
    console.log(a, b, c);
}

defaultParams(5, 1);
defaultParams(5, 3, 9);

// spread/rest
function logNums(...nums){
    console.log(Array.isArray(nums));
    // for(let num of nums){
    //     console.log(num);
    // }
    console.log(nums);
}

logNums(1,2,3,4,5,6,7,8,9,10);

function sumAll(...nums){
    let total = 0;
    for(let n of nums){
        total += n;
    }
    return total;
}

console.log(sumAll(1,2,45,6, 1, 2, 3, 4))