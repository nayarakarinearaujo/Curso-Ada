
//Condicionais
 const prompt = require('readline-sync');

 //Fazer conversão diretamente após ler do usuário, primeiro ele vai conerter e depois jogar na variável idade
 const idade = Number(prompt.question('Qual a sua idade? '));


 //Estrutura condicional

 if (idade >= 18) {
    console.log("Você é maior de idade!")
 } else {
    console.log("Você é menor de idade!")
 }

 const mediaAluno = 10;

 if (mediaAluno >= 7) {
    console.log("Está aprovado")
 } else {
    console.log("Está reprovado :(")
 }

 //Exercicio
 //Media >= 7 aprovado
 //Media < 7 e >= 5 prova final
 //Media < 5  reprovado

const nota = 6;

 if (nota >= 7) {
    console.log("Aprovado")

 } else if (nota >= 5){
    console.log("Prova final")

 } else {
    console.log("Reprovado :( ")
 }


 //Exercicio
 // 1. Preciso ser maior de idade
 // 2. Preciso ter uma CNH (PPD)

 const idadePessoa = 18;
 const temCnh = true;

 if (idadePessoa >= 18 && temCnh) {
    console.log("Você pode dirigir")
 } else {
    console.log("Você não pode dirigir :( ")
 }
