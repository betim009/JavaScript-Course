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
