const express = require('express');
const crypto = require('node:crypto'); // id aleatorio
const movie = require('./data/movie.json');
const { validateMovie, validatePartialMovie } = require('./schemas/movie.js');
const { error } = require('node:console');
const app = express();

app.disable('x-powered-by');
//Midleware
app.use(express.json())
const PORT = process.env.PORT ?? 3000;

//endpoints 
app.get('/movies', (req, res) => {
  console.log('Done');
  res.json(movie);
})

app.get('/movies/:id', (req, res) => {
  const {id} = req.params;
  const idMovie = movie.find(idItem => idItem.id === id);
  if (idMovie) {
    console.log(idMovie)
    res.json(idMovie);
    return;
  }
  console.log({message: "Movie not faoud"})
  res.json({message: 'Movie not found'});
})

//----------------------------------------------------

app.post('/movies', (req, res) => {

  const result = validateMovie(req.body)
  if (result.error) {
    return res.status(400).json({error: Json.parse(result.error.message)})
  }
 



  const newMovie = {
    id:crypto.randomUUID(),//uuid id -- aleatorio
    ...result.data
  }
  movie.push(newMovie)
  res.status(201).json(req.body);
})




//------------------------------------------



app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
})