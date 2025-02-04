// Template literals

// Como usar:
const myName = "Alberto";
console.log(`Seja bem vindo ${myName}!`);

// Arrays:
const timesSerieA = ['Flamengo', 'São Paulo', 'Cruzeiro', 'Palmeiras']; // 0, 1, 2, 3, 4 valores do index

// Acessando o array:
console.log(timesSerieA[0]);

// Alterar um elemento do array: 
timesSerieA[1] = 'Sport'
console.log(timesSerieA[1]);

// Adicionar ou Remover elemento do array:

// push() add no final do array.
timesSerieA.push('Botafogo');
console.log(timesSerieA);

// unshift() add no inicio
timesSerieA.unshift('Fluminense');
console.log(timesSerieA);

// pop() remove o ultimo
timesSerieA.pop('Fluminense');

// shift() remove o primeiro
timesSerieA.shift('Fluminense');

console.log(timesSerieA);


// Tamanho do array:
console.log(timesSerieA.length) // 4



// 1. Altere o valor da variável menuServices para que ela passe a ter o valor “Serviços”.
// Isso deve ser feito através da variável menu.

const menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// const menuServices = '';

const menuServices = menu[1]
console.log(menuServices);

// 2. Adicione o valor “Contato” no final do array menu2.

const menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu2.push('Contato')

console.log(menu2);