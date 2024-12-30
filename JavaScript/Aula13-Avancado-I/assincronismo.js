//Função para ler arquivo
//const fs = require("fs");

//* 1. Callbacks

//?Exemplo 1: Abrindo arquivo
//Função assincrona leva um tempo para acontecer
//(erro, conteudoDoArquivo) =>
//! Primeiro parâmetro é o erro da função;
//! Segundo parâmetro o conteúdo do arquivo.
fs.readFile("Aula13-Avancado-I/arquivo.txt", (erro, conteudoDoArquivo) => {
  if (erro) {
    console.log("Ocorreu um erro ao tentar ler o arquivo:", erro);
  } else {
    //Precisa converter pra String
    console.log(String(conteudoDoArquivo));
  }
});

//? Exemplo 2: steTimeout(função que cria um time)
setTimeout(() => {
  console.log("Isso vai ser executado após 2 segundos");
}, 2000);

//Ele vai executar esse console antes porque é assíncrono
console.log("Depois do setTimeout");
console.log("-----------------------------------------------");

// * 2.Promises (promessas)

//! Criando a promessa
console.log("Antes da criação da Promises");
const fs = require("fs");

function lerArquivoPromisse() {
  return new Promise((resolve, reject) => {
    fs.readFile("Aula13-Avancado-I/arquivo.txt", (erro, conteudoDoArquivo) => {
      if (erro) {
        reject("Ocorreu um erro ao tentar ler o arquivo:", erro);
      } else {
        resolve(String(conteudoDoArquivo));
      }
    });
  });
}

//! Lidando com as promessas
//? Supondo que 'promessa' é uma Promise que foi criada anteriormente
//Caso dê certo, e a promessa for cumprida, ele vai retornar o then com a retornoDoResolveDaPromise
lerArquivoPromisse()
  .then((retornoDoResolveDaPromise) => {
    console.log("Deu certo: \n", retornoDoResolveDaPromise);
  })

  //? Executado com erro
  //Caso dê errado, e a proomessa não for cumprida, ele vai retornar o catch com o erro
  .catch((erro) => {
    console.log("Deu ruim: ", erro);
  })

  // Será executado quando a promessa for encerrada,
  // independente do sucesso ou fracasso da promessa no final dela
  .finally(() => {
    console.log(
      "Será executado independente do sucesso ou fracasso da promessa no final dela."
    );
  });

console.log("-----------------------------------------------");

//* 3. async/await

async function leituraDeDados() {
  console.log("Usando async");
  console.log("Executado ANTES da promise ser resolvida");

  try {
    const retornoDaPromessa = await lerArquivoPromisse(); //espera a promessa ser resolvia para executar

    console.log(retornoDaPromessa);
    console.log("Executado DEPOIS da promise ser resolvida");
  } catch (err) {
    console.log(err);
    console.log("Isso é executado depois da promesi (com erro).");
  } finally {
    console.log("Dentro do finally");
  }
}

leituraDeDados();
