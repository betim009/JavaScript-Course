const data = require('./data')

const getData = () => {
    if (!data) {
        return 'Data not found';
    };

    if (!Array.isArray(data) || data.length === 0) {
        return 'Data is not a valid array or array is empty';
    };

    return data;
};

const getById = (id) => {
    const users = getData();
    if (!id) {
        return 'not found id';
    };

    if (typeof id !== 'number') {
        return 'id not is number'
    };

    if (id > users.length) {
        return `User with id '${id}' not found`;
    };

    const findUser = users.find((user) => user.id === id);

    return findUser;
};

const createUser = (user) => {
    const users = getData();
    const newId = users.length + 1;

    if (!user) {
        return 'Not found user';
    };

    if (typeof user !== 'object') {
        return 'Not object';
    };

    const { name, email, password } = user;

    if (!name || !email || !password) {
        return 'name, email or password required';
    };

    const newUser = {
        id: newId,
        ...user,
    };

    users.push(newUser);
    return newUser;
};

const updateById = (id, userUpdate) => {
    const users = getData();

    if (id > users.length) {
        return `User with id '${id}' not found`;
    };

    const findUser = users.find(user => user.id === id);

    const newUser = {
        ...findUser,
        name: userUpdate.name,
        email: userUpdate.email,
        password: userUpdate.password,
    };

    users[id - 1] = newUser;

    return newUser;
};


module.exports = {
    getData,
    getById,
    createUser,
    updateById,
};