// 0. São 3 tipos de variavies
var nome = 'alberto';    // Variavel global e altera valor inicial
let nomeDois = 'Alberto' // altera valor inicial
const nomeTres = 'alBerto' // não altera valor inicial

// 1. Declarando Variaveis
const admin = "admin@email.com";
let usuario = "alberto@email.com";

var i = 0;

// 2. Exibindo valores de 'admin' e 'usuario'
console.log('2. Valores de "admin" e "usuario":'); // ignore
console.log(admin);
console.log(usuario);

// Saída de i:
console.log('\nSaída de i:":'); // ignore
console.log(i);

// 3. Tipos de Variaveis:
console.log('\n3. Tipos de Variaveis":'); // ignore
const nomeCompleto = 'Alberto F. Couto';
const idade = 28;
const flameguista = true;

// saída: string number boolean
console.log(typeof nomeCompleto, typeof idade, typeof flameguista);

// saída: undefined
console.log(typeof vascaino); // essa variavel não foi declarada por exemplo.

/*
Tipos de dados
number:	Valores numéricos
string:	Caracteres em forma de texto
boolean:	Verdadeiro ou falso (1 ou 0)
function:	Bloco de código que realiza uma execução específica
object:	Coleções de propriedades que representam uma entidade
undefined:	Valor indefinido
null:	Valor inexistente
*/


// Usar camelCase: em JavaScript, o estilo mais comum é o camelCase,
// em que a primeira palavra começa com letra minúscula e as subsequentes,
// com letra maiúscula, sem espaços;