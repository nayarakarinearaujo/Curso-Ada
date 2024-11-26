//! Coerção
/*
A coerção em programação é o processo de converter automaticamente 
(ou manualmente) um valor de um tipo de dado para outro. 
Isso é comum em linguagens de programação como JavaScript, 
onde diferentes tipos de dados podem interagir em operações, 
e o JavaScript tenta fazer ajustes automaticamente.

* Existem dois tipos principais de coerção: implícita e explícita.
*/
const idadeNumber = Number(idade);
console.log(idadeNumber);

//! Coerção explícita (Conversão Manual)

console.log(String(10), typeof String(10));
console.log(Boolean(-1));
console.log(Number("x"));

//! Coerção Implícita

console.log(1 + "1"); // *Quando for soma ele faz Concatenação
console.log("10" + 5); // *Quando for soma ele faz Concatenação
console.log(10 - "5"); //* Se for subtração, multiplicação, divisão ele transforma o texto em número 
console.log(10 * "5");
console.log(10 / "5");

//? Exercicio
let n = 1 + '1' // '11' (string);

n = n - 1 // 11 - 1 = 10
console.log(n)

//Qual será a saída desse código?
console.log(2 + 3 + 4 + '5'); 
//5 + 4 + '5'
// 5 + '5'
// '95'

//Qual será a saída desse código?
console.log('5' + 2 + 3 + 4);
//'52' + 3 + 4
//'523' + 4
//'5234'

//Qual será a saída desse código ?
console.log('10' - '4' - '3' - 2 + '5');
//6 -'3' - 2 + '5'
//3 - 2 + '5'
//1 + '5'
//15
