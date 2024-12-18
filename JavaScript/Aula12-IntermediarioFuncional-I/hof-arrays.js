//! FUNÇÃO DE ALTA ORDEM DE ARRAYS

//* 1 . Array.prototype.forEach(): passa por cada elemento do array,
//*     e executar a função para cada elemento

// Ele vai fazer a multiplicação de cada elemento do array, e retornar a conta de
// multiplicação de cada elemento
const numbers = [11, 25, 37];
console.log("------forEach Percorrendo array-----");
numbers.forEach((num) => console.log(num));
console.log("------forEach Operação-----");
numbers.forEach((num) => console.log(num * 2));

//? Também podemos colocar até 3 parâmetros
//? 1- valor
//? 2- index (indice do array no momento)

// Podemos receber cada item percorrido e também cada index, ou seja a posição
// daquele item no array
//EX:
console.log("------forEach Percorrendo index e item-----");
numbers.forEach((item, index) => console.log(index, item));

// Podemos também obter o array completo
// EX:
console.log(
  "------forEach Percorrendo index e item e obtendo array completo-----"
);
numbers.forEach((item, index, arrayCompleto) => {
  console.log(`Item: ${item}, Index: ${index}, Array: ${arrayCompleto}`);
});

// * 2. Array.prototype.find(): útil para encontrar um elemento dentro do array

// Quando se ele encontrar o primeiro elemento, ele retorna esse elemento que ele encontrou.
const number = [47, 64, 57, 78, 28, 15];
const encontrado = number.find((item) => {
  return item > 30;
});
console.log("-------find()--------")
console.log(encontrado);


// Array de objetos
// Ele vai percorrer cada pessoa do array e retornar o primeiro que for true
const pessoas2 = [
    {
      nome: "Nayara Karine",
      idade: 31,
      altura: 1.63
    },
  
    {
      nome: "Júlia Santos",
      idade: 19,
      altura: 1.60
    },
    {
        nome: "Giseldo Junior",
        idade: 40,
        altura: 1.66
      },
  ];

  const pessoaEncontrada = pessoas2.find((pessoa) => {
    return pessoa.idade >= 40 && pessoa.altura >= 1.60 
  })
  console.log(pessoaEncontrada);
 

// * 3. Array.prototype.findIndex(): Ele é muito parecido com o find( ), 
// *    porém retorna o índece do elemento encontrado

console.log("-------findIndex()--------");

const indicePessoaEncontrada = pessoas2.findIndex((pessoa) => {
    return pessoa.idade >= 40 && pessoa.altura >= 1.60 
  })
  console.log(`A pessoa encontrada está no índice: ${indicePessoaEncontrada}`);


// * 4. Array.prototype.ever(): verificar se todos os
// *    elementos de um array seguem determinada condição retornada pela função

// Nesse exemplo ele vai conferir dentro do array se todos os elementos do array
// são números positivos
const numeros = [40, 34, 67, 89, 23, 10];
const todosPositivos = numeros.every((elemento) => elemento > 0);
console.log(todosPositivos);

//Array de objetos
const pessoas = [
  {
    nome: "Davi Henrique",
    idade: 34,
  },

  {
    nome: "Pedro Silva",
    idade: 25,
  },
];

const todosMaioresDeIdade = pessoas.every((pessoa) => pessoa.idade > 18);
console.log(todosMaioresDeIdade);

//* Array.prototyp.some(): verificar se algum elemento do array torna
//* verdadeira uma determinada condição retornada pela função

const numeros2 = [-1, 3, 7, -3, 5];

//Nesse caso ele vaiverificar se todos os números são positivos
const retorno = numeros2.some((numero) => numero > 0);
console.log(retorno);
