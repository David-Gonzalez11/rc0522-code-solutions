const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const publicPath = path.join(__dirname, 'public');

const middleWare = express.static(publicPath);
console.log(middleWare);
app.use(middleWare);

app.listen(port, () => console.log(`listening on port ${port}`));
