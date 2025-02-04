// 3. Criando JSON:
// Crie um objeto JavaScript que represente um livro
//  com as propriedades: título, autor e ano de publicação. 
// Converta-o para JSON e imprima o resultado.


const json = {
    titulo: 'One Piece',
    autor: 'Echiro Oda',
    anoPublicacao: 1997
};

const newJson = JSON.stringify(json);
console.log(newJson)

