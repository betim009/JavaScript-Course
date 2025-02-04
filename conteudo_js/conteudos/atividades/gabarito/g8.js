const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1
for (let i = 0; i < numbers.length; i += 1) {
    console.log('1:', numbers[i]);
};

// 2
let sum = 0;
for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
};

console.log('2:', sum);

// 3
sum = 0;
let resultado = 0;

for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
    resultado = sum / numbers.length;
}

console.log('3:', resultado);

// 4
sum = 0;
resultado = 0;

for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
    resultado = sum / numbers.length;
}

if (resultado > 20) {
    console.log('4:', 'O valor da média aritmética é maior que 20');
} else {
    console.log('4:', 'O valor da média aritmética é menor ou igual a 20');
};


// 5
let j = numbers[1]; // Vai ser utilizado para ser o número depois do indice

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > j) {
        j = numbers[i]; // se ele for maior, ele pega o resultado para si
    };
};

console.log('5:', j);

// 6
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        result += 1;
    }
};

if (result === 0) {
    console.log('6:', 'Nenhum valor ímpar encontrado');
} else {
    console.log('6:', result);
};

// 7
let fatorial = 1;

// Nesse caso vamos começar em 10 e decrementar 1 a cada loop
for (let index = 10; index > 0; index -= 1) {
    console.log('7:', index)
    fatorial *= index;
};

console.log('7:', fatorial);