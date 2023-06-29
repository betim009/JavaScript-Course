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

    if (account) {
      alert("Login foi um sucesso!")
      return window.location.href = "home.html";
    } else {
      alert("Login Inválido!")
    }

  } else {
    alert("Sem Valores no LocalStorage");
  }
}
