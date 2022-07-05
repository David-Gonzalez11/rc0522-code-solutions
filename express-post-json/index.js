const express = require('express');
const app = express();
let nextId = 1;
const grades = {

};
app.get('/api/grades', (req, res) => {
  const newArray = [];
  for (const x in grades) {
    newArray.push(grades[x]);
  }
  res.json(newArray);
});
const expressJSON = express.json();
app.use(expressJSON());

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  grades[nextId] = req.body;
  res.status(201).json(req.body);
  nextId++;

});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
