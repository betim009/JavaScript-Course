// 1. Operadores de comparação:
console.log("1. Operadores de comparação: ") // ignore

const valorA = 10;
const valorB = 20;
const valorC = "Alberto";
const valorD = "Creuza";

// Operador "==" e Igual a (valor):
console.log("\nOperador '==' e Igual a (valor): ") // ignore
let compare = valorA == valorB; 
console.log(compare);

// Operador Estritamente igual "===":
console.log("Operador Estritamente igual '===':") // ignore
compare = valorA === 10;
console.log(compare);

// Operador maior e menor:
console.log("Operador maior e menor:") // ignore
compare = valorA > valorB;
console.log(compare);

compare = valorA < valorB;
console.log(compare);

// 2. Estrutura If Else / Se Senão
console.log('\n2. Estrutura If Else / Se Senão');

// 2.1 Maior de idade
const idade = 90;

if (idade >= 18) {
    console.log("Maior de idade.");
} else {
    console.log('Menor de idade.')
}

console.log('\n') // ignore

// 2.2 Se pode votar:
const idadeAlberto = 27;
let canVote;

if (idadeAlberto >= 16) {
    canVote = "Pode Votar!";
} else {
    canVote = "Não pode Votar!";
}

console.log(canVote)

console.log('\n') // ignore

// 3. Operador Ternário:
console.log('3. Operador Ternário:')

const idadePessoa = 15;

// <condição> ? <retorno caso condição seja verdadeira> : <retorno caso condição seja falsa>;
const youCanVote = idadePessoa >= 16 ? "Pode Votar!" : "Não Pode";
console.log(youCanVote);

// Operador de Comparação	Descrição
// ==	Igual a (valor)
// ===	Estritamente igual a (valor e tipo)
// !=	Diferente de
// >	Maior que
// >=	Maior ou igual que
// <	Menor que
// <=	Menor ou igual que