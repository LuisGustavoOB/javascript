/* EVENTOS DE TEMPO COM JAVASCRIPT

    Os eventos de tempo permitem a execução do código em intervalos de tempo especificados. Esses intervalos de tempo são chamados de eventos de cronometragem.

    Os dois métodos-chaves para usar com JavaScript são:

    SetTimeout (function, tempo em milisegundos)

    -> Executa uma função, depois de esperar um número especificado de milisegundos.

    SetInterval (function, milliseconds)

    -> é o mesmo que SetTimeout(), mas repete a execução da função continuamente.
 */

/*

function ativarContagem() {
    document.getElementById('tempo').innerHTML = "Começou a contar!";
    setTimeout(function(){
        document.getElementById('tempo').innerHTML = "Executou setTimeout";
     }, 2000);
}

function desativarContagem() {
    document.getElementById('tempo').innerHTML = "Parou de contar!";
    setTimeout(function(){
        document.getElementById('tempo').innerHTML = "Fechou o setTimeout";
     }, 2000);
}
 O setTimeout ativa o tempo uma vez quando der o tempo determinado.
*/

/*
function ativarContagem() {
    document.getElementById('tempo').innerHTML = "Começou a contar!";
    tempo = setTimeout(function(){
        document.getElementById('tempo').innerHTML = "Executou setTimeout";
     }, 5000);
}

function desativarContagem() {
    clearTimeout (tempo);
    document.getElementById('tempo').innerHTML = "Parou a contagem";
} //<-- O comando clearTimeout (id da contagem) para a contagem, interrompe antes dela terminar.
*/
/*
function ativarContagem() {
   tempo = setInterval(function(){
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt (cronometro) + 1;
        document.getElementById('tempo').innerHTML = soma;
    }, 1000);
}

function desativarContagem (){
    clearInterval (tempo);
    document.getElementById('tempo').innerHTML = "Parou a contagem";
} // clearInterval é para parar a contagem de tempo continuo
 */
function ativarContagem() {
    tempo = setInterval(function(){
         var cronometro = document.getElementById('tempo').innerHTML;
         var soma = parseInt (cronometro) -200;

         if(soma ===0){
            document.getElementById('tempo').innerHTML = "Tempo esgostado";
            desativarContagem()
         } else {
            document.getElementById('tempo').innerHTML = soma;
         }

     }, 1000);
 }

 function desativarContagem (){
    clearInterval (tempo);
    document.getElementById('tempo').innerHTML = "Parou a contagem";
 }