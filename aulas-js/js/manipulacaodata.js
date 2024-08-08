/* MANIPULAR DATAS EM JAVASCRIPT */

//COMANDO BASE PARA PEGAR A DATA
let data = new Date();
//console.log(data);

//SERVE PARA PEGAR O ANO ATUAL
let ano = data.getFullYear(); 
//console.log(ano);

//SERVE PARA PEGAR O MÊS ATUAL - DE 0 ATÉ 11 SENDO 0 JANEIRO E 11 DEZEMBRO
let mes = data.getMonth();
//console.log(mes);
const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
//MOSTRAR O MÊS ESCRITO
let mesEscrito = mesesDoAno[data.getMonth()];
//console.log(mesEscrito);

//PEGAR DIA DO <ÊS - 1 ATÉ 31
let diaMes = data.getDate();
//console.log(diaMes);

//MOSTRAR O DIA DA SEMANA - 0 ATÉ 6
let diaSemana = data.getDay();

const diasDaSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
let diaSemanaEscrito = diasDaSemana [data.getDay()];
//console.log(diaSemanaEscrito);

//PEGAR A HORA - DE 0 ATÉ 23
let hora = data.getHours();
//console.log(hora);

//PEGAR OS MINUTOS - DE 0 ATÉ 59
let minutos = data.getMinutes();
//console.log(minutos);

//PEGAR OS SEGUNDOS - DE 0 ATÉ 59
let segundos = data.getSeconds();
//console.log(segundos); 

//PEGAR MILISEGUNDOS - DE 0 ATÉ 999
let milisegundos = data.getMilliseconds();
//console.log(milisegundos);

//PEGAR A DATA NO PADRAO BRASILEIRO - DIA / MES / ANO - ENCURTADA
//let dataBR = data.toLocaleString('pt-BR', {dateStyle:'short'});
//console.log(dataBR);

//PEGAR A DATA NO PADRAO BRASILEIRO - DIA / MES / ANO
let dataBR = data.toLocaleString('pt-BR');
//console.log(dataBR);

//PEGAR A DATA NO PADRAO BRASILEIRO - DIA / MES / ANO - SÓ A HORA
//let dataBR = data.toLocaleString('pt-BR', {timeStyle:'short'});

//PEGAR OS VALORES SEPARADOS
d = new Date ();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero (x) {return x < 10 ? '0'+ x : ''+ x};

let dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
//console.log(dataPadraoBR);

//COMPARAR DATAS - MAIOR OU MENOR. EX: VENCIMENTOS
var hoje = new Date();
var vencimento = new Date(2022, 0, 15);

if (hoje > vencimento) {
    console.log("Sua conta está vencida!");
} else{
    console.log("Ainda não venceu, tudo certo!");
}

//DIFERENÇA ENTRE DUAS DATAS EM DIAS
var dataInicial = new Date();
var dataFinal = new Date(2026, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

console.log(diferencaDias); //<-- uma formula para mostrar a diferença de dias de um ano para o outro.
