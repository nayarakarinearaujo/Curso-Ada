const numero1 = 10;
const numero2 = 12;

console.log(numero1 == numero2); //False
console.log(numero1 === numero2); //False nesse caso compara se é idêntico tanto o valor como o tipo
console.log(numero1 == "10"); //True, ele está apenas comparando o número e não o tipo
console.log(numero1 === "10"); //False, pois não é idêntico, já que é uma string
