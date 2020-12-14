// Arrow function
const felizNatal = () => console.log('Feliz Natal');
felizNatal();

const saudacao = (nome) => `Fala ${nome}!!`;
console.log(saudacao('Thadeu')); 

/**
 * Abaixo será realizado o REST, em que todos os parâmetros são pegos e armazenados em um array.
 */
const somar = (...numeros) => {
  console.log("foi convertido em array", Array.isArray(numeros));
  let tota = 0;
  for (let i of numeros) {
    tota += i;
  }
  return tota;
}
console.log(somar(1,2,3,5));
console.log(somar(1,2,3,5,6,8,9,10));
console.log(somar(1,2,3,5,8,8,8,8,8,8,9));

const potencia = base => exp => Math.pow(base, exp);

console.log(potencia(2)(8));

/**
 * this, veja que dentro de prototype o this referencia o elemento que estamos manipulando.
 */

Array.prototype.log = function() {
  console.log(this);
}

const numeros = [1, 2, 3];
numeros.log();
