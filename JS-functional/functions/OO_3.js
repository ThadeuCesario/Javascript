class Produto {
  constructor(nome, preco, desc = 0.15) {
    this.nome = nome;
    this.preco = preco;
    this._desc = desc;
  }

  /**
   * Quando colocamos o GET, podemos acessar essa função como sendo um atributo.
   */
  get precoFinal() {
    return this.preco * (1 - this._desc);
  }

  get consultarNome() {
    return this._nome;
  }

  set mudarNome(newName){
    this._nome = newName;
  }
}

/**
 * Utilizando o prototype podemos criar uma função que não foi definida dentro da função construtora.
 * Quando colocamos alguma coisa dentro do prototype, basicamente estamos informando que todos
 * os objetos criados, terá essa função.
 */
Produto.prototype.log = function() {
  return console.log(`Nome: ${this.nome} Preço: R$${this.preco}`);
}

Object.defineProperty(Produto.prototype, 'desc', {
  get: function() {
    return this._desc;
  },
  set: function(newValue) {
    if(newValue >= 0 && newValue <= 1) this._desc = newValue;
  }
});

Object.defineProperty(Produto.prototype, 'descString', {
  get: function() {
    return `${this._desc * 100}% de desconto!!`;
  }
});

const p1 = new Produto('Caneta', 1.50);
const p2 = new Produto('Geladeira', 20000.00);

console.log(p1);
console.log(`Verificando nome: ${p1.nome}`);
console.log(`Verificando preço com desconto: ${p1.precoFinal}`); 
console.log(`Verificando o nome: ${p1.consultarNome}`);
p1.mudarNome = 'Thadeu';
console.log(`Verificando o nome atualizado: ${p1.consultarNome}`);
p1.log();


console.log(p2);
console.log(`Verificando preço: ${p2.preco}`);
console.log(`Verificando preço com desconto: ${p2.precoFinal}`);
p2.desc = 0.99;
console.log(p2.desc);
console.log(p2.descString);


/* Class basicamente é um detalhe de sintaxe. Porque no final, o código será convertido para uma função.
 */
console.log(typeof Produto);