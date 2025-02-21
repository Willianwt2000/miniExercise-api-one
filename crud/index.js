var http = require('http');
//asignamos el servidor a una constante
var server = http.createServer(function (req, res) {
    console.log("Solicitud enviada");
    console.log(req.method);
    res.end("Hola mundo");
});
// 3 agregamos un puerto
var PORT = 3000;
server.listen(PORT, function () {
    console.log("The server is listen on port http://localhost".concat(PORT));
});
