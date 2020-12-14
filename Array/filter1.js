/* Filter => Serve para filtrar um array, isto é gerar um novo array de acordo com algum determinado
 * critério.
 * Exemplo: Todos os alunos que tenham nota maior que sete, ou todos os produtos que custam mais que
 * R$50,00.
 */

const produtos = [
    {nome:'Notebook', preco: 2000,fragil:true},
    {nome:'Playstation', preco: 2300,fragil:true},
    {nome:'Galaxy S10', preco: 1800,fragil:true},
    {nome:'iPad', preco: 2100,fragil:true},
    {nome:'Bola', preco: 50,fragil:false}
]

/** Em um filter o array retornado geralmente é menor que o array original. Pois geralmente, realizamos
 * um filtro no array original.
 */
console.log(produtos.filter(function(produto){
    return produto.preco>2000 //Retorna somente dois produtos.
}))

/** Agora vamos criar duas funções:
 * Retornando produtos que são frágeis e produtos com preço maior que 500 reais.
 */
console.log("-------------------------");
const isFragile = produto => produto.fragil;
const maiorQue500 = produto => produto.preco > 500;
console.log(produtos.filter(isFragile).filter(maiorQue500)); //Portanto o array é filtrado utilizando esses dois critérios, se é caro e se é fragil.