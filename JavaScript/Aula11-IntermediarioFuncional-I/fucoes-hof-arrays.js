
//* Funções de Alta Ordem de Arrays

// 1. Array.prototype.forEach()

const numeros = [40, 34, 67, 89, 23, 10];

//Nesse caso ele vai imprimir o index no item, ou seja o lugar dele no array, o item e o array completo
numeros.forEach((item, index, arrayCompleto) => {
    console.log(index, item, arrayCompleto);
});


// 2. Array.prototype.find(): útil para encontrar um elemento dentro do array

//Quando ele encontra o elemento ele retornar aquele elemento.
const encontrado = numeros.find((numero) => {
    return numero === 10;
});

console.log(encontrado);

//Array de objetos
const pessoas = [{
    nome: 'Davi Henrique',
    idade: 34,
},

{
    nome: 'Pedro Silva',
    idade: 25,
}

];

const pessoaEncontrada = pessoas.find((pessoa) => pessoa.nome === 'Pedro Silva');

console.log(pessoaEncontrada);


// 2. Array.prototype.findIndex(): muito parecido com o find(), porém retorna o índice do elemento encontrado.

const IndicePEssoaEncontrada = numeros.findIndex((numero) => {
    return numero === 10;
});

console.clear();
console.log(encontrado);