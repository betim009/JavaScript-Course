const data = require('./data')

function getAllUsers() {
    if (!Array.isArray(data) || data.length === 0) 'Not Found';
    if (!data) return 'Not Found';
    return data;
};

function getUserById(id) {
    const users = getAllUsers();
    
    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        if (user['id'] === Number(id)) {
            return user;
        }
    };

    return 'not found by id'
};

function createUser(newUser) {
    const users = getAllUsers();
    // Encontrar o próximo ID disponível:
    const newId = users.length + 1;

    const createNewUser =
    {
        id: newId,
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
    };
    users.push(createNewUser);
    return createNewUser
};

function updateUserById(id, userUpdate) {
    const users = getAllUsers();

    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        const userId = user['id'];

        if (userId === id) {
            user['name'] = userUpdate['name'];
            user['email'] = userUpdate['email'];
            user['password'] = userUpdate['password'];

            break;  // Se encontrou o usuário, não precisa continuar procurando
        }
    }

    return users
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
}