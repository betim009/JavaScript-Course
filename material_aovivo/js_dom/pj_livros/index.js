const livros = require("./livros");

// RESGATAR UM LIVRO POR ID
let validacao_id = false;
for (const element of livros) { // Vai do primeiro ao ultimo elemento do array
    if (element.id === 19) { // VERIFICA se o livro tem o id igual a 19
        validacao_id = true; // TROCA false por TRUE
        console.log(element) // EXIBE o livro
    } 
}

if (validacao_id === false) { // SE FOR FALSO
    console.log("Não foi encontrado o livro") // EXIBE A MENSAGEM DE NAO ENCONTRADO
}


// FAZER o RESGATAR POR NOME








// FAZER o RESGATAR POR PREÇO