// Opeadores Lógicos
// &&	AND (E)
// ||	OR (Ou)
// !	NOT (Negação)


const food = "pão";
const drink = "leite";

if (drink === "café" && food === "pão") {
    console.log("Obrigado!");
} else {
    console.log("Erraram meu pedido.")
}


const arroz = true;
const feijao = true;
// const carne = true;

const carne = false;

// const listaDeCompras = arroz && feijao && carne;
// const listaDeCompras = arroz && feijao || carne;
const listaDeCompras = arroz && feijao && carne;

console.log(listaDeCompras)


// Not

console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);

let charmander = "Melhor Pokémon inicial.";
console.log(!charmander); // false

console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no JavaScript. Logo, seu oposto é true.

console.log(!null); // true

console.log(!undefined); // true