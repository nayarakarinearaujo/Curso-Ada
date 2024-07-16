
//* Map: Ele cria um novo array que possui o mesmo tamanho do *array original*
//conmposto pelos elementos que foram retornados a cada interação

const numeros3 = [40, 34, 67, 89, 23, 16, 20];

//Nesse caso ele vai fazer x2 em todos os elementos na array
const novoArray = numeros3.map((elemento, index, arrayCompleto) => {
    return elemento *2;
});

console.log(novoArray);


//! Exemplo 1: Elevando todos os números ao quadrado

const valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const valoresAoQuadrado = valores.map((valor) => valor ** 2);

console.log(valoresAoQuadrado);



//! Exemplo 2: Adicionar uma propriedade aos objetos do array

//? Exemplo de como adicionar atributos

const pessoa = {
    nome: "Nayara",
    idade: 30,
    altura: 1.77
}

//? 1° Exemplo: Adicionando um novo atributo usando a notação de ponto

//pessoa.peso = 72.0;


//? 2° Exemplo: Desestruturação ou spread (operator)
//Variável recebe o objeto e pega cada atributo dele, e adiciona o atributo peso
const pessoaComPeso = {
    ...pessoa,
    peso: 72.0
}

console.log(pessoaComPeso);

//* ----------------------Exercício 1--------------------------

const carrinho = [
{ produto: "Feijão", preco: 7.98, quantidade: 3},
{ produto: "Arroz", preco: 4.98, quantidade: 5},
{ produto: "Leite 1L", preco: 6.99, quantidade: 2}
];


const carrinhoComTotal = carrinho.map((itemDoCarrinho) => {
    return {
        ...itemDoCarrinho,
        total: itemDoCarrinho.preco * itemDoCarrinho.quantidade,
    }
});

console.log(carrinhoComTotal);


//* ----------------------Exercício 2--------------------------
//Fazer um array de pessoas depois percorrer esse array e adicionar o imc dessas pessoas

const pessoass = [
    { nome: "Nayara", peso: 72, altura: 1.63},
    { nome: "Fernanda", peso: 75.5, altura: 1.60},
    { nome: "Thais", peso: 80.5, altura: 1.70}
    ];


    const adicionandoImc = pessoass.map((cadaPessoa) => {
        const imc = cadaPessoa.peso / ( cadaPessoa.altura * cadaPessoa.altura);

        return {
            ...cadaPessoa,
            imc: imc.toFixed(2)// arredondar o IMC para duas casas decimais
        }
    });

    console.log(adicionandoImc);