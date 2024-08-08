/* Laço de Repetição For
Laços oferecem um jeito fácil e rápido de executar uma ação repetidas vezes.
*/

/*
for (let i=0; i < 10001; i++) {
    document.getElementById("teste").innerHTML += i + ", ";
}
*/ //<-- Para fazer um laço simples de repetição de números

/*
var ano = new Date().getFullYear();

for (let i=ano; i >= 1900; i--) {
    document.getElementById("ano").innerHTML += "<option valur='"+i+"'>"+i+"</option>";
} 
*/  //<-- Para fazer uma lista de selecionar o ano. Mesma lógica do crescente mas agora decrescente.

const carros = ["Gol", "Fusca", "Brasilia", "Del Rey", "Chevette"];
var tamanho = carros.length; //length pega o tamanho da matriz

for(let i=0; i<tamanho; i++){
    document.getElementById("teste").innerHTML += carros[i] + " - ";
}
