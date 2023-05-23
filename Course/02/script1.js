// for
// inicia; condição; atualização

// Fazendo um contador:
let count = 0;
const limit = 10;

for (let index = 1; index <= limit; index+= 1) {
    console.log(count += 1);
}

// outra versao:
for (let i = 1; i <= 10; i+= 1) {
    console.log(`Valor do index: ${i}`);
}


// Somando todos os elementos de um array de números:

const numbers = [2, 2]; // Array de números -> sum = 4
// const numbers = [2, 2, 6]; // -> sum = 10
// const numbers = [2, 2, 6, 10]; // -> sum = 20
let sum = 0; // Variável complementar que irá acumular os valores da somados


for (let index = 0; index < numbers.length; index += 1) { // Loop for, que irá iterar da posição 0 até o último elemento do array
  sum += numbers[index]; // A variável sum sempre irá receber o valor atual dela + o número do array
};

console.log(sum);




// Outros Exemplos: 
const headers = ['Inicio', 'Sobre', 'Contato', 'Saiba Mais'];

for (let i = 0; i < headers.length; i+=1) {
    console.log(headers[i]);
}