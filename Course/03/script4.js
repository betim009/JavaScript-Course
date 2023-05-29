// Agora iremos escrever uma função chamada addNomes que irá adicionar um array de novas pessoas
// ao nosso array listaDeNomes.
// Certifique - se de que somente sejam adicionados ao array listaDeNomes valores do tipo string.
// Caso o parâmetro não seja do tipo string, imprimir a mensagem: “Todos os valores precisam ser strings.”.

const listaDeNomes = ['Alberto', 'Creusa', 'Carlos', 'Daniel'];

function addNome(data) {
    for (let i = 0; i < data.length; i += 1) {
        if (typeof data[i] === 'string') {
            listaDeNomes.push(data[i]);
        } else {
            console.log('Todos os valores precisam ser strings.');
        };
    }
    console.log(listaDeNomes);
};

addNome(['Jorge', 'Gabriel']);
addNome(['Daniely', 3]);