// const fs = require('fs');

// let number = Math.random();
// number = JSON.stringify(number) + '\n';

// fs.writeFile('random.txt', number, err => {
//   if (err) throw err;

// });

const fs = require('fs');
let random = Math.random();
random = JSON.stringify(random) + '\n';
fs.writeFile('random.txt', random, err => {
  if (err) throw err;
});
