const fs = require("fs");

fs.readFile("./Aula14-Json/arquivo.json", "utf8", (erro, dados) => {
  if (erro) {
    console.error("Erro ao ler o arquivo:", erro.message);
    return;
  }

  const objeto = JSON.parse(dados); // Converte JSON para objeto
  objeto.profissao = "Desenvolvedora FrontEnd"; // Modifica o objeto

  fs.writeFile("./Aula14-Json/arquivo.json", JSON.stringify(objeto, null, 2), "utf8", (erro) => {
    if (erro) {
      console.error("Erro ao salvar o arquivo:", erro.message);
    } else {
      console.log("Arquivo JSON atualizado com sucesso!");
      console.log(objeto)
    }
  });
});


