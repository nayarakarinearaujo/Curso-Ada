const prompt = require("readline-sync");

//*Arrays

//Definindo array vazio
// const array = [];

//Definindo array
const notasAluno = [10, 8, 5];
console.log(notasAluno[0]);

//Definindo array com várias informações
const pessoa = [
  "Nayara",
  31,
  "Campinas",
  "Estagiária em Desenvolvimento Front-End",
  "ProBrain",
];

//Mostrar todas as informações dentro do Array
for (let i = 0; i < pessoa.length; i++) {
  console.log(pessoa[i]);
}

console.log("-----------------------------");

//Outra opção para mostrar todas as opções do array
console.log(pessoa[0]);
console.log(pessoa[1]);
console.log(pessoa[2]);
console.log(pessoa[3]);

console.log("-----------------------------");

//* Alterando Array
pessoa[0] = "Karine";
console.log(pessoa);

console.log("-----------------------------");

// *Obtendo tamanho do array
console.log(pessoa.length);

//* Fatiamento de Arrays
const numero = [40, 34, 58, 78, 96, 97];

//Nesse caso ele vai imprimir todos arrays
console.log("Todo array:");
console.log(numero.slice(0));

console.log("-----------------------------");

//Nesse caso ele vai imprimir na posição 0 e 1 (Explicação ele vai imprimir o que for menor que 2)
console.log("Posição no array: ");
console.log(numero.slice(0, 2));

console.log("-----------------------------");

//*Adicionando elementos no final do Array
console.log("Adicionando no final no array: ");
numero.push(0);
console.log(numero);

console.log("-----------------------------");

//*Adicionando elementos no início do Array
console.log("Adicionando no começo no array: ");
numero.unshift(-9);
console.log(numero);

console.log("-----------------------------");

//*Remover elemento que está no final do Array, no caso é o 0
console.log("Remover elemento no final do array: ");
numero.pop();
console.log(numero);

console.log("-----------------------------");

//*Remover o primeiro elementos do Array, no caso é o -9
console.log("Remover o primeiro elemento do array: ");
numero.shift();
console.log(numero);

console.log("-----------------------------");
//Será que o elemento 20 existe no array numero
//Buscando elemento dentro do array
console.log("Buscando elemento dentro do array: ");
console.log(numero.includes(20));
console.log(numero.includes(40));

if (numero.includes(20)) {
  console.loh("Existe o número 20 dentro do array.");
} else {
  console.log("Não existe o número 20 dentro do array.");
}

//* indexOf
const indiceElemento20 = numero.indexOf(20);
console.log(indiceElemento20);

//!Percorrendo Arrays com o for

const arr = [45, 36, 90, 76, 7, 32];
console.log("Percorrendo o array: ");
for (let i = 0; i < arr.length; i++) {
  console.log(`Índice: ${i}, Número do array: ${arr[i]}`);
}

// * for-of
//Percorre os elementos do array
console.log("Percorrendo elementos do array com for-of: ");
for (const elemento of arr) {
  console.log(elemento);
}

// * for-in
//Percorre os índices do array
console.log("Percorrendo índices do array com for-in: ");
for (const indice in arr) {
  console.log(indice, typeof indice);
  console.log(arr[0]);
}
