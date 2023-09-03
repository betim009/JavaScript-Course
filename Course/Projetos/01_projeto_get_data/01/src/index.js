const users = require('./data/users');
const products = require('./data/products');

// Functions
const { getAll, getById } = require('./functions/scripts');
const { createUser, updateUserById, deleteById } = require('./functions/user');
const { createProduct, updateProductById, deleteProductById } = require('./functions/product');


// Rotas
const allUsers = getAll(users); // todos usuários
// console.log(allUsers);

const allProducts = getAll(products); // todos produtos
// console.log(allProducts);

const findUser = getById(users, '1'); // busca usuario por id
// console.log(findUser);

// busca produto por id
const findProduct = getById(products, 1)
// console.log(findProduct);

// Cria usuário
const new_user_31 = createUser(users,
    {
        name: 'perry',
        email: 'perry@gmail.com',
        password: "password_1_perry"
    });
// console.log(new_user_31);
// console.log(allUsers);


// altera usuario 
const updateUser = updateUserById(users, 31,
    {
        name: 'Alex',
        email: 'alberto@gmail.com',
        password: '1234567'
    });
console.log(updateUser)
console.log(allUsers)

// deleta usuario
// const deleteUser = deleteById(users, 31);

