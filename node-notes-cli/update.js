const fs = require('fs');
const userCommand = process.argv[2];
const data = require('./data.json');
data.toString();
if (userCommand === 'update') {
  const updatedId = process.argv[3];
  const whatToupdateWith = process.argv[4];

  data.notes[updatedId] = whatToupdateWith;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
    console.log('data has been updated successfully');
  });
}
