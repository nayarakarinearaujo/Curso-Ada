
//Função para ler arquivo
const fs = require("fs");


//* 1. Callbacks

//Função assincrona leva um tempo para acontecer
// fs.readFile("D:\\cursos\\curso-ada\\Curso-Ada-3\\JavaScript\\Aula13\\arquivo.txt", (erro, conteudoDoArquivo) => {
//     if (erro) {
//         console.log("Ocorreu um erro ao tentar ler o arquivo:", erro);
//     } else {
//         console.log(String(conteudoDoArquivo));
//     }
// });

// //* Exemplo 2: steTimeout(função que cria um time)

// setTimeout(() => {
//     console.log("Isso vai ser executado após 2 segundos")
// }, 2 * 1000);

console.log("-----------------------------------------------")

// * 2.Promises (promessas)

console.log("Antes da criação da Promises")

function lerArquivoPromisse() {
return new Promise((resolve, reject) => {
    fs.readFile("D:\\cursos\\curso-ada\\Curso-Ada-3\\JavaScript\\Aula13\\arquivo.txt", (erro, conteudoDoArquivo) => {
        if (erro) {
            reject("Ocorreu um erro ao tentar ler o arquivo:", erro);
        } else {
            resolve(String(conteudoDoArquivo));
        }
    });
});
}

// Supondo que 'promessa' é uma Promise que foi criada anteriormente
lerArquivoPromisse()
.then((retornoDoResolveDaPromise) => {
    console.log("Deu certo: ", retornoDoResolveDaPromise);
})

// Executado com erro
.catch((erro) => { 
    console.log("Deu ruim: ", erro);
})

// Será executado independente do sucesso ou fracasso da promessa no final dela
.finally(() => {
    console.log("Será executado independente do sucesso ou fracasso da promessa no final dela.");
})


console.log("-----------------------------------------------")

//* 3. async/await

async function leituraDeDados(){
    console.log("Executado antes da promise ser resolvida")

    try {
        const retornoDaPromessa =  await lerArquivoPromisse(); //espera a promessa ser resolvia para executar
    
        console.log(retornoDaPromessa);
         console.log("Executado antes da promise ser resolvida");
    } catch (err) {
        console.log(err);
        console.log("Isso é executado depois da promesi (com erro).")
    } finally {
        console.log("Dentro do finally");
    }
}

leituraDeDados();
