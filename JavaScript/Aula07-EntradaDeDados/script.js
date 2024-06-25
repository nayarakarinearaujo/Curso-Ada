//Entrada de dados

//Para importar a biblioteca
const prompt = require('readline-sync')

const idade = prompt.question("Qual a sua idade? ")

console.log(idade);

console.log(idade, typeof idade);
//Todas as entradas e comunicação com usuário o typof é String, ele sempre vai gerar uma String mesmo sendo número

//COMO CONVERTER?

//-------COERSÃO DE TIPOS
 
//---Coerção explícita
//Converter um tipo em outro


//Nesse exemplo está sendo convertido a idade para number

const idadeNumber = Number(idade);

console.log(idadeNumber, typeof idadeNumber);

console.log(Number("X")); //Resultado será NaN: Not a Number
//X não é número, então não tem como converter


//Converter manualmente
console.log(String(10), typeof String(10));



//---Coerção Implícita

console.log(1 + "1");
//Nesse caso ele vai trasnformar em texto, ele concatenou

console.log(10 - "5");
//Caso seja subtração, divisão, multiplicação ele faz a operação

//Exercicios:
//Qual será a saída desse código?
let n = 1 + '1' // Resultado será '11' (String)

n = n - 1 // Resultado será 11 - 1 = 10

console.log(n);

//Qual será a saída desse código ?
console.log(2 + 3 + 4 + '5'); // Resultado '95' String

//Qual será a saída desse código?
console.log('5' + 2 + 3 + 4 ) //Resultado '52' + 3 + 4 = '5234', ele apenas vai juntar tudo em texto

//Qual será a saída desse código ?
console.log('10' - '4' - '3' - 2 + '5') //15