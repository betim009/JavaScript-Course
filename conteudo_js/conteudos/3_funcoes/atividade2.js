// Faça uma função que encontra o índice do menor valor em um array de números.

function getSmallestIndex(numbers) {
    let smallestIndex = 0;

    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[smallestIndex] > numbers[index]) {
            smallestIndex = index;
        }
    }

    return smallestIndex;
};


console.log(getSmallestIndex([2, 3, 1, 4]))