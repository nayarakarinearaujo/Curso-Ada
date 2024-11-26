console.log("Hello Word!!!");

var SemConteudo; //Declarando uma variável vazia.
console.log(SemConteudo);

//* Tipos de variáveis

var nomeDoProfessor = "Walisson Silva"; //string (texto): Sempre utilizar aspas
var idade = 30; // number
var altura = 1.63; // number
var estudando = true; // boolean (booleano: verdadeiro ou falso)

//*Descobrir o tipo da variável

console.log("Quais os tipos da variável: ");
console.log(nomeDoProfessor, typeof nomeDoProfessor);
console.log(idade, typeof idade);
console.log(altura, typeof altura);
console.log(estudando, typeof estudando);

console.log("--------------------------------------------------");

//* É possível declarar uma váriável sem por o var em todas elas, e para exibir no console,
//* pode colocar as duas variáveis separando por vírgula.
var curso = "Front-end em React",
  topico = "JavaScript Básico I";

console.log(curso, topico);
console.log("--------------------------------------------------");

//! NÃO UTILIZAR VAR NOS SEUS CÓDIGOS DE JAVASCRIPT//

/*
* Variável var é uma variável global, pode ser utilizada em todo código;
 
* Variável let só existe dentro do escopo;
 */

//? Let permite alterar a variável
//? Const não permite fazer essa alteração da variável

let notaAluno = 10;
const MediaAluno = 8;

notaAluno = 9;

console.log(notaAluno);
console.log(MediaAluno);

