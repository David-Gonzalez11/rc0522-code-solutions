// console.log(process.argv[2]);
// console.log(process)

// this is read file  //
// const fs = require('fs');
// const textValue = process.argv[2];
// fs.readFile(textValue, "utf8", (err, data) => {
//     if(err) throw err;
//     console.log(data)
// });
// //


// this is now practice for the write file system

const fs = require('fs');
let random = process.argv[2];
random = JSON.stringify(random) + `\n`;

fs.writeFile('new.txt', random, err  => {
    if(err) throw err;
});