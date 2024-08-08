/* CLASSES EM JAVASCRIPT

Em 2015 foi introduzido no JavaScript as Classes. As classes são um coneito antigo em programação e várias linguagens utilizam elas. Mas no JavaScript isso é relativamente novo, por isso mesmo programadores experientes não sabem muito bem utilizar.

Basicamente, as calsses são como "fábricas" para criar objetos.
Pode se dizer que são "funções especiais" para criação de objeto.

Assim como uma fábrica da vida real precisa das máquinas para construir os objetos, as Classes no JavaScript usam um método chamado constructor() para fabricar os objetos.
 */

//this <- significa este

class Carro {
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    } 
    buzina(){
        return this.modelo+ " buzinou: Biiiii";
    }
}

const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volkswagen", "Gol", 2013);
console.log(uno.buzina());
console.log(gol.buzina());
gol.ano = 2014;
console.log(gol);
console.log(uno);

// As declarações de class, para construir o objeto precisa da "fabrica", as classes sempre precisa ser declarada antes das chamadas a diante.