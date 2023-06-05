function emailValidate() {
    const email = document.getElementById("input-email").value;
    const regex = /\S+@\S+\.\S+/.test(email);
    if (regex) {
        return true;
    } else {
        return false;
    };
};

function passwordValidate() {
    const password = document.getElementById("input-password").value;
    if (password.length > 5) {
        return true;
    } else {
        return false;
    };
};

function loginValidate() {
    const email = emailValidate();
    const password = passwordValidate();

    const btnEntrar = document.getElementById("login-submit");

    const validate = email && password;

    if (validate) { 
        btnEntrar.disabled = false;
    } else {
        btnEntrar.disabled = true;
    }
};

function sendLogin() {
    const email = emailValidate(); 
    const password = passwordValidate();

    const validate = email && password;


    if (validate) { 
        alert("Login feito com sucesso!");
    };
};