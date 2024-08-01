/* FUNÇÕES
Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica.

É como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma saída.

Pode ser encarado como "mini-programas" projetados para fazer uma tarefa que vai contríbuir para todo código.

Uma função JavaScript é executada quando "algo" a invoca (chama-a).
*/

// Segue os passos para fazer uma function
//você adciona ela "function", atribui um nome a ela "function nome", depois coloca () para colocar parametros de entrada dentro ou deixa em branco logo em seguida abre as chaves {} para abrir o bloco de código. Ai vem com "return" que é o retorno que a saida irá dar.
//EXEMPLO:






//FUNÇÃO DE SOMA
/*
function soma(valor1,valor2){
    return valor1 + valor2;
}

//FUNÇÃO DE COTAÇÃO DO DOLAR
 function realParaDolar(real,cotacaoDolar){
    return real * cotacaoDolar;
 }

 var valorReal = 7.89;
 var cotacao = 5.08;

 var total = realParaDolar(valorReal, cotacao);

// document.getElementById("texto").innerHTML = soma(10,10)
//var total = soma(20, 22);
alert("O valor em real é R$: "+valorReal+" o valor em dólar U$ é: "+total);
*/

/*
function alertaHello() {
    alert("Olá pessoal");
}
*/
/*
function paraCelsius(valorFahrenheit) {
    return(5/9) * (valorFahrenheit-32);
}

var x = paraCelsius(77);
alert("A temperatura é de "+ x + " graus celsius");
*/







/* OBJETOS
Objetos são basicamente variáveis com muitos valores dentro.

Ex: const carro = {marca:"ford", modelo:"ka", ano: 2015}

Os valores dentro de um objeto são chamados propriedades.

Objetos também podem ter métodos. Um método é uma função colocadas dentro de uma propriedade.
*/

const carro = {
    marca:"ford",
    modelo: "ka", 
    ano: 2015, 
    placa: "ABC-1234",
    buzina: function() {alert('Biiiiiiiiiii')}, // Um método é quando cria uma propriedade com uma FUNCTION dentro dela.
    completo: function (){
    return "A marca é "+this.marca+ " e o modelo é: "+this.modelo
    }
    //Quando cria um OBJETO e quer pegar um item do próprio OBJETO voce tem que usar "this.nome da propriedade que quer"
};

console.log(carro.completo());