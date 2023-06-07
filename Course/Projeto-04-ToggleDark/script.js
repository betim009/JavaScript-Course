var themeButton = document.getElementById("btn-theme");
var body = document.body;

themeButton.addEventListener("click", function() {
    body.classList.toggle("dark");
    
    if (body.classList.contains("dark")) {
        themeButton.textContent = "Voltar para o Tema Claro";
    } else {
        themeButton.textContent = "Alternar para o Tema Dark";
    }
});
