"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var PORT = 3000;
//Routing
app.get('/user', function (req, res) {
    res.send('Hello World');
});
app.listen(PORT, function () {
    console.log("Servidor escuchando en el puerto http://localhost".concat(PORT));
});
