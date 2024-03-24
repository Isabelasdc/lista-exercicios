const prompt = require('prompt-sync')();

console.log("Calculadora de média ponderada")
const nota1 = Number(prompt("Digite a primeira nota do aluno: "));
const nota2 = Number(prompt("Digite a segunda nota do aluno: "));

const media_final = (nota1 * 4 + nota2 * 6) / 10;

console.log(`A média final do aluno é: ${media_final.toFixed(2)}`);
