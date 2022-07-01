const fs = require('fs');
const userCommand = process.argv[2];
const data = require('./data.json');
data.toString();
const add = process.argv[3];

if (userCommand === 'create') {

  data.notes[data.nextId] = add;
  data.nextId++;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
    console.log('Data has been created!');
  });
}
