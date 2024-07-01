const prompt = require('readline-sync');

let contador = 0;

while (contador < 5) {
    console.log(contador);
    contador++;
    if (contador === 2) {
        continue
    }
    console.log("Depois do if...");
}

// ---------------------------------------------------------
//Estrutura do-while

let saldo;

do {

   saldo = Number(prompt.question('Saldo invalido! Por favor, informe novamente: '));
} while (saldo <0);

console.log("Seu saldo é de R$ " + saldo);