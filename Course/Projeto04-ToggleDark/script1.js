function toggleTheme() {
    const btnToggle = document.getElementById("btn-theme");
    const body = document.body;

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        btnToggle.textContent = "Voltar para o Tema Claro";
    } else {
        btnToggle.textContent = "Alternar para o Tema Dark";
    };
};

