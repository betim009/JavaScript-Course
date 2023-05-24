// Desafio fatorial
// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// O fatorial é representado pelo sinal !
// Exemplo de 4 fatorial:
// 4! = 4 x 3 x 2 x 1 = 24

let fatorial = 1;

// Nesse caso vamos começar em 10 e decrementar 1 a cada loop
for (let index = 10; index > 0; index -= 1) {
    console.log(index)
    fatorial *= index;
};

console.log(fatorial);