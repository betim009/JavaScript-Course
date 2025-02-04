function getEven(array) {
    let count = 0

    for (let index = 0; index < array.length; index++) {
        const number = array[index];

        if (number % 2 === 0) {
            count++
        };
    }
    return count
}

function getOdd(array) {
    let count = 0;

    for (let index = 0; index < array.length; index++) {
        const number = array[index];

        if (number % 2 !== 0) {
            count++
        };
    }
    return count;
};

function showEven(even) {
    if (even > 0) {
        return `Resultado de números pares: ${even}`;
    } else {
        return 'Nenhum par encontrado.'
    };
};

function showOdd(odd) {
    if (odd > 0) {
        return `Resultado de números ímpares: ${odd}`;
    } else {
        return 'Nenhum ímpar encontrado.'
    };
};



module.exports = {
    getEven,
    getOdd,
    showEven,
    showOdd,
}