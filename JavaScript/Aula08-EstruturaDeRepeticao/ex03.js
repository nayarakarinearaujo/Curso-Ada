const prompt = require('readline-sync');

// Gera um número aleatório entre 0 e 9
const numeroAleatorio = parseInt(Math.random() * 10);

console.log("----------------Bem Vindo ao jogo do Número Secreto-----------------------");

let numeroUsuario = Number(prompt.question('Informe um numero de 0 ate 10: '));

let tentativas = 1;

while (numeroAleatorio !== numeroUsuario) {
    if (numeroAleatorio < numeroUsuario) {
        console.log("Voce errou! ☹️ ");
        console.log("Uma dica: o número é menor: ");
    } else {
        console.log("Voce errou! ☹️ ");
        console.log("Uma dica: o numero é maior: ");
    }
    console.log("------------------------------------------------------------");
    numeroUsuario = Number(prompt.question("Informe um numero entre 0 e 10: "));
    tentativas++;
}

console.log("------------------------------------------------------------");

console.log("Parabens 🎉! Você acertou o numero sorteado, que era " + numeroAleatorio + "... 🥳");
console.log("Número de tentativas: " + tentativas);

console.log("------------------------------------------------------------");
