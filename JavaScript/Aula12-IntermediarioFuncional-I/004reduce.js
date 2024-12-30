
//! Reduce: Método que executa (para cada elemento do array) a função que foi passada como parâmetro, 
//! resultando em um elemento único.

const numeros = [1, 2, 3, 4, 5];

// previusValue = valor anterior: acumulador (resultado do que está reduzindo)
// courret valeu = valor atual: elemento (valor dos elementos do array)
// index = Índice do array
// arrayCompleto = Todo array

const soma = numeros.reduce((acumulador, elemento) => {
    // Ele sempre vai imprimir o primeiro valor inicial do acumulador, passado no final
    // da função callback, ou será o valor do primeiro elemento da array.
    console.log(acumulador);
    return elemento + acumulador;
}, 0); //passando o valor inicial do acumulador

console.log(`Soma: ${soma}`);
/*
Saída:
0   // Valor inicial do acumulador
1   // Depois da primeira iteração: acumulador 0 + 1 = 1
3   // Depois da segunda iteração: acumulador 1 + 2 = 3
6   // Depois da terceira iteração: acumulador 3 + 3 = 6
10  // Depois da quarta iteração: acumulador 6 + 4 = 10

Soma: 15
*/

// * Para retirar a média

const numeros2 = [1, 2, 3, 4, 5];
//Para ignorar um parâmetro, utilizar _
const media = numeros2.reduce((acumulador, elemento, _, arrayCompleto) => {
    //Somando e já tirando a média
    return elemento / arrayCompleto.length + acumulador;
}, 0);

console.log(media);


// * Para somar apenas os pares

const numeros3 = [1, 2, 3, 4, 5];
//Para ignorar o index utilizar _
const somaPares = numeros3.reduce((acumulador, numeros) => {

    if (numeros % 2 === 0) {
        //Se ele for par adicona ele no acumulador
        return numeros + acumulador;
    } else {
        //Caso contrário ele vai apenas passar por ele e mostrar o acumulador
        return acumulador;
    }

}, 0);

console.clear();
console.log(somaPares);

//* ----------------------Exercício------------------------
//Calcular o total a pagar de todo o carrinho


const carrinho = [
    { produto: "Feijão", preco: 7.98, quantidade: 3 },
    { produto: "Arroz", preco: 4.98, quantidade: 5 },
    { produto: "Leite 1L", preco: 6.99, quantidade: 2 }
];

const totalAPagar = carrinho.reduce((acumulador, item) => {
    console.log(acumulador)
    // Dentro de cada item vai fazer item.preco X item.quantidade
    // Depois ir armazenando ele no acumulador
    return (item.preco * item.quantidade) + acumulador;
}, 0);

const totalFormatado = totalAPagar.toFixed(2);

console.log(`O valor total a pagar é R$: ${totalFormatado}`);

