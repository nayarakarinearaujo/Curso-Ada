
//Para ignorar o index utilizar _
const somaPares = numeros.reduce((acumulador, numeros) => {

    if (numeros % 2 === 0) {
        return numeros + acumulador;
    } else {
        return acumulador;
    }

}, 0);

console.log(somaPares);

