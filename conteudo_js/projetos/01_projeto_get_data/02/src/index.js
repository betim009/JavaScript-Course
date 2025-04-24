const { getData, getById, createUser, updateById } = require('./scripts');

// data - arquivo completo
const data = getData();
// console.log(data) // exibe data

// PROCURA POR ID
// console.log(data.map((e) => {
//     return e.id; // Retorna o valor da chave id
// }));

// Exibe tods name
// console.log(data.map((e) => e.name));

// Exibe todos emails
// console.log(data.map(e => e.email));


// PROCURA USUARIO PELO ID
// const user_id_1 = getById(1);
// console.log(user_id_1);

// console.log(data.find(e => e.id === 1)) // busca pelo id === 1
// console.log(data.find(e => e.email === "debora@email.com")) // busca pelo email 
// console.log(data.find(e => e.name.includes("Alberto"))) // busca se tem o nome "Alberto"


// CRIA USUARIO
const user_31 = createUser(
    {
        name: 'perry',
        email: 'perry@email.com',
        password: '123perry'
    });

// console.log(user_31)

// UPDATE USER
const updateUser = updateById(31, { name: 'alberto', email: 'perry@email.com', password: '123perry' })
// console.log(updateUser)
console.log(data)
