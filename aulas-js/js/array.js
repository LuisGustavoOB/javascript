/* ARRAYS (Matrizes)
Os arrays JavaScript são usados para armazenar vários valores em uma única variável. Diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá para os itens dentro dele, os arrays não possuem propriedades. O item dentro dele  é encontrado pela posição.

Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele.

Ex: const lista = ["arroz","feijão","macarrão","leite"];

A lista[0] (lista na posição 0) vai conter o valor "arroz".
A lista[1] (lista na posição 1) vai conter o valor "feijão".

E assim por diante.
*/

//ARRAY

const pessoaa = ["Dimitri", "Teixeira", 30]; //Array

//OBJETO

const pessoa = {nome:"Dimitri", sobrenome:"Teixeira", idade:30}; //Objeto 


//Para descobrir quantos itens tem dentro da Array

pessoaa.length; // <- Mostra o tanto de item dentro da matriz ( Array)

pessoaa[0]//<- Mostra o primeiro valor, se altera o numero dentro do conchete ele altera o valor mostrado.

alert(pessoaa[pessoaa.length -1]); // <- Mostrara o ultimo item da matriz (Array)

pessoaa.push("Brasileiro"); //<- Acrecenta o item na lista fechada.
pessoaa.unshift(); // <<-- Adiciona um item na primeira posição da matriz.
pessoaa.splice(1,0, "Item Adicionado 1", "Item Adicionado 2"); //<-- Adiciona item na posição que quer (primeiro número) Escolhe quantos itens vai ser deletado (segundo número) e adiciona os items que deseja. 
pessoaa.pop(); //<-- Remove o Ultimo item da lista com o método pop
pessoaa.shift(); //<<-- Remove o primeiro item da lista

delete pessoaa[0]; //<<-- Ele deleta um item da posição e deixa a posição undefined "não muito recomendado".

pessoaa[pessoaa.length] = "Casado"; // <- Também adiciona item na lista da matriz.

Array.isArray(pessoaa); // <-- Para descobrir se é um Array dentro da (é a variavel que quer descobrir.)

//METODO JOIN


//document.getElementById("texto").innerHTML = pessoaa.join(" - "); <<-- Usando o JOIN ele troca o item da matriz

//COMO JUNTAR VARIAS MATRIZES EM UMA SÓ, CONCATENAR ELAS.

/*const lista1 = ["Arroz", "Feijão", "leite", "Macarrão"];
const lista2 = ["Suco", "Refrigerante", "Carne"];
const lista3 = ["Salgadinho"];

const superLista = lista1.concat(lista2, lista3);

document.getElementById("texto").innerHTML = superLista;
*/

/*
const jogadores = ["Biro Biro", "Ribamar", "Pelé", "Maradona"]
const craques = jogadores.slice(2); // <<-- Serve para cortar a lista (Matriz) e começar do meio ou do número onde você queira (fatiando ela).

const jogOrdem = jogadores.sort(); // <-- Deixa em ordem alfabética usando o metodo (.sort).
jogadores.reverse(); //<<-- Assim deixa de ordem de trás para frente, em ordem ao contrário
document.getElementById("texto").innerHTML = craques;
*/

const numeros = [40, 100, 1, 5, 25, 10];
/*
numeros.sort(functiona(a,b){return a-b}); // <<-- Essa formulazinha serve para deixa os números em ordem crescente, na ordem númerica correta. E para usar de trás para frente usa-se 
numeros.sort(functiona(a,b){return b-a});
*/

/*
function maiorNumero(array){
    return Math.max.apply(null, array);
} <<-- Serve para pegar o maior número da array selecionada.
 */
/*
function maiorNumero(array){
    return Math.min.apply(null, array); <<-- Aqui serve para pegar o menor número da array
 */


/*
const maior20 = numeros.filter(filtragem);

function filtragem (value, index, array){
    return value > 20;
}

*/  // Com o código acima a function mostra os valores maior que 20.