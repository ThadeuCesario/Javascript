<div class="titulo">Olá PHP</div>

<!-- No PHP a última sentença de código não precisa ter ponto e vírgula, porém seguindo
as boas práticas colocaremos em todas as linhas -->
<h2>Exemplo A</h2>
<?php
    echo 'Olá ';
    echo "<br>";
    echo 'Mundo!';
    echo "<br>";
?>

<!-- 
Outra forma que podemos escrever php é utilizando o bloco:  < ?= ?>, porém dessa forma
colocamos diretamente o que seja impresso no browser, sem a necessidade de utilizar echo. -->

<h2>Exemplo B</h2>
<?=
"Método secundário para retorno."
?>


<?php
 phpinfo();
