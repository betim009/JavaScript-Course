
# 📘 Material Didático: Laços de Repetição com Arrays em JavaScript

## 🎯 Objetivo
Ensinar como percorrer elementos de um array em JavaScript usando diferentes formas de laço, com foco especial no método `forEach`.

---

## 🧠 Conceito Base: O que é percorrer um array?

Quando temos um array, queremos muitas vezes **olhar cada item** dentro dele, **um por um**, para fazer alguma coisa: mostrar, comparar, filtrar etc. Para isso, usamos estruturas chamadas **laços de repetição** (ou **loops**).

---

## 📦 Exemplo de Dados

Vamos usar o seguinte array de filmes:

```javascript
const movies = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        poster: "https://link..."
    },
    {
        id: 2,
        title: "The Godfather",
        year: 1972,
        genre: "Drama",
        poster: "https://link..."
    },
    {
        id: 3,
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        poster: "https://link..."
    }
];
```

---

## 🧭 Tipos de Laços em Arrays

### 1. `for...of`: mais direto

Usado para **pegar cada elemento do array** diretamente.

```javascript
for (const element of movies) {
    console.log(element);
}
```

> 🔎 **Explicação**: Ele percorre o array do início ao fim, e a cada volta, `element` é um objeto do array.

---

### 2. `for...in`: índices do array

Usado para **pegar os índices** do array. Você precisa acessar o elemento depois.

```javascript
for (const index in movies) {
    const element = movies[index];
    console.log(index);
    console.log(element);
}
```

> ⚠️ **Cuidado**: Esse `for` também pode ser usado em objetos, então é melhor evitar com arrays se você só quer os elementos.

---

### 3. `for` tradicional: mais controle

Usado quando queremos **mais controle sobre o início, fim e o passo do laço**.

```javascript
for (let i = 0; i < movies.length; i++) {
    const e = movies[i];
    console.log(i);
    console.log(e);
}
```

> 🛠️ Ideal quando você quer pular elementos ou usar lógica personalizada de contagem.

---

### 4. `forEach`: o moderno e mais usado

Chamado **para cada elemento**, sem precisar declarar índices.

```javascript
movies.forEach((element, index) => {
    console.log(index);
    console.log(element);
});
```

> ✔️ **Mais usado** no dia a dia moderno. Simples, direto, ideal para mostrar ou aplicar lógica em cada item.

Versão ainda mais curta:

```javascript
movies.forEach(e => console.log(e));
```

---

## 🎯 Exemplo de Uso Real: Procurar e Filtrar

### Usando `find()` — para encontrar UM elemento:

```javascript
const encontrar = movies.find(e => e.title === "The Dark Knight");
console.log(encontrar);
```

> 🔍 **Retorna o primeiro que satisfaz a condição**.

---

### Usando `filter()` — para encontrar VÁRIOS elementos:

```javascript
const filtrar = movies.filter(e => e.genre === "Drama");
console.log(filtrar);
```

> 📋 **Retorna um novo array com todos os que satisfazem a condição.**

---

## ✅ Quando usar cada um?

| Tipo          | Quando usar                                      |
|---------------|--------------------------------------------------|
| `for`         | Quando quiser controle total do índice           |
| `for...of`    | Quando quiser só os elementos, sem o índice      |
| `for...in`    | Quando quiser os índices (mas cuidado com objetos) |
| `forEach`     | Quando quiser aplicar uma ação em cada item      |
| `find`        | Quando quiser **um só** item que atenda a condição |
| `filter`      | Quando quiser **vários** itens que atendem a condição |

---

## ⚠️ Dicas Importantes

- O `forEach` **não retorna** um novo array (diferente do `map` ou `filter`).
- O `forEach` **não pode ser interrompido** com `break` ou `return`.
- Use `forEach` quando você **só quiser executar** algo em cada item.

---
