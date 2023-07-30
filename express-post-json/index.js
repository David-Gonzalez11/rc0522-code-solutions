let nextId = 1;
const express = require('express');

const grades = {};

const app = express();
app.use(express.json());
app.get('/api/grades', (req, res) => {
  const newArray = [];
  for (const a in grades) {
    newArray.push(grades[a]);
  }
  res.json(newArray);
});
app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  grades[nextId] = req.body;
  nextId++;
  res.status(201).json(req.body);

});

app.listen(3000, () => {
  console.log('app is running on port 3000');
});
