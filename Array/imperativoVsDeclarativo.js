const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

// Calcular a média - modo declarativo

const calcularMedia = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    return acumulador+atual
});
console.log(calcularMedia/alunos.length);

// Calcular a média - modo imperativo;

var somaNota = 0;
for(var i = 0; i<alunos.length; i++){
    somaNota += alunos[i].nota;   
}
console.log(somaNota / i);

/**
 * Na maneira imperativa o 'como deve ser feito' se torna mais importande do que o próprio 'o que deve ser feito'.
 * Na maneira declarativa, apenas informamos o que desejamos e é feito de uma forma muito mais dinâmica.
 * 
 */
