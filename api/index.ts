const express = require('express')
const app = express()

app.get('/contactos', function (req, res) {
  console.log(req.method)
  res.send('Aqui van los contactos');
})
app.get('/clientes', function (req, res) {
  res.send('Aqui van los clientes');
})
app.get('/empresas', function (req, res) {
  res.send('Aqui van las empresas');
})
app.get('/catalogo', function (req, res) {
  res.send('Aqui van los catalogos');
})


app.delete('/contactos', (req, res) => {
  res.send('Aqui se borran los contactos');
});

app.delete('/clientes', (req, res) => {
  res.send('Aqui se borran los clientes');
});

app.delete('/empresas', (req, res) => {
  res.send('Aqui se borran las empresas');
});

app.delete('/catalogos', (req, res) => {
  res.send('Aqui se borran los catalogos');
});

// Difícil - Accediendo a request params
app.get('/contactos/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Aqui va el contacto ${id}`);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
