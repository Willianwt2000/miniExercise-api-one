var express = require("express");
var data = require("../newRoot/file");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.json());
app.get("/contactos", function (req, res) {
    res.json(data.contactos);
});
app.get("/data/contactos/:nombre", function (req, res) {
    var nombre = req.params.nombre; // Nombre obtenido de la URL
    var result = data.contactos.filter(function (contacto) { return contacto.nombre === nombre; });
    if (result.length === 0) {
        return res.status(404)("No se encontr\u00F3 el nombre ".concat(nombre));
    }
    res.json(result);
});
app.get("/clientes", function (req, res) {
    res.json(data.clientes);
});
app.get("/empresas", function (req, res) {
    res.json(data.empresas);
});
app.get("/catalogos", function (req, res) {
    res.json(data.catalogos);
});
app.listen(PORT, function () {
    console.log("Servidor corriendo en el puerto ".concat(PORT));
});
