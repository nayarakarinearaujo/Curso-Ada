
//* Laços condicionais

//!EXEMPLO 1

const prompt = require ('readline-sync');

// let saldo = Number(prompt.question('Qual o seu saldo? '));

// while (saldo < 0 ) {

//    saldo = Number(prompt.question('Saldo invalido! Por favor, informe novamente: '));
// }

// console.log("Seu saldo é de R$ " + saldo);

//!EXEMPLO 2


let notaDoAluno = Number(prompt.question("Informe a nota do aluno: "));

let somaDasNotas = 0; //Acumulador
let qtdNotasValidas = 0; //Acumulado (Quando tidade de notas válidas)

while (notaDoAluno >= 0) {
   somaDasNotas = somaDasNotas + notaDoAluno;

   //simplificar: somaDasNotas += notaDoAluno;

qtdNotasValidas = qtdNotasValidas + 1;

   //simplificar: qtdNotasValidas++;


   notaDoAluno = Number(prompt.question("Informe a proxima nota: "));
}
console.log("-------------------------------------")

console.log("A soma de todas as nota: " + somaDasNotas);
console.log("Quantidade de notas válidas: " + qtdNotasValidas);

console.log("-------------------------------------")

console.log("A média das notas dos alunos  " + somaDasNotas / qtdNotasValidas);