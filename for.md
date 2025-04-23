
# Estruturas de Repetição em JavaScript

Neste material, vamos aprender a **percorrer arrays** usando diferentes estruturas de repetição. Vamos entender quando usar `for`, `for...of` e `for...in`, e como escolher a melhor opção para cada situação.

## 🧾 Exemplo de Array

```js
const vendas = [
    { id: 1, data: "22/04", valor: 350, id_compra: 2, id_venda: 3 },
    { id: 2, data: "22/04", valor: 150, id_compra: 53, id_venda: 12 },
    { id: 3, data: "22/04", valor: 3320, id_compra: 12, id_venda: 21 }
];
```

---

## 📌 Como acessar um item do array?

```js
vendas[0] // Acessa o primeiro elemento
```

---

## 🔁 Estruturas de Repetição

### 1. `for...of`  
- Percorre do primeiro ao último elemento
- Acessa **apenas o elemento** (não o índice)

```js
for (const element of vendas) {
    console.log(element);
}
```

> Ideal para percorrer arrays quando **não precisa do índice**.

---

### 2. `for...in`  
- Percorre os **índices** do array
- Permite acessar os elementos usando `array[index]`

```js
for (const index in vendas) {
    console.log(vendas[index]); // Acessa o elemento
}
```

> Útil quando precisa do **índice** e está lidando com arrays pequenos.

---

### 3. `for` clássico (o Mother F***er FOR 😎)
- Total controle: define início, fim e incremento
- Pode acessar tanto o índice quanto o elemento

```js
for (let index = 0; index < vendas.length; index++) {
    const element = vendas[index];
    console.log(element);
}
```

> Perfeito para situações que **exigem controle total** da iteração (ex: pular elementos, inverter ordem, parar em condições específicas, etc).

---

## 💡 Dica Extra: `for...of` com contador manual

Se quiser o elemento **e** a posição com `for...of`, dá pra criar um contador manual:

```js
let contador = 0;
for (const element of vendas) {
    console.log(contador, element);
    contador += 1;
}
```

---

## ✅ Resumo

| Estrutura   | Acessa Elemento | Acessa Índice | Controle Total |
|-------------|-----------------|----------------|----------------|
| `for...of`  | ✅              | 🚫 (só com contador) | 🚫              |
| `for...in`  | ✅ (via `array[index]`) | ✅           | 🚫              |
| `for`       | ✅              | ✅             | ✅              |

---

## 🧠 Qual usar?

- **Tem uma base de dados pequena?**
  - Não precisa do índice: use `for...of`
  - Precisa do índice: use `for...in`
- **Quer controle total?** Use `for`
- **Em dúvida?** Use `for`

> Lembre-se: o melhor laço é aquele que **torna seu código mais claro e fácil de manter**.

---
