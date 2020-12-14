/* Reduce é uma função que serve para transformar um array em algo novo.
 * Sende que o resultado de um reduce é passado para a próxima interação.
 * Imagina que na primeira interação temos o elemento de indice zero e o elemento de índice um,
 * agora o resultado dessa função é passado para a próxima interação.
 */

const alunos = [
    {nome:'João', nota:7.0, bolsista:true},
    {nome:'Ana', nota:8.0, bolsista:false},
    {nome:'Pedro', nota:9.0, bolsista:true},
    {nome:'Maria', nota:6.5, bolsista:true},
    {nome:'Thadeu', nota:7.1, bolsista:false},
]

/* Abaixo criamos uma constante que primeiramente receberá um map pegando somente a nota dos alunos.
 * Em seguida, temos o reduce passando a função que recebe como parâmetro o acumulador (resultado 
 * da função entre os elementos) e o valor atual.
 * Em seguida damos um return somando o acumulador mais o valor atual.
 * 
 */

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual);
    return acumulador + atual;
});
console.log(`O resultado final foi ${resultado}`); //37,6

/* Mas e se quisermos passar um valor inicial para o acumulador? Por exemplo o número 10.
 * Basta seguir igual abaixo:
 */

const resultado2 = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual);
    return acumulador + atual;
}, 10);
console.log(`O resultado final foi ${resultado2}`); //47,6 (valor inicial 10)