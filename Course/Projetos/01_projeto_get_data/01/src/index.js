const {
    createUser,
    deleteById,
    getAllUsers,
    getUserById,
    updateUserById
} = require('./scripts')

// todos usuários
const allUsers = getAllUsers();

// busca por id
const findUser = getUserById();

// cria usuário
// const new_user_31 = createUser({ name: 'perry', email: 'perry@gmail.com', password: "pddd1ddd" });

// altera usuario 
const updateUser = updateUserById(30, { name: 'Alex', email: 'perry@email.com', password: '1234567' });

// deleta usuario
const deleteUser = deleteById(30);

// chamadas
console.log(updateUser)
console.log(deleteUser)