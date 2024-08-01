//Arquivo externo, de um index direto de Java Script

/*
document.getElementById("texto").innerHTML="Meu primeiro texto  <b>JS</b>!"; // formas de mensagens
alert('Mais uma maneira de saida de dados pelo JS'); // são maneiras de saida de dados do JS
console.log("Oi isso é um alerta, mais uma forma de saida de dados pelo JS, de forma mais escondida."); // são formas de mensagens
*/
/*
var a = 1;
var b = 5;
var c = a + b;
alert(c);
console.log(c);
*/

// o JavaScript ele muda conforme tamanho das letras, então tem que escrever exato as variaveis e nomes. 

/* 
Vamos entender Variáveis 
Variáveis são "recipientes" oonde podemos armazenar informações que podem variar, ou seja, podem ter qualquer tipo de valor.

No JavaScript temos 3 palavras-chaves para declarar variáveis:
-> var
-> let
-> const
*/
// var a,b,c <- Declaração de variaveis
// a=2; b=3; c=a+b; <- Atribuição de valores

/* 
Vamos entender Operadores:
-> Os operadores JavaScript são usados para atribuir valores, comparar valores, executar opreações aritméticas e muito mais.

São os sinais que usamos: + - * / = ++ -- += -= && || etc...

São separados em 6 "categorias";

1) Operadores Aritméticos (matemáticos)

2) Operadores de Atribuição (Atribuir valor a uma variável)

3) Operadores de Sequência (Serve para concatenar varias strings varios textos em um ponto só)

4) Operadores de Comparação (Comparar dois tipos de variáveis para ver se é verdadeiro ou falso)

5) Operador Condicional (Ternário) (atribuir um valor a uma variável, já determinar uma condição nela)

6) Operadores Lógicos
*/

//OPERADORES DE COMPARAÇÃO (SINAL ==) COM DOIS SINAIS MOSTRA APENAS SE O VALOR É IGUAL, USANDO 3 SINAIS DE (===) VAI MOSTRAR SE O VALOR É IGUAL E SE O TIPO TAMBÉM É IGUAL

/*
var v1, v2, total;
v1 = 10;
v2 = "10";
 
total = (v1 === v2); //RETORNARA UM VALOR TRUE(Verdadeiro) OU FALSE(Falso)
alert(total);
*/

/*
var v1, v2, total;
v1 = 10;
v2 = "10";

total = (v1 !== v2); // ESSE SINAL SIGNIFICA DIFERENTE OU NÃO IGUAL
alert(total);
*/

/*
var v1, v2, total;
v1 = 10;
v2 = 12;

total = (v1 + v2 <= 22); // MENOR < OU IGUAL OU MAIOR >
alert(total);
*/
/*
var idade, eleitor;
idade=26;
eleitor= (idade<18) ? "Não Eleitor": "Sim, eleitor";
alert('A resposta é '+ eleitor + ' ,a idade dele é de ' + idade);
*/
 //Condição operacional ternario (coloca condição uma ? o valor se for verdadeiro depois : e oque acontece se for falso, ai coloca o retorno da variável, oque leva no operador condicional ternario.)


 // Esses são os operadores lógicos
/*
 var idade, eleitor;
idade=62;
eleitor= (idade < 18) ? "Não Eleitor" : "Sim, eleitor";
//o simbolo && (dois EE comercial significa E)
resultado = (idade > 60 && idade < 70);

alert(resultado);
*/

/*
var idade, eleitor;
idade = 72;
eleitor = (idade < 18) ? "Não Eleitor": "Sim, eleitor";

resultado = (idade ===65 || idade ===72); // As duas || significa OU, tem que ser alguma das condições
alert(resultado);
*/
/*
var idade, eleitor;
idade=65;
eleitor= (idade<18) ? "Não Eleitor": "Sim, eleitor";

resultado = ! (idade === 65); // a ! é um simbolo de negação
alert(resultado);
*/

// Operadores logicos && (E) || (ou) ! (negação)