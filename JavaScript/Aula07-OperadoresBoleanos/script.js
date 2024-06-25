//Operadores Boleanos sempre retornam verdadeiro ou falso

const numero1 = 10;
const numero2 = 12;

console.log(numero1 == numero2);
console.log(numero1 === numero2);

//Esse 10 é um texto então será falso o resultado
//Nesse caso ele vai comparar o tipo e também o valor (conteúdo)
console.log(numero1 === "10");

//-------Comparação com dois iguais compara o valor e não o tipo
console.log(numero1 == "10");

//----------------Compararção se é diferente
console.log(numero1 !== numero2);

//-----------------Comparaçãpo de tipo
// nesse caso ele vai dar true porque é um tipo diferente do numero1 sendo number e esse sendo String
console.log(numero1 !== "10");

//-----------------Comparação se é maior ou menor ou igual

console.log(numero1 >= numero2);

console.log(numero1 <= numero2);

console.log(numero1 > numero2);

console.log(numero1 > numero2);


//------------------Conjunções Lógicas

const idadePessoa1 = 20;
const idadePessoa2 = 39;

//Operador and (e)
console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18); 
//Nesse caso ele vai retornar true porque ambas são maiores de idade.

//----OUTRO EXEMPLO

const idadePessoa3 = 16;
const idadePessoa4 = 39;

console.log(idadePessoa3 >= 18 && idadePessoa4 >= 18); 
//Nesse caso ele retorna false 
//Ele empre retorna o primeiro falso da comparação
//Só retornará verdadeiro caso os dois sejam verdadeiros

//--------------------------------------------------------------

//Operador or (ou)
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18);
//Nesse caso será true. 
//Sempre retorna verdadeiro, basta um ou outro for verdadeiro para retornar true

//--------------------------Operador de inversão

//Negação
console.log(!(true));
//Nesse caso ele vai retornar false


console.log(!(idadePessoa3 >= 18));
//Nesse caso ele primeiro vai avaliar se a pessoa é maior de idade e depois vai inverter o resultado
