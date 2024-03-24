const prompt = require('prompt-sync')();

console.log("Calculadora de custo final de carro com variáveis")
const custo_fabrica = Number(prompt("Digite o custo de fábrica do carro: "));
const percentual_distribuidor = Number(prompt("Digite o percentual do distribuidor: "));
const impostos = Number(prompt("Digite o valor dos impostos: "));

const custo_final = custo_fabrica * (1 + (percentual_distribuidor + impostos) / 100);

console.log(`O custo final do carro ao consumidor é: R$ ${custo_final.toFixed(2)}`);
