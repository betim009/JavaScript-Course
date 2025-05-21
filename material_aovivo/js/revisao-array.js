const array = [
    { id: 1, nome: "Alberto" },
    { id: 2, nome: "Alberto Fernandes" },
    { id: 3, nome: "Alex" },
    { id: 4, nome: "Adriana" },
];

// Exibir todos os usuários(objetos)
for (const element of array) {
    console.log(element)
};

console.log()

// Exibir todos nomes dos usuários(objetos)
for (const element of array) {
    console.log(element.nome)
};

console.log()

// Exibir usuário por id
for (const element of array) {
    if (element.id === 3) {
        console.log(element)
    }
}

console.log()

// Exibir usuário por nome
for (const element of array) {
    if (element.nome === "Alberto") {
        console.log(element)
    }
}

console.log()


/*

Fazer um array parecido com o acima, só que em vez de nome é email.
em vez de econtrar por nome é por email



*/