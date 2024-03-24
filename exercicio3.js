const prompt = require('prompt-sync')();

console.log("Calculadora de reajuste salarial")
const salario_atual = Number(prompt("Digite o salário mensal atual do funcionário: "));
const percentual_reajuste = Number(prompt("Digite o percentual de reajuste do salário: "));

const novo_salario = salario_atual * (1 + percentual_reajuste / 100);

console.log(`O novo salário do funcionário é: R$ ${novo_salario.toFixed(2)}`);
