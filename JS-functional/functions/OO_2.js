class Produto {
  constructor(nome, preco, desc = 0.15) {
    this._nome = nome;
    this.preco = preco;
    this.desc = desc;
  }

  /**
   * Quando colocamos o GET, podemos acessar essa função como sendo um atributo.
   */
  get precoFinal() {
    return this.preco * (1 - this.desc);
  }

  get consultarNome() {
    return this._nome;
  }

  set mudarNome(newName){
    this._nome = newName;
  }
}

const p1 = new Produto('Caneta', 1.50);
const p2 = new Produto('Geladeira', 20000.00);

console.log(p1);
console.log(`Verificando nome: ${p1.nome}`);
console.log(`Verificando preço com desconto: ${p1.precoFinal}`); 
console.log(`Verificando o nome: ${p1.consultarNome}`);
p1.mudarNome = 'Thadeu';
console.log(`Verificando o nome atualizado: ${p1.consultarNome}`);


console.log(p2);
console.log(`Verificando preço: ${p2.preco}`);
console.log(`Verificando preço com desconto: ${p2.precoFinal}`);


/* Class basicamente é um detalhe de sintaxe. Porque no final, o código será convertido para uma função.
 */
console.log(typeof Produto);