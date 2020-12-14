//Primeira versão, sem valor inicial
Array.prototype.reduce2 = function(callback){
    let acumulador = this[0];
    for(let i=1; i<this.length; i++){
        acumulador = callback(acumulador, this[i], i, this);
    }
    return acumulador;
}

const soma = (total, valor) => total + valor;
const nums = [1,2,3,4,5,6];
console.log(nums.reduce2(soma));

//Segunda versão, com valor inicial
Array.prototype.reduce3 = function(callback, valorInicial){
    const indiceInicial = valorInicial ? 0 : 1;
    let acumulador =  valorInicial || this[0];
    for(let i = indiceInicial; i<this.length; i++){
        acumulador = callback(acumulador, this[i], i, this);
    }
    return acumulador;
}

const soma2 = (total, valor) => total + valor;
const nums2 = [1,2,3,4,5,6,7];
console.log(nums2.reduce3(soma2, 10));