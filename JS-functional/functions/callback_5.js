/**
 * REDUCE
 * Veja a chamada de um método reduce: 
 * -> array.reduce(funcao, valor_inicial)
 * No primeiro parâmetro, estamos passando uma função e no segundo parâmetro um valor inicial que será utilizado
 * pelo próprio reduce para trabalhar com o restante do array.
 * 
 * O reduce sempre trabalha com dois elementos. Sendo o primeiro o acumulador e o segundo o elemento atual do array que
 * estamos percorrendo. (acumulador, elemento);
 * Veja um exemplo abaixo:
 * 
 * Array teste:
 * [3,2,1,-4,4,7]
 * Vamos supor que eu quero realizar a soma desse Array e coloquei o elemento inicial sendo 0.
 * (0, 3) => 3
 * (3, 2) => 5
 * (5, 1) => 6
 * Assim, será feito sucessivamente até realizar a soma de todos os elementos do array.
 * Neste caso, o resultado final do reduce foi um número. Diferente do map ou filter, que é retornado um outro array.
 * 
 * Quando não colocamos um valor inicial, o primeiro elemento do array entrará como valor inicial e será feito a operação 
 * já com o segundo elemento elemento do array. 
 * Mas isso ocorre somente quando não temos um valor inicial passado para o reduce.
 * 
 */

const carrinho = [
  {nome: 'Caneta', qtde: 1000, preco: 7.99},
  {nome: 'Impressora', qtde: 0, preco: 649.50},
  {nome: 'Caderno', qtde: 4, preco: 27.10},
  {nome: 'Lapis', qtde: 3, preco: 5.82},
  {nome: 'Tesoura', qtde: 1, preco: 19.20},
];

const getTotal = item => item.qtde * item.preco;
const totalGeral = carrinho.map(getTotal);
console.log(Math.floor(totalGeral.reduce((accumulator, element) => accumulator + element)));
console.log(totalGeral);

Array.prototype.meuReduce = function (fn, inicial) {
  let acc = inicial;
  for(let i = 0; i < this.length; i++) {
    if(!acc && i === 0) {
      acc = this[i];
      continue;
    }
    acc = fn(acc, this[i], i, this);
  }
  return acc;
}

const arrayTeste = [5, 5, 5, 5];
console.log("meu array - com valor inicial", arrayTeste.meuReduce((accumulator, element) => accumulator + element, 5))
console.log("meu array - sem valor inicial", arrayTeste.meuReduce((accumulator, element) => accumulator + element));

