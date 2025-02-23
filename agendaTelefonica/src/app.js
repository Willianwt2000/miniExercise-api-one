const express = require('express');
const { contacts, addContact } = require('./agendaData.js');

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

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
