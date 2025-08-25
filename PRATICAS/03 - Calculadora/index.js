/*console.log("########### PROJETO CALCULADORA ########## ")
let prompt = require('prompt-sync')()

let {soma,
    subtracao,
    mult,
    div,
    potencia,
    raiz} = require('./calculo.js')

let n1 = parseFloat(prompt("Qual o primeiro número? "))
let n2 = parseFloat(prompt("Qual o segundo número? "))
let rsoma = soma(n1,n2)
console.log("A soma dos Números é " + rsoma)
let rsub = subtracao(n1,n2)
console.log("A subtração dos Números é " + rsub)
let rmult = mult(n1,n2)
console.log("A múltiplicação dos Números é " + rmult)
let rDiv = div(n1,n2)
console.log("A divisão dos Números é " + rDiv)
let rPot1 = potencia(n1)
console.log("A potência do primeiro número é " + rPot1)
let rPot2 = potencia(n2)
console.log("A potência do segundo número é " + rPot2)
let raiz1 = raiz(n1)
console.log("A raiz do primeiro número é " + raiz1)
let raiz2 = raiz(n2)
console.log("A raiz do segundo número é " + raiz2)*/

console.log("########### PROJETO CALCULADORA ########## ");

let prompt = require('prompt-sync')();

let {
    soma,
    subtracao,
    mult,
    div,
    potencia,
    raiz
} = require('./calculo.js');

let operacao = prompt("Qual operação deseja fazer? (soma, subtracao, mult, div, potencia, raiz): ").toLowerCase();

let n1, n2, resultado;

if (operacao === 'raiz') {
    n1 = parseFloat(prompt("Digite o número para calcular a raiz: "));
    resultado = raiz(n1);
    console.log(`A raiz quadrada de ${n1} é ${resultado}`);
} else if (operacao === 'potencia') {
    n1 = parseFloat(prompt("Digite a base: "));
    n2 = parseFloat(prompt("Digite o expoente: "));
    resultado = potencia(n1, n2);
    console.log(`${n1} elevado a ${n2} é ${resultado}`);
} else if (operacao === 'soma') {
    n1 = parseFloat(prompt("Digite o primeiro número: "));
    n2 = parseFloat(prompt("Digite o segundo número: "));
    resultado = soma(n1, n2);
    console.log(`A soma de ${n1} e ${n2} é ${resultado}`);
} else if (operacao === 'subtracao') {
    n1 = parseFloat(prompt("Digite o primeiro número: "));
    n2 = parseFloat(prompt("Digite o segundo número: "));
    resultado = subtracao(n1, n2);
    console.log(`A subtração de ${n1} e ${n2} é ${resultado}`);
} else if (operacao === 'mult') {
    n1 = parseFloat(prompt("Digite o primeiro número: "));
    n2 = parseFloat(prompt("Digite o segundo número: "));
    resultado = mult(n1, n2);
    console.log(`A multiplicação de ${n1} e ${n2} é ${resultado}`);
} else if (operacao === 'div') {
    n1 = parseFloat(prompt("Digite o primeiro número: "));
    n2 = parseFloat(prompt("Digite o segundo número: "));
    resultado = div(n1, n2);
    console.log(`A divisão de ${n1} e ${n2} é ${resultado}`);
} else {
    console.log("Operação inválida.");
    console.log("TESTE")
}






   