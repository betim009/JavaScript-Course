# Funções em JavaScript

## Conceito Básico

Função é um bloco de código, ok? 

Não confunda função com for.

FOR você vai usar para lidar com arrays/listas.

A função você vai usar para toda vez que um bloco de código precisar ser utilizado novamente.

## Tipos de Funções

### Função Tradicional

```javascript
function verificarEmail(stringEmail) {
    if (stringEmail.includes("@")) {
        return true
    } else {
        return false
    }
}

console.log(verificarEmail("pauloemail.com"))       // false
console.log(verificarEmail("paulo@email.com"))      // true
```

### Função Arrow (Arrow Function)

```javascript
const veriEmail = (stringEmail) => {
    if (stringEmail.includes("@")) {
        return true
    } else {
        return false
    }
}

console.log(veriEmail("alberto@email.com"))         // true
```

## Por que Usar Funções?

Sem funções, teríamos que repetir o código várias vezes:

```javascript
const v1 = "pauloemail.com"
const v2 = "paulo@email.com"

// Sem funções teríamos que repetir o código:
if (v1.includes("@")) {
    console.log(true) 
} else {
    console.log(false)
}

if (v2.includes("@")) {
    console.log(true) 
} else {
    console.log(false)
}
```

## Como Criar uma Arrow Function (Passo a Passo)

1. Escreva a estrutura básica da arrow function:
   ```javascript
   () => {}
   ```

2. Dê um nome para a função:
   ```javascript
   nomeFuncao = () => {}
   ```

3. Adicione a palavra-chave `const` para declarar corretamente:
   ```javascript
   const nomeFuncao = () => {}
   ```

4. Adicione os parâmetros e o código:
   ```javascript
   const nomeFuncao = (parametro1, parametro2) => {
       // código aqui
       return resultado;
   }
   ```

## Diferenças entre Funções Tradicionais e Arrow Functions

1. **Sintaxe**: Arrow functions são mais concisas
2. **Contexto do `this`**: Funciona diferente em cada tipo de função
3. **Hoisting**: Funções tradicionais são "elevadas" no código, arrow functions não

## Exemplo Simplificado

Para arrow functions com retorno simples, você pode simplificar ainda mais:

```javascript
// Versão completa
const veriEmail = (stringEmail) => {
    return stringEmail.includes("@");
}

// Versão simplificada (sem chaves e sem return)
const veriEmail = (stringEmail) => stringEmail.includes("@");
```

## Dica

Funções são fundamentais em JavaScript. Elas ajudam a:
- Evitar repetição de código
- Organizar o código em blocos lógicos
- Tornar o código mais fácil de manter e debugar