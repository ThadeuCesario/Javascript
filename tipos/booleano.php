<div class="titulo">Tipo Booleano</div>

<?php
  /**
   * PHP possui dois valores literais para booleano, que são true ou false (não é case sensitive).
   * O true será convertido para um para a exibição do browser.
   * O false não terá representação no browser.
   * Semelhante ao nosso amado javascript. O PHP também consegue converter strings e números para true ou false.
   * 
   * Função is_bool -> Utilizar para determinar se um valor é ou não booleano.
   */

  echo true; // 1
  echo '<br />';
  echo false;
  echo '<br />';
  var_dump(true);
  echo '<br />';
  var_dump(false);
  echo '<br />';
  echo is_bool(false); // 1 (true)
  echo '<br />';
  echo is_bool('qualquer coisa'); // Não retorna nada (false)


  /**
   * Regras de conversões
   */

   echo '<p>Regras: </p>';
   echo '<br />'. var_dump((bool) 0);           // bool(false)
   echo '<br />'. var_dump((bool) 20);          // bool(true)
   echo '<br />'. var_dump((bool) -1);          // bool(true) -> Número negativos são resolvidos para verdadeiros. 
   echo '<br />'. var_dump((bool) 0.0);         //bool(false)
   echo '<br />'. var_dump((bool) 0.00000001);  //bool(true)
   echo '<br />'. var_dump((bool) "");          //bool(false) -> string vazia resolve para false
   echo '<br />'. var_dump((bool) " ");         //bool(true) -> string com conteúdo resolve para true
   echo '<br />'. var_dump((bool) "0");         //bool(false) -> Somente se for uma string com um zero, que resolverá para false.
   echo '<br />'. var_dump((bool) "00");
   echo '<br />'. var_dump(!!"igual ao javascript"); //igual ao javascript ;D show!!!!
?>