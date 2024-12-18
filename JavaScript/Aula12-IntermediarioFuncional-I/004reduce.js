
//! Reduce: Método que executa (para cada elemento do array) a função que foi passada como parâmetro, resultando em um elemento único.

const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, elemento) => {
    //para entender
    console.log(acumulador);
    return elemento + acumulador;
}, 0);

console.log(soma);




// * Para retirar a média

//Para ignorar o index utilizar _
const media = numeros.reduce((acumulador, elemento, _, arrayCompleto) => {
    //Somando e já tirando a média
    return elemento / arrayCompleto.length + acumulador;
}, 0);

console.log(media);




// * Para somar apenas os pares


//Para ignorar o index utilizar _
const somaPares = numeros.reduce((acumulador, numeros) => {

    if (numeros % 2 === 0) {
        return numeros + acumulador;
    } else {
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
    return (item.preco * item.quantidade) + acumulador;
}, 0);

console.clear();
console.log(totalAPagar);



