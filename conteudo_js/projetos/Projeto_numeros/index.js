const scripts = require('./scripts')

const even = scripts.getEven([2, 2, 4, 6, 5, 1, 3, 2, 14, 3]);
const odd = scripts.getOdd([2, 2, 0]);

// Chamadas
console.log(scripts.showEven(even))
console.log(scripts.showOdd(odd))

