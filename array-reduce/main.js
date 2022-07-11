const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const addedSum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log('value of sum:', addedSum);

const product1 = numbers.reduce((previousValue, currentValue) => previousValue * currentValue);
console.log('value of product:', product1);

const totalBalance = account.reduce((balance, amount) => {
  if (amount.type === 'deposit') {
    balance += amount.amount;
  } else {
    balance -= amount.amount;
  }
  return balance;
}, 0);

console.log('value of the balance:', totalBalance);

const composite = traits.reduce((x, y) => Object.assign(x, y));
console.log('value of composite:', composite);
