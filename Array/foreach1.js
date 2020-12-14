/* Vamos analisar um pouco sobre o comportamento do forEach, para podermos percorrer um array
 * e passar uma callback para que seja executado em cada laço.
 * Dentro desta callback, passamos dois parâmetros que serviram respectivamente para o nome do
 * elemento que estamos percorrendo e para o índice do elemento.
 */

 const aprovados = ['Agatha','Aldo','Daniel'];

 aprovados.forEach(function(nome, indice, array){
    console.log(`${indice+1}) ${nome}`);
 });

 /* Mas não obrigatoriamente precisamos passar o nome e o índice como parâmetro, se desejarmos
  * podemos desconsiderar e passar somente o nome.
  */
aprovados.forEach(nome => console.log(nome));

/** Podemos passar uma função armazenada em uma variável para o foreach, para que sirva como
 * callback
 */
const exibirAprovados = aprovado => console.log(aprovado);

aprovados.forEach(exibirAprovados);

/**
 * Resumindo: A função callback que podemos passar para um foreach, recebe três parâmetros.
 * Nome, indice e array.
 * Podemos suprimir quantos parametros desejarmos, e caso passarmos mais de três parâmetros, os
 * demais serão retornados como undefined.
 */