const prompt = require('prompt-sync')();
const math = require('mathjs');

console.log("Calculadora de volume de caixa d'água")
const raio = Number(prompt("Digite o raio da caixa d'água: "));
const altura = Number(prompt("Digite a altura da caixa d'água: "));

const volume = math.pi * math.pow(raio, 2) * altura;

console.log(`O volume da caixa d'água é: ${volume.toFixed(2)}`);
