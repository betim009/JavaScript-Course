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



// 1. Declarando Variaveis
var userEmail = 'alberto@gmail.com';
let userId = 26;
const userCity = 'Iúna';

console.log(userEmail = 'outrapessoa@gmail.com') // outrapessoa@gmail.com
console.log(userId = 1)
// console.log(userCity = 'Alegre') // TypeError: Assignment to constant variable.

// A variavel Var ela foge do escopo.

// Escopo: 01
if (true) {
    var userAge = '20'
}
console.log(userAge)

// Escopo com error

// if (true){
//     let userTwoAge = '20'
//     console.log(userTwoAge)
// }
// console.log(userTwoAge)


// Tipos de Variaveis
const fullName = 'Alberto F. Couto';
const age = 28
const flameguista = true;

// saída: string number boolean
console.log(typeof fullName, typeof age, typeof flameguista)

// saída: undefined
console.log(typeof vascaino)