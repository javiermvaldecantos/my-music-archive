const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Datos sobre las canciones (mock data). Están definidas en un archivo JSON.
const songsData = require('./songs.json');

app.get('/api/songs', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(songsData));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);