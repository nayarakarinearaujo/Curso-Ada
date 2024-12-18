
//! Filter: 

//Diferença de filter e map:
//* map: sempre retorna um array de mesmo tamanho do array original
//* filter: sempre retorna um array de tamanho igual ou inferior ao tamanho do array original

const valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

//? Condição: Filtrar apenas os elementos que são pares

//Find: retorna sempre o primeiro que ele encontar que satisfaça a condição pedida
const parEncontrado = valores.find((valor) => valor % 2 === 0);

console.log(parEncontrado);

//Filter: vai filtrar todos elementos que satisfazem a condição pedida

const pares = valores.filter((valor) => valor % 2 === 0);

console.log(pares);


//* -----------------EXEMPLO 1---------------------

//Crie um código que obtenha apenas os dados dos alunos que tme uma média superior a 85. Em seguida, imprima os dados na tela.

const alunos = [
    { nome: 'Quincy', media: 96 },
    { nome: 'Jason', media: 84 },
    { nome: 'Alexis', media: 100 },
    { nome: 'Sam', media: 65 },
    { nome: 'Katie', media: 90 },
]

const mediaSup85 = alunos.filter((aluno) => aluno.media > 85);

console.log(mediaSup85);


//* -----------------EXEMPLO 2--------------------

//Crie um script para filtrar apenas pelos produtos que custam menos de R$ 10,00 e não são bebidas

const produtos = [
    { nome:'Suco de Laranja', preco: 7.50, tipo: 'Bebida'},
    { nome:'Batata Frita', preco: 10.50, tipo: 'Comida'},
    { nome:'Pizza', preco: 12.49, tipo: 'Comida'},
    { nome:'Chocolate', preco: 1.50, tipo: 'Comida'},
    { nome:'Pastel', preco: 4.50, tipo: 'Comida'},
    { nome:'Coca', preco: 6.99, tipo: 'Bebida'},
];

const produtosFiltrados = produtos.filter((produtos) => produtos.preco < 10 && produtos.tipo !=='Bebida' );

console.log(produtosFiltrados);
