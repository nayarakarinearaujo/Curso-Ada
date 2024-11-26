//! Operações matemáticas
const nota1 = 10;
const nota2 = 8;

//Primeira maneira de fazer
const somaDasNotas = nota1 + nota2;
let mediaDasNotas = somaDasNotas / 2;

// Segunda menira, forma mais simples
mediaDasNotas = (nota1 + nota2) / 2; //* Sempre colocar o parenteses para ter a ordem de precedência
console.log(mediaDasNotas);


console.log("Soma das notas = ", somaDasNotas);
console.log("Média das notas = ", mediaDasNotas);


//! Biblioteca Math
const numero = 16;
const raizDoNumero = Math.sqrt(numero);
//Essa função recebe o número e faz o calculo da raiz do número

console.log("Raiz quadrada de 16 é:", raizDoNumero);

//Sem a variável
const numero2 = 16;
console.log("Raiz quadrada de 16 é:", Math.sqrt(numero2));
