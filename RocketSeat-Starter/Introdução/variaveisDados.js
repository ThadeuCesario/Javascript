/**
 * O javascript é uma linguagem fracamente tipada.
 */
var nome = "Thadeu"; 
console.log(nome);

nome = 2 
console.log(nome);

/**
 * Tipos de variáveis javascript
 */
var nome = "Thadeu"; //String
var idade = 25; //Integer
var peso = 80.5; //Float
var humano = true; //Boolean
var alunos = ['Ana', 'João', 'Maria']; //Arrays
var aluno = { nome: 'Thadeu', idade:25, peso: 80.5, humano: true}; //Object

console.log(`
  nome: ${nome},
  idade: ${idade},
  peso: ${peso},
  humano: ${humano},
  alunos: ${alunos},
  aluno: ${aluno.nome}
`);

/**
 * Objetos utilizamos a notação ponto.
 */
