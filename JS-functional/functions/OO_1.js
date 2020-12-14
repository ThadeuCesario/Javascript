//Função construtora
function Produto(nome, preco, desc = 0.15) {
  this.nome = nome; 
  this.preco = preco;
  this.desc = desc;

  this.precoFinal = function () {
    return this.preco * (1 - this.desc);
  }
}

console.log(typeof Produto); //Function
console.log(typeof Promise); //Function
console.log(typeof Object); //Function

const p1 = new Produto('Caneta', 1.50);
const p2 = new Produto('Geladeira', 2000.00);

console.log(p1);
console.log(`Verificando nome: ${p1.nome}`);
console.log(`Verificando preço com desconto: ${p1.precoFinal()}`); 

console.log(p2);
console.log(`Verificando preço: ${p2.preco}`);
console.log(`Verificando preço com desconto: ${p2.precoFinal()}`);