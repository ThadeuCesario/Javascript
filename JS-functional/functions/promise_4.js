function gerarNumerosEntre(min, max, tempo = 2000){
  if(min > max) [min, max] = [max, min];
 
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(parseInt(Math.random() * (max - min + 1)) + min);
    }, tempo);
  })
}

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 2130, 2500),
    gerarNumerosEntre(1, 59989898, 150),
  ]);
}

console.time('promise');
gerarVariosNumeros()
  .then(console.log)
  .then(() => {
    console.timeEnd('promise');
  });

