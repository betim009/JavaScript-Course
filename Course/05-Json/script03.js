// 1. Acesso a Dados:
// Dado o JSON a seguir, acesse o valor da chave "cidade".

const json = {
    "nome": "Ana",
    "idade": 22,
    "endereco": {
      "cidade": "São Paulo",
      "estado": "SP"
    }
};

console.log(json['endereco']['cidade']);
console.log(json.endereco.cidade);
  