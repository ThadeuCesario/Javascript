const alunos = [
    {nome:'João', nota:7.0, bolsista:false},
    {nome:'Ana', nota:8.0, bolsista:false},
    {nome:'Pedro', nota:9.0, bolsista:true},
    {nome:'Maria', nota:6.5, bolsista:false},
    {nome:'Thadeu', nota:7.1, bolsista:false},
]

const arrayBolsista = alunos.map(a => {
    a.bolsista;
    console.log(a)});


// Desafio 1: Todos os alunos são bolsistas?
const desafioUm = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    return acumulador && atual;
});
console.log(desafioUm);

// Desafio 2: Algum aluno é bolsista?
const desafioDois = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    return acumulador || atual;
});
console.log(desafioDois);