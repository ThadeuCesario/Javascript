/* O código abaixo, apenas mostra que com um objeto podemos realizar um comportamento semelhante
 * a de um array. Como se fizessemos uma conversão de um objeto para um array.
 * Não é nada importante, mas é interessante analisarmos essa possibilidade.
 */

const quaseArray = {0: 'Rafael', 1: 'Ana', 2:'Bia'};
console.log(quaseArray);
Object.defineProperty(quaseArray, 'toString', {
    value: function(){
        return Object.values(this)
    },
    enumerable: false
});
console.log(quaseArray[0]);

const meuArray = ['Rafael','Ana','Bia'];
console.log(quaseArray.toString(), meuArray)