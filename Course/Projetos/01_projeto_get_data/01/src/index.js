const users = require('./data/users');
const products = require('./data/products');

// Functions
const { getAll, getById } = require('./functions/scripts');
const { createUser, updateUserById, deleteById } = require('./functions/user');


// Rotas
const allUsers = getAll(users); // todos usuários
// console.log(allUsers);

const allProducts = getAll(products); // todos produtos
// console.log(allProducts);

const findUser = getById(users, 1); // busca usuario por id
// console.log(findUser);

// busca produto por id
const findProduct = getById(products, 1)
// console.log(findProduct);https://www.twitch.tv/tftoddy

// Cria usuário
const new_user_31 = createUser(users,
    {
        name: 'perry',
        email: 'perry@gmail.com',
        password: "pddd1ddd"
    });
// console.log(new_user_31)


// altera usuario 
const updateUser = updateUserById(users, 31,
    {
        name: 'Alex',
        email: 'perry@email.com',
        password: '1234567'
    });
// console.log(updateUser)

// deleta usuario
const deleteUser = deleteById(users, 31);
console.log(deleteUser)

