
//! Object Literal

//Exemplo do Array
const array = ['Nayara', 30, true, 'Campinas - SP'];

//* Exemplo do Object
const pessoa = { 
    //chave ou atributo: valor do atributo
    nome: 'Nayara', 
    idade: 30, 
    cidade: 'Campinas - SP', 
    programador: true,
    hobbies: ['Musculação', 'Estudar', 'Ler'],
    //Podemos criar uma função, porém apenas anônima

    imprimirAlgo:() => {
        console.log("Olá!")
    }
};


//Adiconar novo propriedade/atributo
pessoa.profissao = "Desenvolvedor Front-End";

//Adiconar modificar um propriedade/atributo
pessoa.nome = "Nayara Karine";

//Deletar uma propriedade/atributo
// delete pessoa.idade;

//Nesse caso vai imprimir todo o objeto
console.log(pessoa);

//Para imprimir apenas uma propriedade/atributo
console.log(pessoa.nome);

//Outra forma de imprimir apenas uma propriedade/atributo
console.log(pessoa["idade"]);

//Imprimir a função anônima
pessoa.imprimirAlgo();

//--------------------------------------------------
//* Desestruturação

//* Para pegar cada atributo isolado

//Nesse caso você diz: de dentro do objeto pessoa pegar o atributo nome
//Ou seja você está criando uma variável com o mesmo nome dos atributos 
const { nome, hobbies} = pessoa;

console.log(nome);
console.log(hobbies);
console.log(pessoa);


//---------------------------------------------------
//* Sintaxe de Abreviação de Propriedades.
//Se você tem variáveis com nomes que correspondem aos nomes das propriedades que deseja criar no objeto, 
// pode usar a sintaxe de abreviação para simplificar o código:

const idade = 30;
const cidade = 'Campinas - SP';

const objeto = {
    //atributo: valor
    //idade: idade
    idade,    // Abreviação para- idade: idade: idade
    cidade    // Abreviação para- cidade: cidade: cidade
};

console.log(objeto.idade);