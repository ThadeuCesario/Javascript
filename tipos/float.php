<div class="titulo">Tipo Float</div>

<?php 
  echo 1.1, '<br />';
  
  var_dump(1.1); // Lembrando que o var_dump() retorna informações sobre nosso valor -> float(1.1)
  echo '<br>';

  echo PHP_FLOAT_MAX, '<br>'; //Valor máximo tipo float -> 1.7976931348623E+308
  echo PHP_FLOAT_MIN, '<br>'; //Valor mínimo tipo float -> 2.2250738585072E-308
  echo 1.2e3, '<br>'; // Estamos realizando essa operação -> 1.2 x 10³ = 1200
  echo 13E-3; // Estamos realizando essa operação -> 13 x 0,001 = 0,013
?>