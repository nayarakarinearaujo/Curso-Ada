//! High Order Functions

//* 1. Função que retorna outra função como parâmetro
/*
O que a função welcome faz?
- Ela recebe um parâmetro, courseName, 
que representa o nome do curso.

- Retorna uma nova função, que aceita o nome do estudante (studentName) 
como parâmetro e exibe uma mensagem personalizada.
*/
function welcome(courseName) {
  return (studentName) => {
    console.log(
      `Olá, ${studentName}! Seja vem vindo(a) ao curso de ${courseName}!`
    );
  };
}

const displayWelcomeToFronttEndCouse = welcome("Front-end em React");
const displayWelcomeToBackEndCouse = welcome("Back-end em Node.Js!");
const displayWelcomeToFullStackCouse = welcome("FullStack!");

console.log("-----------------Saudação BackEnd--------------------");
displayWelcomeToBackEndCouse("Nayara");
console.log("-----------------Saudação FrontEnd--------------------");
displayWelcomeToFronttEndCouse("Julia");
console.log("-----------------Saudação FullStack--------------------");
displayWelcomeToFullStackCouse("Thais");

//* 2. Função que recebe outra função como parâmetro

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

//Operação: função que realiza a operação entre dois números,
// ou seja ela precisa ser uma função que receba dois números.
const calcular = (num1, num2, operacao) => {
  return operacao(num1, num2);
};

//calcular = (10, 5, somar) => somar (10, 5)
const retorno = calcular(10, 5, somar);

console.log(retorno);

//O calculo que eu quero é: (num1 * num2) + (2 * num1 * num2)
const resultado = calcular(
  10,
  5,
  (num1, num2) => num1 * num2 + 2 * num1 * num2
);

console.log(resultado);
