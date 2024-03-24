const prompt = require('prompt-sync')();

console.log("Calculadora de salário final de vendedor de carros usados")
const carros_vendidos = Number(prompt("Digite o número de carros vendidos: "));
const valor_vendas = Number(prompt("Digite o valor total das vendas: "));
const salario_fixo = Number(prompt("Digite o salário fixo do vendedor: "));
const comissao_por_carro = Number(prompt("Digite o valor da comissão por carro vendido: "));

const comissao_total = carros_vendidos * comissao_por_carro;
const percentual_vendas = 0.05 * valor_vendas;

const salario_final = salario_fixo + comissao_total + percentual_vendas;

console.log(`O salário final do vendedor é: R$ ${salario_final.toFixed(2)}`);
