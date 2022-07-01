const fs = require('fs');
const userCommand = process.argv[2];
const data = require('./data.json');
data.toString();
if (userCommand === 'read') {
  for (const x in data.notes) {
    console.log(`${x}:`, data.notes[x]);
  }
}
