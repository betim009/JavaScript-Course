// 5. Adicionando Elementos a um Array JSON:
// Dado o JSON de produtos, adicione um novo produto ("Celular")
// à lista de produtos e imprima o JSON resultante.

const json = {
    "produtos": ["TV", "Notebook", "Fones"]
};

json.produtos.push("Celular");

const newJson = JSON.stringify(json);
console.log(newJson);
