var express = require('express');
var app = express();
app.get('/contactos', function (req, res) {
    console.log(req.method);
    res.send('Aqui van los contactos');
});
app.get('/clientes', function (req, res) {
    res.send('Aqui van los clientes');
});
app.get('/empresas', function (req, res) {
    res.send('Aqui van las empresas');
});
app.get('/catalogo', function (req, res) {
    res.send('Aqui van los catalogos');
});
app.delete('/contactos', function (req, res) {
    res.send('Aqui se borran los contactos');
});
app.delete('/clientes', function (req, res) {
    res.send('Aqui se borran los clientes');
});
app.delete('/empresas', function (req, res) {
    res.send('Aqui se borran las empresas');
});
app.delete('/catalogos', function (req, res) {
    res.send('Aqui se borran los catalogos');
});
// Difícil - Accediendo a request params
app.get('/contactos/:id', function (req, res) {
    var id = req.params.id;
    res.send("Aqui va el contacto ".concat(id));
});
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Servidor corriendo en http://localhost:".concat(PORT));
});
