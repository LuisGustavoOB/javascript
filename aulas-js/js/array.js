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

pessoaa[pessoaa.length] = "Casado"; // <- Também adiciona item na lista da matriz.

Array.isArray(pessoaa); // <-- Para descobrir se é um Array dentro da (é a variavel que quer descobrir.)