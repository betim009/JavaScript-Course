const filaDoBanco = [
    'Alberto',
    'Carlos',
    'Daniel',
    'Maria',
    'Dilza',
];

function chamaFila(data) {
    for (let i = 0; i < data.length; i += 1) {
        console.log(`Ordem da fila: ${data[i]}.`)
    };
};

chamaFila(filaDoBanco);