/* Filter serve para filtrar um array para gerarmos um sub array.
 * Exemplo: 'Quero todos os alunos aprovados'
 */

const notas = [8, 7, 6, 4.5, 5, 7, 10, 2, 3.5, 4.7];

const aprovados = element => element >= 5;

const alunosAprovados = notas.filter(aprovados);
console.log(alunosAprovados);


//-------------------------------------------------------------
console.log("-------------------------------------------------------------");
//-------------------------------------------------------------

const idade = [18,19,20,17,25,24,22,23,21,15,13,10,12,11];

function filtrarIdade(element, index, array){
    console.log(`element: ${element} | index: ${index} | array: ${array}`)
    return element >= 18;
}


function liberarAcesso(element){
    return `Idade ${element} - Acesso Liberado`
}

const sistema = idade.filter(filtrarIdade).map(liberarAcesso);
console.log(sistema);

//-------------------------------------------------------------
console.log("-------------------------------------------------------------");
//-------------------------------------------------------------

const produtos = [
    { nome: 'Notebook', preco:2499, fragil:true},
    { nome: 'iPad Pro', preco:4199, fragil:true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plástico', preco: 18.99, fragil:false}
]
console.log('produtos',produtos);

const removerTudo = element => false;

produtosFiltros = produtos.filter(removerTudo);
console.log(produtosFiltros); // [] -> Array vazio, porque retornamos tudo false.

const verifyPrice = element => element.preco > 500;
produtosFiltrosNovos = produtos.filter(verifyPrice);
console.log(produtosFiltrosNovos); // Somente produtos com preço maior que 500