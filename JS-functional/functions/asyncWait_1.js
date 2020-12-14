/**
 * Async e Await
 * Basicamente o async await força o aguardar a finalização de um determinado trecho de código.
 * Sempre que temos uma função que retorna um Promise, podemos aplicar o await.
 * 
 * Quando marcamos uma função com async, temos a possibilidade de aguardar que uma promise seja executada dentro dela,
 * sem necessariamente utilizar o método then. 
 */

function esperarPor(tempo = 2000) {
  return new Promise(function(resolve){
    setTimeout(() => resolve(), tempo);
  });
}

esperarPor(2000)
  .then(() => console.log('Executando promise 1.....'))
  .then(esperarPor)
  .then(() => console.log('Executando promise 2.....'))
  .then(esperarPor)
  .then(() => console.log('Executando promise 3.....'));

  function retornarValor() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(10)
      }, 5000);
    });
  }


async function executar() {
  let valor = await retornarValor();

  await esperarPor(1500);
  console.log(`Async/Await ${valor}...`);

  await esperarPor(1500);
  console.log(`Async/Await ${valor + 1}...`);

  await esperarPor(1500);
  console.log(`Async/Await ${valor + 2}...`);

  return valor + 3;
}

async function getValue() {
  const valor = await executar();
  console.log(valor);
}

getValue();

