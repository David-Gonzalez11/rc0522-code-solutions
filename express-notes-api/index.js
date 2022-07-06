const express = require('express');
const app = express();
const data = require('./data.json');
const jsonMiddleware = express.json();

app.use(jsonMiddleware);
const fs = require('fs');

app.get('/api/notes', (req, res) => {
  const newArr = [];
  for (const x in data.notes) {
    newArr.push(data.notes[x]);
  }
  res.json(newArr);
});
app.get('/api/notes/:id', (req, res) => {
  const id = Number.isInteger(req.params.id);
  if (id > 0) {
    if (!data.notes[id]) {
      res.status(404).send({ error: `cannot find note with id ${id}` });
    } else {
      res.status(200).json(data.notes[id]);
    }
  }
});

app.post('/api/notes', (req, res) => {
  if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });

  } else {
    const note = req.body;
    const id = data.nextId;
    note.id = id;
    data.notes[id] = note;
    data.nextId++;
    const dataNote = JSON.stringify(data, null, 2);

    fs.writeFile('data.json', dataNote, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured' });
      } else {
        res.status(201).json(note);
      }
    });
  }
});
app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);

  if (id > 0) {
    if (!data.notes[id]) {
      res.status(404).send({ error: `cannot find note with id ${id}` });

    } else {
      delete data.notes[id];
      const stringData = JSON.stringify(data, null, 2);
      fs.writeFile('data.json', stringData, err => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'content is a required field' });

        } else {
          res.sendStatus(204);
        }
      });
    }
  } else {
    res.status(400).json({ error: 'id must be a positive integer' });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    if (!data.notes[id]) {
      res.status(404).send({ error: `cannot find note with id ${id}` }
      );
    } else {
      const newNote = req.body;
      newNote.id = id;
      data.notes[id] = newNote;
      const dataString = JSON.stringify(data, null, 2);
      fs.writeFile('data.json', dataString, err => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'An unexpected error occured' });
        } else {
          res.status(200).json(newNote);
        }
      });
    }
  }
});
app.listen(3000, () => [
  console.log('listening on port 3000')
]);
