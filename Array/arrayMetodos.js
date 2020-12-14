/* Veja que abaixo eu tenho um array com quatro elementos.
 * Além disso atribui o array para a constante 'pilotos', ou seja durante toda a execução do meu
 * código eu não posso atribuir outro elemento para pilotos, pois irá gerar erro.
 * Porém, consigo tranquilamente trabalhar dentro desse array, manipulando seu elementos.
 */
const pilotos = ['Vettel','Alonso','Raikkonen','Massa'];

pilotos.pop() //Massa quebrou o carro! Elemento excluído do array.
console.log(pilotos); // [ 'Vettel', 'Alonso', 'Raikkonen' ]

pilotos.push('Verstappen'); //Elemento inserido na última posição.
console.log(pilotos); // [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

/* O método 'shift' é quase igual ao método 'pop'. 
 * A única diferença é que o 'pop' retira o elemento sempre da última posição, enquanto o 'shift'
 * retira o elemento da primeira posição.
 * shift -> remove o primeiro elemento da lista!!!
 */
pilotos.shift();
console.log(pilotos); //[ 'Alonso', 'Raikkonen', 'Verstappen' ]

/* O método 'unshift' é primo do método 'shift', porém ao invés de retirar um elemento da primeira posição.
 * O método 'unshift' irá inserir um elemento na primeira posição. 
 * Faz a mesma função que o push, porém o push coloca no final. Enquanto o unshit insere na primeira
 * posição do array.
 */
pilotos.unshift('Thadeu'); //virei piloto :D
console.log(pilotos);


/* Splice, pode adicionar e remover elementos do array.
 * Então veja abaixo:
 * pilotos.splice(1,0,'Bottas','Massa');
 * 
 * Estou dizendo:
 * " No array 'pilotos', apartir do indice 1, não quero que remova ninguém (0) e insira os elementos 
 *  'Bottas' e 'Massa'."
 */

pilotos.splice(1,0,'Bottas','Massa');
console.log(pilotos); //[ 'Thadeu', 'Bottas', 'Massa', 'Alonso', 'Raikkonen', 'Verstappen' ]

/* Removendo pelo splice
 * pilotos.splice(3,1);
 * Estou dizendo:
 * " No array pilotos, quero que apartir do índice três, seja removido o elemento."
 */
pilotos.splice(3,1);
console.log(pilotos); //[ 'Thadeu', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]

pilotos.splice(1,0,'Massa', 'Raikkonen', 'Verstappen');
console.log(pilotos);

/* O slice irá gerar um novo array.
 * No caso irá gerar um novo array do índice dois em diante.
 * Slice nada mais é que pegar um pedaço de um determinado array, gerando um novo array.
 */
console.log(pilotos);
const algunsPilotos = pilotos.slice(2); 
console.log(algunsPilotos);

/* No caso abaixo, apartir do indíce um será gerado um array, até o índice 3.
 */
console.log(pilotos);
const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);
