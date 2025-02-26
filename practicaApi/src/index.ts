import { Request, Response } from "express";

const express = require("express");
require("dotenv").config();

import { Ropa, ropas } from "./data/data";

const routerApp = express.Router("/api/ropas");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/ropas", routerApp);

routerApp.get("/", (req, res) => {
  const nuevaPrenda = req.body;
  console.log(nuevaPrenda);
  res.send(ropas);
});

//Obtener objeto por ID
routerApp.get("/id/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (isNaN(id))
    return res.status(400).json({ error: "ID invalido, debe ser un numero" });

  const prenda = ropas.find((item: Ropa) => item.id == id);
  console.log(prenda);

  if (prenda) {
    res.json(prenda);
  } else {
    return res.status(404).json({ error: "Error: prenda no encontrada" });
  }
});

//Busqueda por nombre de marca
routerApp.get("/marca/:marca", (req: Request, res: Response) => {
  const { marca } = req.params; 


  if (!marca || typeof marca !== 'string') {
    return res.status(400).send("Por favor, proporciona una marca para la búsqueda.");
  }

  
  const resultados = ropas.filter(ropa => ropa.marca.toLowerCase().includes(marca.toLowerCase()) 
);

  console.log(resultados);

  if (resultados.length === 0) { return res.status(404).send(`No se encontraron productos con la marca '${marca}'`);}

  res.json(resultados);
});

//agregar

routerApp.post("/", (req: Request, res: Response) => {
  const id = ropas.length + 1; // ID basado en la cantidad de elementos, va incrementando
  const newUser = { id, ...req.body };

  console.log("Agregado correctamente");
  ropas.push(newUser);
  res.status(201).json(newUser);
});

//Actualizar

routerApp.put("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const datosActualizados = req.body;

  if (
    !datosActualizados.nombre ||
    !datosActualizados.talla ||
    !datosActualizados.precio
  ) {
    return res.status(400).json({ mensaje: "Faltan datos obligatorios." });
  }

  const index = ropas.findIndex((user) => user.id == id);
  if (index >= 0) {
    ropas[index] = datosActualizados;
  } else {
    return res.status(404).send(`mensaje: Producto con id ${id} no encontrado`);
  }

  // Devolver respuesta de éxito
  res.json({ mensaje: `Producto ${id} actualizado`, datos: datosActualizados });
});

//Patch
routerApp.patch("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const cambios = req.body;
  const index = ropas.findIndex((user) => user.id == id);
  if (isNaN(id)) return res.status(400).send("Prompt inválido: El id debe ser un número válido.")

  if (index >= 0) {
    ropas[index] = cambios;
  } else {
    return res
      .status(404)
      .send(`mensaje: Producto con id ${id} no encontrado`);
  }
  res.json({ mensaje: `Usuario ${id} actualizado parcialmente` });
});
routerApp.delete("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (isNaN(id))  return res.status(400).send("Prompt inválido: El id debe ser un número válido.");
  
  const index = ropas.findIndex((ropa) => ropa.id === id);

  if (index === -1) return res.status(404).send(`Producto con id ${id} no encontrado`);
  

  // Eliminar el producto si se encuentra en el array
  ropas.splice(index, 1);

  console.log( `Producto con id ${id} fue borrado exitosamente!`)
  res.json({ mensaje: `Producto con id ${id} fue borrado exitosamente!` });
});

//Delete




app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
