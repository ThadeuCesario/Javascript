<div class="titulo">Operações Aritméticas</div>

<?php

  /**
   * Inteiro + Inteiro = Inteiro
   * Inteiro + Float = Float
   * 
   * Atenção divisão de números inteiros que é quebrada, o retorno será do tipo float.
   * Ou seja, o PHP não vai forçar um arredondamento para retornar um tipo inteiro.
   * A menos que deixemos explicito que queremos o retorno como inteiro.
   * Umas das formas que podemos fazer isso é utilizando a função 'intdiv'.
   */

  echo 1 + 1, '<br />';
  var_dump(1 + 1);   // retorno tipo int
  var_dump(1 + 1.0); // retorno tipo float
  echo '<br />';
  echo 1 + 2.5, '<br />';
  echo 10 - 2, '<br />';
  echo 2 * 5, '<br />';
  echo 7 / 4, '<br />'; // Retorno float -> 1.75
  echo intdiv(7, 4), '<br />'; // Retorno int -> 1 (valor truncado)
  echo round(7 / 4), '<br />'; // Retorno int -> 2 (Houve o arredondamento)
  echo 7 % 4, '<br />'; // Resto da divisão
  echo 7 / 0, '<br />'; // Retorno INF (infinito)
  //echo intdiv(7, 0); // Gera um erro!!
  echo 4 ** 2; //Exponenciação 4^²



  /*Precedência de operadores
   *  ()  => **  => * %  => + -
   */
  
   echo '<p>Precedência</p>';
   echo 2 + 3 * 4, '<br />';
   echo (2 + 3) * 4, '<br />';
   echo 2 + 3 * 4 ** 2, '<br />';
   echo ((2 + 3) * 4) ** 2;
?>