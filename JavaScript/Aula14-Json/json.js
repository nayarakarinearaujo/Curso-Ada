

// * 1. Lendo arquivo JSON
const fs = require("fs");

// Lendo o arquivo JSON
fs.readFile("./Aula14-Json/arquivo.json", (erro, dados) => {
  if (erro) {
    console.error("Erro ao ler o arquivo:", erro.message);
  } else {
    const objeto = JSON.parse(dados); // Converte a string JSON para um objeto JavaScript
    console.log("Conteúdo do JSON como objeto:", objeto);
  }
});


//* 2. Converter JSON, em formato de string, para um objeto

const jsonString = '{"nome": "Giseldo", "idade": 35}';

// Converte a strig JSON para um objeto JavaScript
const objeto = JSON.parse(jsonString);

console.log("Objeto JavaScript", objeto);
console.log("Nome: ", objeto.nome) //Acessando propriedades do objeto
console.log("Idade: ", objeto.idade)


//* 3. Converter um objeto do JSON, em um JSON (string)
const objeto2 = {
    nome: "Nayara",
    idade: 32,
    habilidades: ["JavaScript", "React", "Node.Js"]
};

//Converte o objeto para uma string JSON
const jsonToStrinng = JSON.stringify(objeto2, null, 2);

console.log("String JSON:");
console.log(jsonToStrinng);
