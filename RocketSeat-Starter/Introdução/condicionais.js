function retornarSexo(sexo){
  if(sexo === 'M'){
    return 'Masculino';
  }
  else if(sexo === 'F'){
    return 'Feminino';
  }
  else{
    return 'Outro';
  }
}
var resultado = retornarSexo('M');
console.log(resultado);

function retornarSexoSwitch(sexo){
  switch(sexo){
    case 'M': 
      return 'Masculino'
      // break;
    case 'F':
      return 'Feminino';
      // break;
    default:
      return 'Outro';
  }
}

var sexoFinal = retornarSexoSwitch('F');
console.log(sexoFinal);