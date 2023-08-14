const scripts = require('./scripts')

// todos usuários
const allUsers = scripts.getAllUsers()
// busca por id
const findUser = scripts.getUserById(1)
// cria usuário
const createUser = scripts.createUser({ name: 'perry', email: 'perry@email.com', password: '123perry' }) 
// altera usuario 
const updateUser = scripts.updateUserById(1, { name: 'alex', email: 'perry@email.com', password: '123perry' })


console.log(allUsers)