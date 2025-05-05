// Imports


// Seletores
const divPerfil = document.getElementById('div-perfil');
const divPost = document.getElementById('div-post');

// Variaveis
const usuario = {
    nome: "Rafael Campos",
    endereco: "Rua Correa Dutra"
};

const post = {
    titulo: "Barulho de buzina",
    sub_tiulo: "Rua engarrafada gera barulho na vizinhança",
    texto: "lorem ipsun...................................."
}


// Funções



// Eventos
window.addEventListener('load', function() {
    // O código abaixo acontecesse depois que o HTML for carregado.
    divPerfil.innerHTML += `
        <h4>${usuario.nome}</h4>
        <p>${usuario.endereco}</p>
    `

    divPost.innerHTML += `
        <h4>${post.titulo}</h4>
        <h5>${post.sub_tiulo}</h5>
        <p>${post.texto}</p>
    `
});