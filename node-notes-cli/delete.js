const fs = require('fs');
const userCommand = process.argv[2];
const data = require('./data.json');
data.toString();
if (userCommand === 'remove') {
  const deleteId = process.argv[3];
  delete data.notes[deleteId];
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
    console.log('Your data has been successfully deleted');
  });

}
