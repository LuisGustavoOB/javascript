/* JSON
 JSON siginifica JavaScript Object Notation que traduzido pro português fica algo como notação de objeto JavaScript.

 Explicando de um modo simples JSON é basicamente uma forma de converter um objeto em texto e o contrário também, um texto em um objeto.

 Ele é usado principalmente para transmitir dados entre sistemas de forma simples, já que o formato de texto é lido por praticamente toda linguagem de porgramação.

 Para trabalhar com JSON no JavaScript usamos dois métodos:

 JSON.parse() -> Converte texto no padrão JSON em objetos
 JSON.stringify() -> Converte objetos em texto padrão JSON
*/

//Objeto chamado carro
const carro = {
    marca: "Fiat", 
    modelo: "Uno",
    motor: ["1.0", "2.0", "3.0"]
}

//CONVERTEU PARA TEXTO JSON
let texto = JSON.stringify(carro);

//COLOCOU O TEXTO NO NOSSO HTML
document.getElementById('area').innerHTML = texto;

//CONVERTEMOS TEXTO EM OBJETO
let obj = JSON.parse(texto);

//PEGAMOS UM VALOR DESTE OBJETO
console.log(obj.motor[2]);