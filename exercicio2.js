const prompt = require('prompt-sync')();

console.log("Calculadora de votos")
const eleitores = Number(prompt("Digite o número total de eleitores: "));
const brancos = Number(prompt("Digite o número de votos em branco: "));
const nulos = Number(prompt("Digite o número de votos nulos: "));
const validos = Number(prompt("Digite o número de votos válidos: "));

const percentual_brancos = (brancos / eleitores) * 100;
const percentual_nulos = (nulos / eleitores) * 100;
const percentual_validos = (validos / eleitores) * 100;

console.log(`Percentual de votos em branco: ${percentual_brancos.toFixed(2)}%`);
console.log(`Percentual de votos nulos: ${percentual_nulos.toFixed(2)}%`);
console.log(`Percentual de votos válidos: ${percentual_validos.toFixed(2)}%`);
