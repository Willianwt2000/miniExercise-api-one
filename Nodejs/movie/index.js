const express = require('express');
var cors = require('cors') // cores
const crypto = require('node:crypto'); // id aleatorio
const movie = require('./data/movie.json');
const { validateMovie, validatePartialMovie } = require('./schemas/movie.js');
const { error } = require('node:console');
const app = express();

app.disable('x-powered-by');
//Midleware
app.use(express.json());
app.use(cors());
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

  if (!result.success) {
    // 422 Unprocessable Entity
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  // en base de datos
  const newMovie = {
    id: crypto.randomUUID(), // uuid v4
    ...result.data
  }

  // Esto no sería REST, porque estamos guardando
  // el estado de la aplicación en memoria
  movie.push(newMovie)
  console.log(newMovie)

  res.status(201).json(newMovie)
})



app.patch('/movies/:id', (req, res) => {
  const result = validatePartialMovie(req.body)

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  const { id } = req.params
  const movieIndex = movie.findIndex(movie => movie.id === id)

  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Movie not found' })
  }

  const updateMovie = {
    ...movie[movieIndex],
    ...result.data
  }

  movie[movieIndex] = updateMovie

  return res.json(updateMovie)
})


//------------------------------------------



app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
})