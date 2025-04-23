// Funções:

// Função que imprime uma msg de bom dia:
function bomDia(nome) {
    return `Bom dia!, ${nome}!`;
};

console.log(bomDia('Alberto'));


// Função que soma dois números:
function somaDoisNumeros(num1, num2){
    return num1 + num2;
};

console.log(somaDoisNumeros(5,5));

const result = somaDoisNumeros(10, 10);
console.log(result);


// 1. Considere a variável balance, que representa a quantia em conta 
// da pessoa cliente do TrybeBank e escreva quatro funções que:

// Adiciona um valor ao balance;
// Subtraia um valor do balance;
// Multiplique o valor do balance por uma taxa;
// Divida o valor do balance.

const balance = 50;

function sumBalance(value) {
    return value + 50;
}

function subBalance(value){
    return balance - value;
}

function mulBalance(value){
    return value * balance;
};

function divBalance(value){
    return balance / value;
};

console.log(sumBalance(150));
console.log(subBalance(50));
console.log(mulBalance(5));
console.log(divBalance(2));


const filaDoBanco = [
    'Alberto',
    'Carlos',
    'Daniel',
    'Maria',
    'Dilza',
];

function chamaFila(data) {
    for (let i = 0; i < data.length; i += 1) {
        console.log(`Ordem da fila: ${data[i]}.`)
    };
};

chamaFila(filaDoBanco);


// 1. Atividade:
// Faça um programa para adicionar pessoas clientes ao array do 
// listaDeNomes. A função deve se chamar addNome e receber um parâmetro
// do tipo string e, caso o parâmetro não seja do tipo string,
// imprimir a mensagem: “O parâmetro passado deve ser do tipo string”.

const listaDeNomes = ['Alberto', 'Creusa', 'Carlos', 'Daniel'];

function addNome(data) {
    if (typeof data == 'string') {
        listaDeNomes.push(data);
        console.log("Nome adicionado com sucesso!");
    } else {
        console.log("O parâmetro passado deve ser do tipo string");
    };
};

addNome('Alberto Couto');

// Agora iremos escrever uma função chamada addNomes que irá adicionar um array de novas pessoas
// ao nosso array listaDeNomes.
// Certifique - se de que somente sejam adicionados ao array listaDeNomes valores do tipo string.
// Caso o parâmetro não seja do tipo string, imprimir a mensagem: “Todos os valores precisam ser strings.”.

const listaDeNomes = ['Alberto', 'Creusa', 'Carlos', 'Daniel'];

function addNome(data) {
    for (let i = 0; i < data.length; i += 1) {
        if (typeof data[i] === 'string') {
            listaDeNomes.push(data[i]);
        } else {
            console.log('Todos os valores precisam ser strings.');
        };
    }
    console.log(listaDeNomes);
};

addNome(['Jorge', 'Gabriel']);
addNome(['Daniely', 3]);

// Arrow functions ( ) => { }

// Criando funções com arrow functions
const some = (num1, num2) => {
    return num1 + num2;
};

console.log(some(5, 10)) // 15


// Modelos com uma linha:
// Não precisa de return
// Não precisa de bigodes {}
const someTwo = (num1, num2) =>  num1 + num2;


console.log(someTwo(20, 20)) // 40