// 1. Faça um programa para adicionar pessoas clientes ao array do 
// listaDeNomes. A função deve se chamar addNome e receber um parâmetro
// do tipo string e, caso o parâmetro não seja do tipo string,
// imprimir a mensagem: “O parâmetro passado deve ser do tipo string”.

const listaDeNomes = ['Alberto', 'Creusa', 'Carlos', 'Daniel'];



function addNome(data) {
    if (typeof data == 'string'){
        listaDeNomes.push(data)
        console.log("Nome adicionado com sucesso!")
    } else {
        console.log("O parâmetro passado deve ser do tipo string")
    }
};

addNome('Alberto Couto');