console.log("########### PROJETO 02 ########## - CALCULADORA DE NOTA")
let prompt = require('prompt-sync')()

let nome = prompt("Qual seu nome?")
console.log("Olá" + nome)

let {calcularNotaA1, calcularNotaA2, calcularNotaFinal} = require('./CalculadoraNota.js')

console.log("######### Nota A1 #########")
let exercicioA1 = parseFloat(prompt("Qual a nota de Exercicio? "))
let trabalhoA1 = parseFloat(prompt("Qual a nota de Trabalho? "))
let provaA1 = parseFloat(prompt("Qual a nota de Prova? "))
let notaA1 = calcularNotaA1(exercicioA1,trabalhoA1,provaA1)
console.log("Nota A1 Calculada " + notaA1)

console.log("######### Nota A1 #########")

console.log("######### Nota A2 #########")
let exercicioA2 = parseFloat(prompt("Qual a nota de Exercicio? "))
let trabalhoA2 = parseFloat(prompt("Qual a nota de Trabalho? "))
let provaA2 = parseFloat(prompt("Qual a nota de Prova? "))
let notaA2 = calcularNotaA1(exercicioA2,trabalhoA2,provaA2)
console.log("Nota A2 Calculada " + notaA2)

console.log("######### Nota A2 #########")

let media = calcularNotaFinal(notaA1,notaA2)
console.log("Média final: " + media)

if(media >=5){
    console.log("Aprovado")}
    else{
        console.log("Reprovado")
    }
   
