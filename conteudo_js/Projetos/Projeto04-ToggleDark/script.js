function toggleThemeBody() {
    const btnToggle = document.getElementById("btn-theme");
    const body = document.body;

    btnToggle.addEventListener("click", function() {
        body.classList.toggle("dark");
        
        if (body.classList.contains("dark")) {
            btnToggle.textContent = "Voltar para o Tema Claro";
        } else {
            btnToggle.textContent = "Alternar para o Tema Dark";
        };
    });
};

window.onload = function() {
    toggleThemeBody();
};
