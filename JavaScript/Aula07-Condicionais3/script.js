//*Operador ternário

//Usar ooperador ternário quando for apenas duas opções de escolha, não é recomendado utilizar para mais opções.

const idade = 8;

// idade >= 18 ? console.log("Maior de idade!") : console.log("Menor de idade!")

const mensagem = idade >= 18 ? "Maior de Idade" : "Menor de idade";

console.log(mensagem);

//ternario dentro de outro ternário
let idade1 = 8;
const mensagem2 =
  idade1 >= 18
    ? "Maior de idade"
    : idade1 >= 16
    ? "Olá pode votar"
    : "Não pode votar";

console.log(mensagem2);

