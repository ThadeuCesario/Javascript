/**
 * Promise é uma promessa, basicamente é algo que será resolvido no futuro.
 * 
 * Uma promise é uma function.
 * Quando criamos uma Promise, é retornado um array.
 * Quando criamos uma Promise, precisamos passar uma função como parâmetro. Porém a função que passamos como
 * parâmetro, também receberá uma função. Essa função que será chamada quando formos cumprir a promessa. 
 * Então quando criamos uma promise, passamos uma função como parâmetro que tem outra função que será chamada
 * quando a promessa for cumprida.
 * Para acessarmos a função que vamos executar, precisamos utilizar o método then. 
 * Um detalhe importante é que na função de promessa, podemos passar apenas um único parametro.
 * Podemos encadeader vários 'then' conforme a necessidade.
 * 
 * O resultado de um método 'then' é sempre passado para seu próximo método then.
 */

 let a = 1;
 console.log(a);

 let p = new Promise(function(resolve){
   //Só podemos passar um parâmetro para essa função.
   resolve(['Thadeu', 'Karina', 'Daisy', 'Thalyta']);
 });

function primeiroElemento(array) {
  return array[0]
}

function primeiraLetra(palavra){
  return palavra[0];
}

function converterParaLetraMinuscula(letra){
  return letra.toLowerCase();
}

function imprimirResultado(valor){
  return console.log("final", valor);
}

p.then(primeiroElemento)
 .then(primeiraLetra)
 .then(converterParaLetraMinuscula)
 .then(imprimirResultado);
 
console.log(typeof Promise);