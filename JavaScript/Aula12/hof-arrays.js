
// * Array.prototype.ever(): verificar se todos os elementos de um array seguem determinada condição retornada pela função

const numeros = [40, 34, 67, 89, 23, 10];

const todosPositivos = numeros.every((elemento) => elemento > 0);

console.log(todosPositivos)


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

const todosMaioresDeIdade = pessoas.every((pessoa) => pessoa.idade > 18);

console.log(todosMaioresDeIdade);


// * Array.prototyp.some(): verificar se algum elemento do array torna verdadeira uma determinada condição retornada pela função

const numeros2 = [-1,
    3, 7, -3, 5
];

//Nesse caso ele vaiverificar se todos os números são positivos
const retorno = numeros2.some((numero) => numero > 0);

console.log(retorno);





