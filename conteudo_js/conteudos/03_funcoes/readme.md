 📘 Fundamentos de Funções em JavaScript

Este material aborda os fundamentos de **funções em JavaScript**, com foco em criação, uso de parâmetros, validações, estruturas de repetição, arrays e o uso de **arrow functions**.

Funções são blocos de código que podem ser executados sempre que você precisar. Elas ajudam a **organizar**, **reutilizar** e **modularizar** seu código.

---

## 🧠 Funções Tradicionais


### ✅ Função sem parâmetros
Uma função pode ser executada mesmo sem parâmetros, apenas para realizar uma ação.
```js
function mostrarMensagem() {
    console.log("Bem-vindo ao curso de JavaScript!");
}

mostrarMensagem();
```

### ✅ Função com retorno
Uma função pode retornar um valor usando a palavra-chave return.
```js
function somar(a, b) {
    return a + b;
}

const resultado = somar(10, 5);
console.log(resultado); // 15
```

### ✅ Funções anônimas (expressão de função)
Podem ser atribuídas a variáveis.
```js
const multiplicar = function(a, b) {
    return a * b;
};

console.log(multiplicar(4, 3)); // 12

```

### ✅ Exemplo: Saudação personalizada

```js
function bomDia(nome) {
    return `Bom dia, ${nome}!`;
}

console.log(bomDia('Alberto'));
```

### ✅ Exemplo: Soma de dois números
```js
function somaDoisNumeros(num1, num2) {
    return num1 + num2;
}

console.log(somaDoisNumeros(5, 5)); // 10

const result = somaDoisNumeros(10, 10);
console.log(result); // 20
```

### 💰 Operações com saldo (balance)
Simulação de funções que operam com uma variável de saldo fixo:
```js
const balance = 50;

function sumBalance(value) {
    return balance + value;
}

function subBalance(value) {
    return balance - value;
}

function mulBalance(value) {
    return balance * value;
}

function divBalance(value) {
    return balance / value;
}

console.log(sumBalance(150));  // 200
console.log(subBalance(50));   // 0
console.log(mulBalance(5));    // 250
console.log(divBalance(2));    // 25
```


### 🧑‍💼 Fila de atendimento
Exemplo com array e for:
```js
const filaDoBanco = ['Alberto', 'Carlos', 'Daniel', 'Maria', 'Dilza'];

function chamaFila(data) {
    for (let i = 0; i < data.length; i++) {
        console.log(`Ordem da fila: ${data[i]}.`);
    }
}

chamaFila(filaDoBanco);
```

### ➕ Adicionando nomes a uma lista
✔️ Verificação de tipo com typeof
```js
const listaDeNomes = ['Alberto', 'Creusa', 'Carlos', 'Daniel'];

function addNome(data) {
    if (typeof data === 'string') {
        listaDeNomes.push(data);
        console.log("Nome adicionado com sucesso!");
    } else {
        console.log("O parâmetro passado deve ser do tipo string");
    }
}

addNome('Alberto Couto');
```

### 🧩 Adicionando múltiplos nomes com verificação
```js
const listaDeNomes = ['Alberto', 'Creusa', 'Carlos', 'Daniel'];

function addNomes(data) {
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'string') {
            listaDeNomes.push(data[i]);
        } else {
            console.log('Todos os valores precisam ser strings.');
        }
    }
    console.log(listaDeNomes);
}

addNomes(['Jorge', 'Gabriel']); // OK
addNomes(['Daniely', 3]);       // Mostra aviso
```

### 🏹 Arrow Functions
✅ Modelo tradicional com return
```js
const some = (num1, num2) => {
    return num1 + num2;
};

console.log(some(5, 10)); // 15
```

### ✅ Modelo simplificado
Sem {} e sem return quando for uma linha só:
```js
const someTwo = (num1, num2) => num1 + num2;

console.log(someTwo(20, 20)); // 40
```

## Dicas Finais
- 💡 Use arrow functions para deixar o código mais limpo e moderno.

- 💡Sempre valide os dados quando estiver lidando com entradas de usuários.

- 💡Funções ajudam a reaproveitar código e manter a organização do projeto.

- 🧠 Nomeie suas funções com verbos que indiquem a ação: calcular, mostrar, adicionar.

- 🧠 Use return para que a função devolva algum resultado que possa ser reutilizado.

- 🧠 Teste suas funções com valores variados para ter certeza de que funcionam corretamente.