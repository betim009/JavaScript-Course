const generoMusica = document.getElementById("genero-musica")
const generoFilme = document.getElementById("genero-filme")
const enviar = document.getElementById("enviar")


// EVENTOS
generoMusica.addEventListener("input", function(event) {
    console.log(event.target.checked)
    console.log(event.target.value)
})

generoFilme.addEventListener("input", function(event) {
    console.log(event.target.checked)
    console.log(event.target.value)
})

enviar.addEventListener("click", function() {
    alert()
})