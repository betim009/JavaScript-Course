function validateLogin(event) {
  event.preventDefault();

  // inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // localStorage
  const accounts = JSON.parse(localStorage.getItem("accounts"));

  // Se Houver cadastro no localStorage
  if (accounts) {
    // Verificando se os inputs estão corretos
    const account = accounts.find((e) => {
      return e.email === email && e.password === password;
    });

    account
      ? alert("Login foi um sucesso!")
      : alert("Login Inválido!")

  } else {
    document.getElementById("message").textContent = "Sem Valores no LocalStorage";
  }
}
