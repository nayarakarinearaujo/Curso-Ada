//* Laços condicionais
/*
Estruturas de repetição Não controlada
Útil quando deseja fazer uma repetição mas não sabe quantas vezes será executada
*/

//!EXEMPLO 1: While

const prompt = require('readline-sync');

// let saldo = Number(prompt.question("Qual o seu saldo? "));

// //Enquanto saldo for menor que 0, diga que saldo é inválido e peça que digite novamente
// while (saldo < 0) {
//   saldo = Number(
//     prompt.question("Saldo invalido! Por favor, informe novamente: ")
//   );
// }

// console.log("Seu saldo é de R$ " + saldo);

//!EXEMPLO 2

let notaDoAluno = Number(prompt("Informe a nota do aluno: "));

let somaDasNotas = 0; //Acumulador
let qtdNotasValidas = 0; //Acumulado (Quantidade de notas válidas)

while (notaDoAluno >= 0) {
  somaDasNotas = somaDasNotas + notaDoAluno;

  //simplificar: somaDasNotas += notaDoAluno;

  qtdNotasValidas = qtdNotasValidas + 1;

  //simplificar: qtdNotasValidas++;

  notaDoAluno = Number(prompt("Informe a proxima nota: "));
}
console.log("-------------------------------------");

console.log("A soma de todas as nota: " + somaDasNotas);
console.log("Quantidade de notas válidas: " + qtdNotasValidas);

console.log("-------------------------------------");

console.log("A média das notas dos alunos  " + somaDasNotas / qtdNotasValidas);
