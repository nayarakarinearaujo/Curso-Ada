
const prompt = require ('readline-sync');

let saldo = Number(prompt.question('Qual o seu saldo? '));

while (saldo < 0 ) {

   saldo = Number(prompt.question('Saldo invalido! Por favor, informe novamente: '));
}

console.log(saldo);