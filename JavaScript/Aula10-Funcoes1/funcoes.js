
//!Definição da função 

//*Sem tamplate
function saudacao(nomeDoEstudante, curso) {
    console.log('Olá, ', nomeDoEstudante); 
    console.log('Seja bem vindo(a) ao curso Front End com React!')
}

saudacao("Nayara"); //Chamada da função saudação

//Pode chamar quantas vezes quiser
// saudacao();
// saudacao();
// saudacao();


//* Com tamplet String
function saudacao(nomeDoEstudante, curso) {
    console.log(`Olá, ${nomeDoEstudante}!`); 
    console.log(`Seja bem vindo(a) ao curso de ${curso}`)
}

saudacao("Nayara", "Front-end em React"); //Chamada da função saudação


//* Usando função return
//Nesse caso se não for passado o parametro do curso na chamada da função, podemos definir na função

//Caso for passar o parametro na chamada da função ele vai sobre escrever o que foi definido na função
function saudacao(nomeDoEstudante, curso = "Front-end em React") {
    return `Olá, ${nomeDoEstudante}! Seja bem vindo(a) ao curso de ${curso}.`
}

const mensagemSaudacao = saudacao("Nayara"); 
console.log(mensagemSaudacao);

//* Função para soma

function somar(numero1, numero2) {
    return numero1 + numero2;
}

const resultado = somar(2 ,3);

console.log(resultado);
console.log(resultado / 10);

//-----------------------------------------------------
//* Funções anônimas

const dobroDoNumero = function(numero){
    return numero * 2;
}

const dobro = dobroDoNumero(2);
console.log(dobro);


//-----------------------------------------------------
//* Arrow Functions

const subtrair = (n1, n2) => {
    return n1 - n2;
}
const res = subtrair(10 ,5);


//*Simplificado

const multiplica = (n1, n2) => n1 * n2;


const resSubtrair = subtrair(10, 5);
const resMultiplica = multiplica(10, 5);

// Exibição dos resultados
console.log('Resultado da subtração:', resSubtrair);
console.log('Resultado da multiplicação:', resMultiplica);


const names = ["Daniel", "Maria", "Marta", "Juca", "João", "Jéssica"]

const namesCount = names.reduce((count, nomeAtual) => {
    const firstLetter = nomeAtual[0].toLowerCase()
    if(count[firstLetter]){
        count[firstLetter]++
    } else {
        count[firstLetter] = 1
    }
    return count
}, {})

console.log(namesCount);