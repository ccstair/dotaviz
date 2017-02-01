require('dotenv').config({
  silent: true,
});

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routers/apiRouter');

const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/api', apiRouter);

app.all('*', (req, res) => {
  res.status(404).send('youre getting there!');
});

app.listen(port, () => console.log(`Server listening on *:${port}`));
