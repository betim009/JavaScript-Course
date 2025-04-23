// 2. Modificando Valores:
// Dado o JSON abaixo, modifique a idade para 35 e imprima o JSON resultante.

const json = {
    "nome": "Pedro",
    "idade": 30,
    "profissao": "Engenheiro"
};

json.idade = 35

const newJson = JSON.stringify(json)
console.log(newJson)