const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let j = numbers[1]; // Vai ser utilizado para ser o número depois do indice

for (let i = 0; i < numbers.length; i+= 1) {
    if(numbers[i] > j){
        j = numbers[i]; // se ele for maior, ele pega o resultado para si
    };
};

console.log(j);