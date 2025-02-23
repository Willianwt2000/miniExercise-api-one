
import {Response, Request }from 'express';
import { infoUser } from '../data';

const express = require('express');
const app = express();
const PORT = 3000;

//Routing
app.get('/user', (req: Request, res: Response) => {
  res.send('Hello World');
});


app.get('/use', (req: Request, res: Response) => {
  res.send('Hello World');
});


app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost${PORT}`);
});




//Functions

type UserProps = {
  id: number
  nombre: string,
  apellido: string,
  edad: number,
  gmail: string,
  idNumero: number
}

function findUserById(id:number) : any {
    if (isNaN(id))  console.log(`El parametro no es un numero ${id}`)

    const user = infoUser.find( (x) => x.id === id )

    if (!user) {
      console.log("Done!")
    }

    
    return user;
};