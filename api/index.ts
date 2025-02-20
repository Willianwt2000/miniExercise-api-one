const express = require('express');
const app = express();
app.use(express.json());


const port = process.env.PORT || 8000;
let statusMessage;

app.list(port, () => {
  statusMessage = console.log(`Listening on port...:${port}`);
});


//Elements

// Definir el tipo correcto (opcional pero recomendado)
type Student = { id: number; name: string };

// Declarar el array de estudiantes correctamente
let students: Student[] = [
  { id: 1, name: "Jose" },
  { id: 2, name: "Jose" },
  { id: 3, name: "Jose" },
  { id: 4, name: "Jose" },
  { id: 5, name: "Jose" }
];

let users: [] = [];
let id;


app.get(`/status`,(req, res) => {
  return res.status(200).json({mensaje: statusMessage});
}); 