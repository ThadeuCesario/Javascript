var sexo = 'F';
var idade = 30;

if(sexo === 'M' && idade >= 18){
  console.log('OK - AND');
}

if(sexo === 'M' || idade >= 18){
  console.log('OK - OR');
}

if(sexo !== 'M'){
  console.log('Não é do sexo masculino');
}