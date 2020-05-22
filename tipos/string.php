<div class="titulo">String</div>

<?php

echo 'Eu sou uma string';
echo '<br />';
var_dump("Eu também"); // Retorna o tipo e o tamanho da string como 10, lembrando que há um problema com UTF-8.
echo '<br />';

/**
 * Concatenação
 * No PHP utilizamos o ponto ( . ) para realizar a concatenação entre strings. Geralmente na maioria das linguagens
 * é utilizado o sinal de +.
 * 
 * Lembre-se que o comando echo, suporta várias string desde que esteja separado por vírgula.
 * 
 * O procedimento de aspas simples e duplas é igual ao Javascript.
 * 
 * Podemos utilizar o scape para colocar uma string com aspas simples, dentro de aspas simples:  '\'Teste'\'
 * Funciona para aspas duplas também. Para imprimir um barra '\' basta colocar dois barras '\\'.
 * 
 * Outra alternativa para imprimirmos um texto na tela é utilizando a função print().
 * Então podemos substituir o echo pelo print.
 * 
 * Podemos utilizar a função strtoupper para transformar um texto em uppercase.
 * Podemos utilizar a função strtolower para transformar um texto em lowercase.
 * Podemos utilizar a função ucfirst para transformar somente a primeira letra de um texto em maiúscula.
 * Podemos utilizar a função ucwords para transformar a primeira letra de todas as palavras em maiúscula.
 * Podemos utilizar a função strlen para calcular o tamanho de uma string. Lembrando que tem o problema de utf-8.
 * Podemos utilizar a função mb_strlen para calcular o tamanho de uma string. Se necessário para o paramentro de enconding. Exemplo: mb_strlen('Eu também', 'utf-8');
 * 
 * Função substr
 * Exemplo: echo substr('Utilizando a função substr', 7, 6); //ndo a 
 * Na função o cursor começará a ler apartir do índice 7. Depois vai ler mais 6 posições sem entrar a sexta.
 * Se eu não colocar o segundo parâmetro, será lido até o final.
 * 
 * 
 * Função str_replace
 * Exemplo: str_replace('isso', 'aquilo', 'Trocar isso');
 * Essa função funciona da seguinte forma. 
 * O primeiro parametro é a palavra que estamos buscando e que será substituída.
 * O segundo parametro é a palabra que subtituira a palavra do primeiro parametro.
 * O terceiro parametro é a string que será analisada, ou seja, é nela que será feita a busca e possível troca da palavra 'isso' por 'aquilo'.
 */

 echo 'Eu ' . 'estou ' . 'concatenando ' . 'essa ' . 'string.';

 echo '<br />', 'Echo aceita ', 'varias strings separando por ', 'virgulas !!!';

 echo '<br />', '"Aspas Duplas Aparecendo"', '<br/>' ,"'Aspas Simples Aparecendo'";

 echo '<br />';

 echo 'Utilizando o scape: ', '\'Teste\''; 

 echo '<br />';

 print('String utilizando a função print (com parênteses)');

 echo '<br />';

 print 'String utilizando a função print (sem parênteses)';

 echo '<br />';

 echo ('Posso utilizar parênteses no echo também ! =D');

 echo '<br />';

 echo strtoupper('Testando funÇÃo para uppercase - strtoupper');

 echo '<br />';

 echo strtolower('TESTANDO FUNçãO PARA LOWERCASE - strtolower');

 echo '<br />';

 echo ucfirst('somente a primeira letra maiúscula - ucfirst'); 

 echo '<br />';

 echo ucwords('todas as primeiras letras de todas as palavras ficarão em maiúscula. - ucwords');

 echo '<br />';

 echo 'Calcula o tamanho da string: ', strlen('Calcula o tamanho da string: ');

 echo '<br />';

 echo 'Calcula o tamanho da string: ', mb_strlen('Eu também', 'utf-8');

 echo '<br />';

 echo substr('Utilizando a função substr', 7, 6);

 echo '<br />';

 echo str_replace('isso', 'aquilo', 'Trocar isso');

 echo '<br />';
 
?>