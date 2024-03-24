const prompt = require('prompt-sync')();

console.log("Exercicio 9")
console.log("Calculadora de soma e multiplicação")
const num1 = Number(prompt("Digite um número:"))
const num2 = Number(prompt("Digite outro número:"))


const soma = (num1 + num2) 

const resultado = soma * num1


console.log(`A soma de ${num1} e ${num2} é ${soma}, e o resultado da multiplicação pelo primeiro número é ${resultado}`);