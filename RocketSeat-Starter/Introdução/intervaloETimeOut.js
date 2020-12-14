/**
 * Um intervalo em javascript é alguma função que executa várias vezes dentro de um intervalo.
 */

 function depoisDeUmSegundo(){
   console.log('1');
 }
 function depoisDeCincoSegundos(){
  console.log('5');
}
setInterval(depoisDeUmSegundo, 1000);
 setTimeout(depoisDeCincoSegundos, 5000);