
//*Sem tamplate
function saudacao(nomeDoEstudante) {
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
//Nesse caso se n]ao for passado o parametro do curso na chamada da função, podemos definir na função

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


//* Funções anônimas