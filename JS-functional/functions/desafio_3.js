const fs = require('fs');
const path = require('path');

function readFile(caminho) {
  return new Promise(function(resolve){
    fs.readFile(caminho, {}, (_, conteudo) => resolve(conteudo.toString()));
  })
}

const caminho = path.join(__dirname, 'dados.txt');

readFile(caminho)
  .then(console.log);