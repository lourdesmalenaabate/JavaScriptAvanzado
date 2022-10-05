const http = require('http')

const server = http.createServer((req,res) => {
    res.writeHead(200, {'content-type' : 'text/html'})
    res.end('<p style="color:blue;">Hola soy un servidor Http en Node.JS!!!</p>')
})

const PORT = 8080
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

