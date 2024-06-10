const numero1 = 12;
const numero2 = 12;

console.log(numero1 == numero2);
console.log(numero1 === numero2);
console.log(numero1 === "10");

console.log(numero1 >= numero2);

const idadePessoa1 = 16;
const idadePessoa2 = 39;

//Conjunção
console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18); //Retorna o primeiro falso
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18); //Retorna verdadeiro se um ou outro for verdadeiro

//Negação
console.log(!(true));

console.log(!(idadePessoa1 >= 18));

