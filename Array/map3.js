Array.prototype.map2 = function(callback){
    const newArray = [];
    for(let i = 0; i<this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray;
}


const carrinho = [
    '{ "nome": "Borracha", "preco":3.45}',
    '{ "nome": "Caderno", "preco":13.90}',
    '{ "nome": "Kit de Lapis", "preco":41.22}',
    '{ "nome": "Caneta", "preco":7.50}'
]

//Retornar um array apenas com os preços

//Primeiramente, vamos montar uma função para converter esse JSON em Object
const converterParaObjeto = json => JSON.parse(json);

//Agora, vamos montar uma função para retornar o preco
const retornarPreco = produto => produto.preco;

console.log(carrinho.map2(converterParaObjeto).map2(retornarPreco));