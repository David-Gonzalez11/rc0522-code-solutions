const fs = require('fs');

let number = Math.random();
number = JSON.stringify(number) + '\n';

fs.writeFile('random.txt', number, err => {
  if (err) throw err;

});
