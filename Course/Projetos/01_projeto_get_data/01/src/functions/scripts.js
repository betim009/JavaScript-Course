const { validateData, validateId, validateUser } = require('../middleware/validations')

function getAll(data) {
    const validData = validateData(data);

    if (validData) {
        return validData;
    };

    return data;
};

function getById(data, id) {
    const validId = validateId(id)

    if (validId) {
        return validId;
    };

    for (let index = 0; index < data.length; index++) {
        const user = data[index];
        if (user['id'] === Number(id)) {
            return user;
        };
    };

    return 'User id not found'
};

module.exports = {
    getAll,
    getById,
};