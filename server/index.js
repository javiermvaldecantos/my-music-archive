const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // necesario para leer requests con JSON

// Datos sobre las canciones (mock data). Están definidas en un archivo JSON.
const songsData = require('./songs.json');

app.get('/api/songs', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(songsData));
});

app.post('/api/new-song', (req, res) => {
  let requestBody = req.body;
  
  // Crear un ID para la canción y añadirla al array de canciones
  let newSong = requestBody.newSong;
  newSong.id = "000000" + (songsData.length + 1);
  songsData.push(newSong);

  res.send(req.body);
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);