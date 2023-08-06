// JSON é a sigla para JavaScript Object Notation
// (Notação de Objeto em Javascript, em tradução livre) 
// e foi idealizado justamente para resolver esse problema de padronização
// de comunicação entre sistemas web, trazendo mais simplicidade e leveza na utilização.

// Um dado JSON pode ser um Object. Para isso, usamos as chaves { } no início da estrutura;
// Um dado JSON pode ser um Array. Para isso, usamos os colchetes [ ] no início da estrutura;
// O JSON suporta caracteres Unicode, o que significa que ele pode ser usado para transmitir dados em diferentes idiomas e scripts;
// A chave é separada de seus valores correspondentes por dois pontos :;
// A vírgula , separa as entradas (no caso de objetos) ou os valores (em caso de arrays) no JSON.

// Exemplo de JSON simples que é um Object:
const json = {
    "city": "Goiânia",
    "temperature": 28,
    "humidity": 70,
    "conditions": "Ensolarado"
}

// Exemplo de JSON que é um Array: 
const jsonArray = [
    {
        "product": "Arroz",
        "brand": "Tio João",
        "price": 10.50
    },
    {
        "product": "Feijão",
        "brand": "Camil",
        "price": 8.99
    }
]



