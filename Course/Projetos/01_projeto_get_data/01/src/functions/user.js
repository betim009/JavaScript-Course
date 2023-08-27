const { validateId, validateUser } = require('../middleware/validations')

function createUser(data, user) {
    const validUser = validateUser(user);

    if (validUser) {
        return validUser;
    };

    const { name, email, password } = user

    // Encontrar o próximo ID disponível:
    const newId = data.length + 1;

    const newUser = {
        id: newId,
        name,
        email,
        password,
    };

    data.push(newUser);

    return newUser;
};

function updateUserById(data, id, userUpdate) {
    const validId = validateId(id);

    if (validId) {
        return validId;
    };

    const validUser = validateUser(userUpdate);

    if (validUser) {
        return validUser;
    };

    for (let index = 0; index < data.length; index++) {
        const user = data[index];
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

function deleteById(data, id) {
    const validId = validateId(id);

    if (validId) {
        return validId;
    };

    const newUsers = [];
    let userRemoved = '';

    for (let index = 0; index < data.length; index++) {
        const user = data[index];
        if (user.id !== id) {
            newUsers.push(user);
        };

        if (user.id === id) {
            userRemoved = user.name;
        };
    };

    if (data.length === newUsers.length) {
        return 'not found user'
    };

    return `user ${userRemoved} removed`;
};

module.exports = {
    createUser,
    updateUserById,
    deleteById,
};