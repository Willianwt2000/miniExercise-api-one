const http = require('http')

//asignamos el servidor a una constante

const server  = http.createServer((req,res) => {
  console.log("Solicitud enviada")
  

  console.log(req.method)
  res.end("Hola mundo")

  
});

// 3 agregamos un puerto

const PORT = 3000;

server.listen(PORT,() => {
  console.log(`The server is listen on port http://localhost${PORT}`)
})