/** O Map serve para fazer uma transformação no array. A ideia é mapear um array para outro array de
 * mesmo tamanho com os dados transformados.
 * 
 * Vamos supor que temos um array que contém três elementos, podemos com o map criar um novo array
 * que irá percorrer esse array com os três elementos e realizar alguma função.
 * Por essa razão que o map é interessante podemos trabalhar com um determinado array, criando
 * uma cópia de mesmo tamanho e não interferindo no array original.
 * 
 * Se o array original possui seis elementos o novo array feito pelo map também terá seis elementos,
 * porém com os dados transformados.
 */

// Veja o array abaixo:
const nums = [1,2,3,4,5];

// Agora com o map, vamos criar um novo array que dobre o valor de cada elemento do array original.
/** Map -> É um for com propósito.
 * Um map pode receber três parâmetros:
 * 
 * 1 - O valor atual
 * 2 - indice atual
 * 3 - Array que estamos percorrendo
 */

let resultado = nums.map(function(valor){
    return valor * 2;
})
console.log(resultado);

const soma10 = e => e + 10;
const soma20 = e => e + 20;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`;

let resultadoSomaUm = nums.map(soma10).map(soma20).map(paraDinheiro);
console.log(resultadoSomaUm);

/* Veja que no final temos a mesma quantidade de elementos!!
 * Além disso podemos encadear maps e fornece uma flexibilidade incrível.
 */