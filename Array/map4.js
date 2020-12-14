const array = [4,8,16,20,24,28];

const soma10 = numero => numero + 10;
const multiplica5 = numero => numero * 5;

console.log(array.map(soma10).map(multiplica5));