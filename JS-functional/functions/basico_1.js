let a = 4;
console.log(a);

//Function declaration
function bomDia(){
  console.log('Bom dia!');
}

bomDia();

//Function Expression
const boaTarde = function(){
  console.log('Boa tarde!');
}

boaTarde();

// Valor padrão no b
function somar(a = 0, b = 0){
  return a + b;
}

/*
 * Veja que o Javascript é muito flexível com parâmetros.
 */
let resultado = somar(5, 5);
console.log("result:", resultado);

resultado = somar(3, 5, 5, 6, 7, 8);
console.log("result:", resultado);

resultado = somar(3);
console.log("result:", resultado);  

resultado = somar();
console.log("result:", resultado);