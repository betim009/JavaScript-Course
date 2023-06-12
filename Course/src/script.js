const headers = ['Inicio', 'Contato', 'Sobre', 'Vendas'];

for (let i = 0; i < headers.length; i += 1) {
    console.log(headers[i])
};

for (let i = headers.length - 1; i >= 0; i -= 1) {
    console.log(headers[i])
};


const string = 'cavalo';
let newString = '';
for (let i = string.length - 1; i >= 0; i -= 1) {
    newString += string[i];
};

console.log(newString)