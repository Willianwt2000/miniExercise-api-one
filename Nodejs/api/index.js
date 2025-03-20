const express = require('express');
const ditto = require('./pokemon/ditto.json');
const app = express();

app.disable('x-powered-by');
//Midleware
app.use(express.json())
const PORT = process.env.PORT ?? 3000;

app.get('/pokemon/ditto', (req, res) => {
  console.log('Done');
  res.json(ditto);
})

app.post('/pokemon', (req, res) => {
  // req.body deberíamos guardar en bbdd
  console.log({message: "Update"});
  console.log(req.body);
  res.status(201).json(req.body);
})

app.use(()=>{
  res.send(`<h1>404</h1>`);
})

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
})