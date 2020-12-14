/* Lembrando que um MAP serve para transformar um array em outro array.
 * Se o array original possui seis elementos o map vai gerar um outro array com seis elementos
 * também porém com os dados transformados.
 */

let productsID = [2, 4 , 7, 8, 12, 24, 32];

const doubleValue = function(element, index, array){
    console.log(`element: ${element} | index: ${index} | array:${array}`);
    return element * 2;
}

let productDoubleID = productsID.map(doubleValue);
console.log(`Valor com map: ${productDoubleID}`);

//-------------------------------------------------------------
console.log("-------------------------------------------------------------");
//-------------------------------------------------------------

let productsSKU = [10, 15, 45, 60, 8, 20, 32, 11, 87, 95, 55, 63, 17, 58, 97, 14, 25, 1];

const verifySku = (element, index, array, idk) => {
    console.log(`element: ${element} | index: ${index} | array: ${array}`)
    if(element <= 20) return `${element}P`;
    else if(element > 21 && element <= 50) return `${element}M`;
    else return `${element}G`
}

let finalProductsSKU = productsSKU.map(verifySku);
console.log(finalProductsSKU);

//-------------------------------------------------------------
console.log("-------------------------------------------------------------");
//-------------------------------------------------------------

let notas = [7, 8.5, 4, 6, 5, 2, 10];

const pesoNotas = element => (element * 0.7) + (3 * 0.3);
const aprovados = element => element >= 5 ?  'Aprovado' :  'Reprovado'

alunosAprovados = notas.map(pesoNotas).map(aprovados);
console.log(alunosAprovados);

//-------------------------------------------------------------
console.log("-------------------------------------------------------------");
//-------------------------------------------------------------

const carrinho = [
    '{"nome":"Borracha", "preco":3.45}',
    '{"nome":"Caderno", "preco": 13.90}',
    '{"nome":"Kit de lápis", "preco":41.22}',
    '{"nome":"Caneta", "preco": 7.50}'
]

const parse = element => JSON.parse(element);
const getPrice = element => element.preco

let produtoPreco = carrinho.map(parse).map(getPrice);
console.log(produtoPreco);

//-------------------------------------------------------------
console.log("-------------------------------------------------------------");
//-------------------------------------------------------------

let levelJogadores = ['Archer','Ninja','Monk','Trojan','Warrior','Pirates','Fire Taoist','Water Taoist'];

let verifyPlayers = (element, index, array) => {
    if(element == 'Ninja' || element == 'Trojan'){
        console.log('avaliando elemento' + element);
        return `${element} not available`;
    }
    else {
        return `${element} available`;
    }
}
let finalPlayers = levelJogadores.map(verifyPlayers);
console.log(finalPlayers);