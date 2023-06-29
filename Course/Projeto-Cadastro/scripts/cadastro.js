function createAccount(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Criando array accounts dentro do localStorage
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // Objeto que vai ser passado dentro do localStorage
    const account = {
        email: email,
        password: password
    };

    // Adicionando objeto dentro do array
    accounts.push(account);

    // Colocando valor dentro do localStorage
    localStorage.setItem("accounts", JSON.stringify(accounts));

    // Alerta do resultado
    alert("Conta Criada com Sucesso!");
}
