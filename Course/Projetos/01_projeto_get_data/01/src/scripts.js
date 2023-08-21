const data = require('./data')
const { validateData, validateId, validateUser } = require('./validations')

function getAllUsers() {
    const validData = validateData(data);

    if (validData) {
        return validData;
    };

    return data;
};

function getUserById(id) {
    const users = getAllUsers();
    const validId = validateId(id);

    if (validId) {
        return validId;
    };

    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        if (user['id'] === Number(id)) {
            return user;
        };
    };

    return 'User id not found'
};

function createUser(user) {
    const users = getAllUsers();
    const validUser = validateUser(user);

    if (validUser) {
        return validUser;
    };

    const { name, email, password } = user

    // Encontrar o próximo ID disponível:
    const newId = users.length + 1;

    const newUser = {
        id: newId,
        name,
        email,
        password,
    };

    users.push(newUser);

    return newUser;
};

function updateUserById(id, userUpdate) {
    const users = getAllUsers();

    const validId = validateId(id);

    if (validId) {
        return validId;
    };

    const validUser = validateUser(userUpdate);

    if (validUser) {
        return validUser;
    };

    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        const userId = user['id'];

        if (userId === id) {
            user.name = userUpdate.name;
            user.email = userUpdate.email;
            user.password = userUpdate.password;

            return user;  // Se encontrou o usuário, não precisa continuar procurando
        };
    };

    return 'not found'
};

function deleteById(id) {
    users = getAllUsers();

    const validId = validateId(id);

    if (validId) {
        return validId;
    };

    const newUsers = [];
    let userRemoved = '';

    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        if (user.id !== id) {
            newUsers.push(user);
        };

        if (user.id === id) {
            userRemoved = user.name;
        };
    };

    if (data.length === newUsers.length) {
        return 'not found user'
    }

    return `user ${userRemoved} removed`
};




module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteById,
};