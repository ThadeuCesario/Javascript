Array.prototype.filter2 = function(callback){
    let newArray = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i]);
        }
    }
    return newArray;
}

const produtos = [
    {nome:'Notebook', preco: 2000,fragil:true},
    {nome:'Playstation', preco: 2300,fragil:true},
    {nome:'Galaxy S10', preco: 1800,fragil:true},
    {nome:'iPad', preco: 2100,fragil:true},
    {nome:'Bola', preco: 50,fragil:false}
]

const isFragile = produto => produto.fragil;
const maiorQue500 = produto => produto.preco > 500;
console.log(produtos.filter2(isFragile).filter2(maiorQue500));