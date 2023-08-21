const {
    createUser,
    deleteById,
    getAllUsers,
    getUserById,
    updateUserById
} = require('./scripts')

// todos usuários
const allUsers = getAllUsers();
// console.log(allUsers)

// busca por id
const findUser = getUserById(31);
// console.log(findUser)

// cria usuário
const new_user_31 = createUser({ name: 'perry', email: 'perry@gmail.com', password: "pddd1ddd" });
// console.log(new_user_31)

// altera usuario 
const updateUser = updateUserById(31, { name: 'Alex', email: 'perry@email.com', password: '1234567' });
// console.log(updateUser)

// deleta usuario
const deleteUser = deleteById(31);
// console.log(deleteUser)

