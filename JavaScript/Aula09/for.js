
//! laços numéricos

const prompt = require('readline-sync');

//Expressão 1: inicializaçãi da variável de controle

//Expressão 2: condição de permanência do for

//Expressão 3: o incremento da variável de controle

/* for (expressao 1; expressao 2; expressao 3) {
        o escopo for
 }
        
 */

//For permite que declare a variável dentro dele, porém será usado apenas dentro do for


for ( let i = 0; i <= 10; i++) {
    console.log(i);
}

//Lmpando o console
// console.clear();



//!Exemplo

/*
let maiorNumero = 0;
let numeroInformado;

for (let i = 1; i <= 5; i++) {
    numeroInformado = Number(prompt.question('Informe um número posivito: '));

    if(numeroInformado > maiorNumero) {
        maiorNumero = numeroInformado;
    }
}

console.log('Maior número: ', maiorNumero)

*/


//!Exemplo percorrendo String com for

const nome = 'Nayara';

//Nesse caso vai retornar a letra correspondente ao número do array
console.log(nome[2]);

console.log('-----------------------------------')

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log('-----------------------------------')


//-----------------------------------------------------

//!Exemplos diversos:

//Nesse caso vai retornar q quantidade de letras que tem o nome
console.log(nome.length);
console.log('-----------------------------------')

//-----------------------------------------------------

//Nesse caso vai retornar o nome em letras maiúscula
console.log(nome.toUpperCase());
console.log('-----------------------------------')

//-----------------------------------------------------

//Nesse caso vai retornar o nome em letras minúscula
console.log(nome.toLocaleLowerCase());
console.log('-----------------------------------')

//-----------------------------------------------------

//Nesse caso vai retornar a primeira letra do nome 
console.log(nome.charAt());
console.log('-----------------------------------')

//-----------------------------------------------------

//Nesse caso vai retornar quantas letras 'o' tem na frase

var frase = "o homem é o lobo do homem";
var letra = "o";
var quantidade = 0

for (var i = 0; i < frase.length; i++) {
  if (frase[i] == letra) {
    quantidade++
  }
}

console.log(quantidade)

//-----------------------------------------------------