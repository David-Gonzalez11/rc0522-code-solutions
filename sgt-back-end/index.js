const express = require('express');
const pg = require('pg');
const app = express();
const jsonParse = express.json();
app.use('/api/grades', jsonParse);

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql).then(result => {
    const grades = result.rows;
    res.json(grades);
  }).catch(err => {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occured' });
  });
});

app.post('/api/grades/', (req, res, next) => {
  const name = req.body;
  const course = req.body;
  const score = req.body;
  const text = 'INSERT INTO "grades"("name", "course", "score") VALUES($1, $2, $3) RETURNING *';
  const values = [name, course, score];
  if (name === undefined || course === undefined || parseInt(score) < 0 || parseInt(score) > 100) {
    res.status(400).json({
      error: 'Invalid field submitted'
    });
  } else {
    db.query(text, values)
      .then(result => {
        res.status(201).json(result.rows[0]);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occured'
        });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  const name = req.body;
  const course = req.body;
  const score = req.body;
  const text = `update  "grades" set "name"=$1, "course"=$2 ,"score"=$3 where "gradeId"=$4 returning *;
  `;
  const values = [name, course, score, gradeId];
  if (name === undefined || course === undefined || parseInt(score) < 0 || parseInt(score) > 100) {
    res.status(400).json({ error: 'Invalid field submitted' });
  } else {
    db.query(text, values).then(result => {
      const grade = result.rows;
      if (!grade) {
        res.status(404).json({ error: 'cannot find grade with that Id' });

      } else {
        res.status(200).json(result.rows[0]);
      }
    }).catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });

  }
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  const text = 'delete from "grades" where "gradeId"= $1 returning *';
  const values = [gradeId];
  db.query(text, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured'
      });
    });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
