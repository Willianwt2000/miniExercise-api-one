
const express = require('express');

const app = express();
const {contacts} = require('./agendaData.js')






const PORT = process.env.PORT || 3000;


// Ruta de prueba

app.get('/api/contacts', (req, res) => {
    res.send(contacts);
});


app.get('/api/contacts/:id', (req, res) => {
  const { id } = req.params; 
  const contact = contacts.find(contact => contact.id == id);

  if (contact) 
    res.json(contact); 
   else if(isNaN(id)){
    res.status(400).send(`bad request ${res.statusCode}`); 
  } else {
    res.status( 404 ).json(`Not found ${res.statusCode}`)
  }
});
// app.get('/api/contacts/:name', (req, res) => {
//   const { fullName } = req.params; 
//   const contact = contacts.find(contact => contact.fullName == fullName);

//   if (contact) {
//     res.json(contact); 
//   } else if () {

//   } else {
//     res.status(404).json({ message: 'Contacto no encontrado' }); 

//   }
// });

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
