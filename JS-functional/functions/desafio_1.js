// somar(3)(4)(5)

function somarDesafio1(a){
  return function(b){
    return function(c){
      return a + b + c;
    }
  }
}

console.log(somarDesafio1(3)(4)(5));

// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// calcular(3)(7)(fn)

function calcular(a) {
  return function(b){
    return function(fn) {
      if(typeof fn === 'function') return console.log(fn(a, b));
    }
  }
}

const somar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;
const subtrair = (a, b) => a - b;
const dividir = (a, b) => a / b;

calcular(1)(1)(somar);
calcular(2)(2)(multiplicar);
calcular(5)(3)(subtrair);
calcular(4)(2)(dividir);