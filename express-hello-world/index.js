// const express = require('express');
// const app = express();

// app.use((req, res) => {
//   res.send('Hello World');
// });
// app.listen(3000, () => {
// });




const express = require("express");
const app = express();

app.use((req, res) => {
  res.send("Hello world")
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");

});