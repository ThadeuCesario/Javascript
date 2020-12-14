/**
 * Lembrar que:
 * var -> Possui escopo de função e escopo global.
 * let -> Possui escopo de bloco, escopo de função e escopo global.
 * const -> Possui escopo de bloco, escopo de função e escopo global.
 */
function soma(numero1, numero2){
  var resultado = numero1 + numero2;
  return resultado;
}
var resultado = soma(1, 2);
console.log(resultado);