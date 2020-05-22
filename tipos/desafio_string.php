<div class="titulo">Desafio String</div>

<?php
  /**
   * Enunciado:
   * Avaliando os métodos da documentação da string, qual o método que a posição do texto 'abc'
   * na string '!AbcaBcabc' retorne 1.
   * 
   * strpos -> É case sensitive
   * stripos -> É case insentive! ;) 
   */
   
   echo strpos('!AbcaBcabc', 'abc'); //7
   echo '<br />';
   echo stripos('!AbcaBcabc', 'abc'); //1
   echo '<br />';
   echo strpos(strtolower('!AbcaBcabc'), 'abc'); // 1

?>