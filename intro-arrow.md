
# 📘 Novo Testamento do JavaScript (ES6+)

A partir do ES6 (ECMAScript 2015), o JavaScript evoluiu com várias **novas funcionalidades** que tornam o código mais limpo, moderno e expressivo. Aqui vamos focar em dois conceitos essenciais:

- Arrow Functions
- Operador Ternário

---

## ⚡ Arrow Functions (Funções de Seta)

As Arrow Functions são uma forma mais curta de escrever funções anônimas.

### Sintaxe Tradicional:

```js
function saudacao(nome) {
    return "Olá, " + nome;
}
```

### Sintaxe com Arrow Function:

```js
const saudacao = (nome) => {
    return "Olá, " + nome;
}
```

### Quando for simples, pode até omitir `{}` e `return`:

```js
const saudacao = nome => "Olá, " + nome;
```

---

## 🧾 Exemplo com `.forEach()` e Arrow Function

Vamos usar um array de objetos de vendas:

```js
const vendas = [
    { id: 1, data: "22/04", valor: 350, id_compra: 2, id_venda: 3 },
    { id: 2, data: "22/04", valor: 150, id_compra: 53, id_venda: 12 },
    { id: 3, data: "22/04", valor: 3320, id_compra: 12, id_venda: 21 }
];
```

### Percorrer o array com `.forEach()`:

```js
vendas.forEach((elemento, indice) => {
    console.log(elemento);
});
```

### Filtrar e imprimir elemento com `id === 3` (versão completa):

```js
vendas.forEach((e, i) => {
    if (e.id === 3) {
        console.log(e);
    }
});
```

### Mesma lógica usando **operador ternário** (forma compacta):

```js
vendas.forEach(e => e.id === 3 ? console.log(e) : null);
```

---

## ❓ Operador Ternário

O operador ternário é uma forma **curta e direta** de fazer condições.

### Estrutura:

```js
condição ? valor_se_verdadeiro : valor_se_falso
```

### Exemplo:

```js
4 > 2 ? console.log("maior") : console.log("menor") // Resultado: "maior"
```

### Outro exemplo (condição falsa):

```js
4 > 20 ? console.log("maior") : console.log("menor") // Resultado: "menor"
```

---

## ✅ Quando usar Arrow Function?

- Quando precisa de uma função curta e clara.
- Quando não precisa de `this` dinâmico.
- Em métodos como `.map()`, `.filter()`, `.forEach()`, etc.

---

## 🧠 Dica Final

Use Arrow Functions e o operador ternário para deixar seu código mais elegante, mas **não abuse da concisão**. Código limpo é aquele que **outros conseguem entender facilmente**!

---
