const fs = require('fs');
const textValue = process.argv[2];
fs.readFile(textValue, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
