const scripts = require('./scripts');

// todos usuários
const allUsers = scripts.getData();

// procura usuário pelo id
const userById = scripts.getById(1);

// cria um novo usuário
// const createUser = scripts.createUser({ name: 'perry', email: 'perry@email.com', password: '123perry' });

// atualiza usuario
const updateUser = scripts.updateById(1, { name: 'alberto', email: 'perry@email.com', password: '123perry' })

// chamadas
// console.log(updateUser);
console.log(allUsers)