const account = {
  agency: '0975',
  bank: {
    cod: '012',
    id: 4,
    name: 'TrybeBank',
  },
};

const bank = account.bank;

console.log(account.bank);
console.log(account['bank']);

console.log(bank)
