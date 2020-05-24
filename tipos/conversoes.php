<div class="titulo">Conversões</div>

<?php
    /* Podemos utilizar a função 'is_int' para determinar se um valor é ou não inteiro.
     * Lembrando que ser for verdadeiro o retorno será 1.
     *
     * Se eu pegar o valor máximo dos inteiros e somar 1, mudaremos para o range dos floats.
     *
     * A soma de um número inteiro com um número float exato, o resultado ainda será float.
     *
     * Quando realizamos um processo de casting, precisamos tomar cuidado para não perdermos informação.
     * Geralmente isso ocorre quando mudamos de um float para um int.
     *
     * A função intval é responsável por realizarmos conversões também, no primeiro parâmetro temos
     * a variável e no segundo temos a base que queremos converter. Podemos inclusive passar string para essa
     * função no primeiro parâmetro.
     *
     * Podemos verificar se algo é uma string utilziando a função is_string.
     */
    echo is_int(PHP_INT_MAX);
    echo '<br />';
    //int para float

    var_dump(PHP_INT_MAX + 1); // float(9.2233720368548E+18) -> Entrou no range dos floats.
    echo '<br />';
    var_dump(1 + 1.0); // float(2)
    echo '<br />';

    var_dump((float) 3); // Casting

    // float para int
    echo '<p>Float para int</p>';
    var_dump((int) 2.8); // int(2) -> Veja que mesmo o valor sendo próximo de 3, foi truncado e virou 2. (Casting aplicado)
    echo '<br />';
    var_dump(intval(2.8, 10));
    echo '<br />';
    var_dump((int) round(2.8)); // Fazemos uma conversão de float para inteiro, passando o round
    echo '<br />';

    // operações com string
    echo '<p>Strings</p>';
    var_dump(3 + "2"); //Resultado será 5 no PHP, diferente do Javascript que é 32.
    echo '<br />';
    var_dump("3" . 2); //string(2) "32" -> foi feto a concatenção.
    echo "<br />", is_string("3" . 2); // -> 1
    echo "<br />", is_string("3" + 2); // -> (false não retorna nada)
    echo "<br />";
    var_dump(1 + "cinco"); // Será ignorado o valor "cinco", pois não conseguiu fazer nenhuma operação
    echo "<br />";
    var_dump(1 + "5 cinco"); //O "cinco" será desconsiderado mas o "5" será considerado. Então o resultado é 6
    echo "<br />";
    var_dump(1 + "cinco 5"); //Nesse caso, não funcionará e o resultado será 1
    echo "<br />";
    var_dump(1 + "2+5"); //Ele só irá considerar até aonde possui número. Retorno é 3
    echo "<br />";
    var_dump(1 + "3.2"); //Será considerado o valor flutuante. Valor float(4.2)
    echo "<br />";
    var_dump(1 + "-3.2e2"); //Será considerado float(-319)
    echo "<br />";
    var_dump((int) "10.5"); // int(10) -> Será feito o casting normalmente
    echo "<br />";
    var_dump((float) "10.5"); // Conversão de uma string para um valor float

?>