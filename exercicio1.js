const prompt = require('prompt-sync')();

console.log("Exercicio 1")
console.log("Calcular média")

const nota1 = Number(prompt("Digite a nota 1:"))
const nota2 = Number(prompt("Digite a nota 2:"))
const nota3 = Number(prompt("Digite a nota 3:"))
const nota4 = Number(prompt("Digite a nota 4:"))

console.log(nota1)
console.log(nota2)
console.log(nota3)
console.log(nota4)

const media = (nota1 + nota2 + nota3 + nota4) / 4
console.log("Sua média é: " + media)

if(media >= 7){
    console.log("Você foi APROVADO!")
}else {
    console.log("Você foi REPROVADO!")

}

