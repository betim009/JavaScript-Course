// 4. Iterando sobre Arrays em JSON:
// Dado o JSON com informações de alunos, imprima os nomes dos alunos.

const json = {
    "alunos": [
        { "nome": "Alberto", "idade": 28 },
        { "nome": "Creuza", "idade": 64 },
        { "nome": "Adenil", "idade": 60 },
    ]
};

const alunos = json.alunos;

for (let index = 0; index < alunos.length; index++) {
    console.log(alunos[index])
}