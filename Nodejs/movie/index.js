const express = require('express');
const crypto = require('node:crypto');
const movie = require('./data/movie.json');
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
  // req.body deberíamos guardar en bbdd
  console.log({message: "Update"});



  const newMovie = {
    id:crypto.randomUUID(),//uuid id -- aleatorio
  }
  movie.push(newMovie)
  res.status(201).json(req.body);
})




//------------------------------------------

app.use(()=>{
  res.send(`<h1>404</h1>`);
})

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
})