const express = require("express");
const data = require("../newRoot/file"); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get("/contactos", (req, res) => {
  res.json(data.contactos);
});

app.get("/data/contactos/:nombre", (req, res) => {
  const nombre = req.params.nombre; // Nombre obtenido de la URL
  const result = data.contactos.filter(contacto => contacto.nombre === nombre);
  

  if (result.length === 0) {
    return res.status(404)(`No se encontró el nombre ${nombre}`);
  }

 
  res.json(result);
});


app.get("/clientes", (req, res) => {
  res.json(data.clientes);
});

app.get("/empresas", (req, res) => {
  res.json(data.empresas);
});

app.get("/catalogos", (req, res) => {
  res.json(data.catalogos);
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
