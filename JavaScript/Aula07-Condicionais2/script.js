
//!--------------switch case

//Muito útil quando sua variável possui valores específicos

const permissoes = "banana"; // 'aluno' || 'professor' || 'adm'


switch(permissoes) {
    case 'aluno':
        console.log("Você só pode visualizar as aulas!")
        break;
    case 'professor':
        console.log("Você pode alterar as aulas e adicionar exercícios.")
        break;
    case 'adm':
        console.log("Você pode fazer o que quiser!")
        break;
    default:
        console.log("Não sei quem você é no sistema!")
}