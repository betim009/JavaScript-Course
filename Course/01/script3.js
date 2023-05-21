// Operadores de comparação

// Operador de Comparação	Descrição
// ==	Igual a (valor)
// ===	Estritamente igual a (valor e tipo)
// !=	Diferente de
// >	Maior que
// >=	Maior ou igual que
// <	Menor que
// <=	Menor ou igual que

// Estrutura If Else / Se Senão
const idade = 90;

if (idade >= 18) {
    console.log("Maior de idade.");
} else {
    console.log('Menor de idade.')
}



const idadeAlberto = 27;
let canVote;

if (idadeAlberto >= 16) {
    canVote = "Pode Votar!";
} else {
    canVote = "Não pode Votar!";
}

console.log(canVote)


// Operador Ternário
// <condição> ? <retorno caso condição seja verdadeira> : <retorno caso condição seja falsa>;

const idadePessoa = 15;

const youCanVote = idadePessoa >= 16 ? "Pode Votar" : "Não Pode";
console.log(youCanVote);