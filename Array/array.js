console.log(typeof Array, typeof new Array, typeof []);
/* O Array é basicamente um objeto que organiza seus elementos de forma indexada.
 */

let aprovados = new Array('Bia','Carlos','Ana'); //Forma menos usual de criar um array, a forma literal é mais comum.
console.log(aprovados);

aprovados = ['Bia','Carlos','Ana']; //Essa é a forma literal
console.log(aprovados[0]); //Bia
console.log(aprovados[1]); //Carlos
console.log(aprovados[2]); //Ana

/* Diferente da maior parte das linguagens o JS não irá retornar um erro ao acessar
 * um elemento que não existe no array, simplesmente irá retornar 'undefined';
 */
console.log(aprovados[3]); //undefined!! 

aprovados[3] = 'Paulo'; //Forma mais comum para substituir um elemento.
aprovados.push('Thadeu'); //Forma mais comum de inserir um elemento no array.
console.log(aprovados); // [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Thadeu' ]
console.log(aprovados.length); // Tamanho do array é 5

aprovados[9] = 'Rafael'; // Do elemento de índice 5 ao elemento de indice 8, será setado 'undefined'
console.log(aprovados);
console.log(aprovados[8] === undefined); //true!!!!!!!! wow
console.log(aprovados.length);

/***************************************************************/

aprovados.sort(); //Essa função irá causar uma alteração dentro do array.
console.log(aprovados); //A altaração de ordenação.

/* Abaixo o elemento de índice '1' do array aprovados, será excluído.
 * Mas não será feita uma reordenação dos elementos, basicamente o elemento será trocado por 
 * 'undefined'.
 */
delete aprovados[1]; 
console.log(aprovados);

aprovados = ['Karina','Thadeu','Katharina','Guilherme'];
console.log(aprovados); //[ 'Karina', 'Thadeu', 'Katharina', 'Guilherme' ]

/* A função splice serve para:
 * Adicionar elementos em um determinado índice, também para remover elementos de um array e
 * remover e adicionar elementos simultaneamente.
 * 
 * O primeiro elemento quer dizer o índice que você irá trabalhar, o segundo é a quantidade de elementos
 * que iremos excluir.
 * No caso iremos trabalhar no elemento de índice 1 e iremos excluí-lo.
 * aprovados.splice(1,1).
 */
aprovados.splice(1,1);
console.log(aprovados); //No caso o 'Thadeu' (vulgo eu), rodou.

aprovados.push('Thadeu'); //Voltei :D
console.log(aprovados);

aprovados.splice(0,3); //Agora vamos excluir três elementos.
console.log(aprovados); //sobrou só eu :D

/* Agora usando o splice, vamos inserir alguns elementos no array
 * Muito simples:
 * aprovados.splice(1,0,'Karina','Katharina','Guilherme');
 *
 * Basicamente estou falando:
 * "A partir do primeiro elemento (1), não quero que exclua ninguém (0). 
 * Além disso, adicione 'Karina', 'Katharina' e 'Guilherme' dentro do array".
 */
aprovados.splice(1,0,'Karina','Katharina','Guilherme');
console.log(aprovados);

/* Se você tem um array constante, não significa que os dados desse array são constantes.
 * O que acontece é que você possui uma variavel que aponta para um endereço de memória e aquele
 * endereço não pode ser modificável.
 * Lembre da analogia ao carrinho de supermercado, o carrinho é o array e constante. 
 * Os produtos são os elementos dentro do array que podem sair e entrar quando necessário.
 */
