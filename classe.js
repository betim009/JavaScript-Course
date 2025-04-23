// Classes em javascript


// Escrevemos classe para criar objetos tlg? 

// Vamos lá, primeiro devemos entender a sintaxe da parada

/*

Devemos usar a palavra reservada class

e adicionar o método construtor: constructor()


class NomeDaClasse {
    constructor() {
        ...
    }
}




*/

class Usuario {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

/*
    No exemplo acima, criamos a classe Usuario, 
    e que ela possui 2 propriedades, pense nela como se fosse
    parametros que uma função receba ok? mas de uma forma 2.0 turbinado.


    MAS OLHA, classe não é um objeto, ela é uma forma de criar um objeto. 
    A partir da classe, estamos criando um objeto. 

*/

// Vamos criar o objeto a partir da classe então:
const alberto = new Usuario("Alberto", "albertodev@email.com");
const lebron = new Usuario("Lebron James", "lakers@email.com");

// Exibindo os 2 usuários/objetos.
console.log(alberto)
console.log(lebron)

// Exibindo a chave de um desses objetos.
console.log(alberto.email)


/* 
    LEIA:
    O método do construtor
O método construtor é um método especial:

Tem que ter o nome exato "construtor"
Ele é executado automaticamente quando um novo objeto é criado
Ele é usado para inicializar as propriedades do objeto
Se você não definir um método construtor, o JavaScript adicionará um método construtor vazio.

font: w3schools.
*/



/* 
    Vamos agora criar os métodos das classes. 
    Se bota fé que ao longo dos seus estudos você utilizou vários métodos?

    log(), toUpperCase(), toLowerCase(), map() e dentre outros? 

    Agora na sua classe, você vai criar um método para criar uma situação especial para sua
    necessidade, bota fé?

    É como agora se você fosse criar uma função para essa classe, e seu objeto vai armazenar
    essa e dentre outras funções. 

    Muito ZIKA.


    Sintaxe:
    class ClassName {
        constructor() { 
            ...
        }
        method_1() { 
            ...
        }
        method_2() { 
            ...
        }
    }
*/

class User {
    constructor(name, email, data) {
        this.name = name;
        this.email = email;
        this.data = data;
    }
    //  Criando um método para calcular a idade do usuário
    calc_idade() {
        return { email: this.email, idade: 2025 - this.data}
    }
}

// Criando os objetos da classe User
const marcelo = new User("Marcelo J.", "marcelo@email.com", 1998);
const maria = new User("Maria A.", "maria@email.com", 2010);

// Exibindo o resultado dos métodos do objeto User
console.log(marcelo.calc_idade());
console.log(maria.calc_idade());