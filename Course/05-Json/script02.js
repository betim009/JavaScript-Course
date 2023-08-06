// Objeto para Json

const person = {
    nome: "Alberto",
    age: 28,
    city: "Iúna"
};

const personToJson = JSON.stringify(person);
console.log(personToJson);