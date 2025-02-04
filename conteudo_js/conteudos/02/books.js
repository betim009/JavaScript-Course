const livros = [
    {
        nome: "Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        nota_imdb: 8.8,
        personagens: [
            "Frodo Bolseiro",
            "Gandalf",
            "Aragorn",
            "Legolas",
            "Gollum"
        ]
    },
    {
        nome: "Harry Potter e a Pedra Filosofal",
        autor: "J.K. Rowling",
        nota_imdb: 7.6,
        personagens: [
            "Harry Potter",
            "Hermione Granger",
            "Ron Weasley",
            "Alvo Dumbledore"
        ]
    },
    {
        nome: "O Poderoso Chefão",
        autor: "Mario Puzo",
        nota_imdb: 9.2,
        personagens: [
            "Vito Corleone",
            "Michael Corleone",
            "Sonny Corleone",
            "Tom Hagen"
        ]
    },
    {
        nome: "O Código Da Vinci",
        autor: "Dan Brown",
        nota_imdb: 6.6,
        personagens: [
            "Robert Langdon",
            "Sophie Neveu",
            "Silas",
            "Jacques Saunière"
        ]
    },
    {
        nome: "A Saga Crepúsculo: Crepúsculo",
        autor: "Stephenie Meyer",
        nota_imdb: 5.2,
        personagens: [
            "Edward Cullen",
            "Bella Swan",
            "Jacob Black",
            "Alice Cullen"
        ]
    }
];

function exibeTodosPersonagens() {
    const data = [];

    for (let i = 0; i < livros.length; i++) {
        const personagens = livros[i].personagens;

        for (let j = 0; j < personagens.length; j++) {
            data.push(personagens[j]);
        }
    }

    for (let k = 0; k < data.length; k++) {
        console.log(data[k]);
    }
}

exibeTodosPersonagens();
