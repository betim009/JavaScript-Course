// 1. Faça:
// Adicione as propriedades email, fone, userGithub e linkedIn
// ao objeto customer (do exemplo anterior), chamando a função addProperty.

const customer = {
    firstName: 'Alberto',
    age: 27,
    job: 'Software Engineer',
    birthPlace: '09/07/1995',
};

const addProperty = (object, key, value) => {
    if (typeof object[key] === "undefined") {
        object[key] = value;
    };
};

addProperty(customer, 'email', 'alberto@gmail.com');
addProperty(customer, 'fone', '99999-9999');
addProperty(customer, 'userGithub', 'bebeto-js');
addProperty(customer, 'linkedIn', 'https://linkedin.com/bebeto-js');

// Exibe o objeto transformado
console.log(customer);