<div class="titulo">Tipo Inteiro</div>

<?php
/**
 * Para mostrar o tipo de uma variável podemos utilizar a função var_dump()
 * Sendo que o var_dump() observa a variável e te passa algumas informações sobre ela.
 * O interpretador terá conhecimento dos tipos das variáveis.
 * 
 * O PHP_INT_MAX é uma constante interna do próprio php que nos retorna o valor máximo 
 * inteiro que é suportado pela sua máquina.
 * Em php temos somente um tipo inteiro, diferente de outras linguagens que possuem
 * mais tipos inteiros para numeros menores por exemplo.
 * 
 * O PHP_INT_MIN retorna o valor mínimo de uma variável do tipo inteiro.
 * 
 * Podemos representar números utilizando outras bases, como binária, hexadecimal..
 * Quando colocamos um zero na frente de um número inteiro, significa que estamos
 * representando o número em uma base octal.
 */
  echo 11;
  echo '<br>';

  var_dump(11); //int(11)
  echo '<br>';

  echo PHP_INT_MAX, '<br>'; //9223372036854775807
  echo PHP_INT_MIN, '<br>'; //-9223372036854775808
  echo 011, '<br>'; //Base octal temos número de 0 a 7. 
  echo 0b1010101011011, '<br>'; //Base binária.
  echo 0x1acF5e1; //Base Hexadecimal -> Podemos ir de 0 até F
?>