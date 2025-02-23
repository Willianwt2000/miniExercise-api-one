const express = require('express');
const { contacts, addContact } = require('./agendaData.js');
const { constants } = require('buffer');

const app = express();

// Middleware JSON (debe estar en `app` antes de las rutas)
app.use(express.json());

const routerContactos = express.Router();
const PORT = process.env.PORT || 3000;

// Usar router
app.use('/api/contacts', routerContactos);

// Ruta para obtener todos los contactos
routerContactos.get('/', (req, res) => {
    res.json(contacts);
});
//Busqueda por id
routerContactos.get('/:id', (req, res) => {
    const idRequest = req.params.id;
    const contact = contacts.find(user => user.id == idRequest);

    if (contact) {
        return res.json(contact);
    }

    return res.status(404).send("");
});

// Ruta para agregar un nuevo contacto
routerContactos.post('/', (req, res) => {
    console.log("Datos recibidos: exitosamente", req.body); 
    const { id, fullName, phoneNumber, email } = req.body;
    if (!id || !fullName || !phoneNumber || !email) {
        return res.status(400).json({ error: "Faltan datos" });
    }

    const newContact = { id, fullName, phoneNumber, email };
    addContact(newContact);

    res.status(201).json({ message: "Contacto agregado", contacts });
});

//Actualizar contacto
routerContactos.put('/:id',(req,res) => {
    const updatedContact = req.body;
    const id = req.params.id //extraer id para obtener el parametro url 
    const index = contacts.findIndex(user => user.id == id);

    if (index >= 0) {
        contacts[index] = updatedContact;
    }
    res.json(contacts)

    console.log("Contacto actualizado correctamente!")
})


//Otro tipo de metodo HTTP nos permite pasar clave valor y no todo el objeto actualizado si no lo que cambio

routerContactos.patch('/:id', (req,res) => {
    const contactUpdated = req.body;
    const id = req.params.id;

    const index = contacts.findIndex(usersContact => usersContact.id == id);

    if (index >= 0) {
        const contactsModifier = contacts[index];
        Object.assign(contactsModifier,contactUpdated)
    }

    res.json(contacts)
})

//Borrar contacto
routerContactos.delete('/:id',(req,res) => {
    const id = req.params.id;

    const index = contacts.findIndex(usersContact => usersContact.id == id);
    if (contacts.length == 0) {
      return  res.json('La agenda esta vacia').end()
    }
    
    if (index >= 0) {
      contacts.splice(index, 1);

      res.send(contacts)
    }

})

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
