//Utilize sempre o Canel case no JavaScript!
//JavaScript possui tipagem dinâmica: Infere nos tipos de dados
//JavaScript possui uma tipagem fraca

var nomeDoProfessor = 'Nayara Karine'; //String texto utilize sempre áspas
var idade = 31; //number
var altura = 1.63; //number
var estudando = true; //boolean( Verdadeiro ou falso)

console.log(nomeDoProfessor);
console.log(typeof nomeDoProfessor); // Retorna que é uma String

console.log(idade, typeof idade);
console.log(altura, typeof altura);
console.log(estudando, typeof estudando);

//Criar variável sem conteúdo

var semConteudo;

//Declarar várias variáveis junto
var curso = 'Front-end em React', 
topico = 'JavaScript - Básico I';
console.log(curso, topico)

//Qual variável usar: var, const, let

//!Não utilizar var nos seus códigos JavaScript

let notaDoAluno = 10;

const mediaDoAluno = 8;

notaDoAluno = 9;
// !const mediaDoAluno = 10; não é permitido alterar variável no conts

console.log(notaDoAluno);

