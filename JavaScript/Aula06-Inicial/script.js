console.log("Hello Word!!!");

var SemConteudo; //Declarando uma variável vazia.
console.log(SemConteudo);

//É possível declarar uma váriável sem por o var em todas elas, e para exibir no console,
//pode colocar as duas variáveis separando por vírgula.
var curso = "Front-end em React",
topico = "JavaScript Básico I";

console.log(curso, topico);


//! NÃO UTILIZAR VAR NOS SEUS CÓDIGOS DE JAVASCRIPT//

//Let permite alterar a variável
//Const não permite fazer essa alteração da variável

let notaAluno = 10;
const MediaAluno = 8;

notaAluno = 9;

console.log(notaAluno);
console.log(MediaAluno);

const nota1 = 10;
const nota2 = 8;


//Primeira maneira de fazer
const somaDasNotas = nota1 + nota2;
let mediaDasNotas = somaDasNotas / 2;

// Sefunda menira, forma mais simples 
mediaDasNotas = (nota1 + nota2) / 2; //Sempre colocar o parenteses para ter a ordem de precedência
console.log(mediaDasNotas)


console.log("Soma das notas é ", somaDasNotas);
console.log("Média das notas é ", mediaDasNotas);


//Biblioteca Math
const numero = 16;
const raizDoNumero = Math.sqrt(numero);

console.log("Raiz quadrada de 16 é ", raizDoNumero);

//Sem a variável
// const numero = 16;
// console.log("Raiz quadrada de 16 é ", Math.sqrt(numero));


//Usando prompt
const idade = prompt("Qual a sua idade: ");
console.log("Você tem " + idade + " anos de idade.");

