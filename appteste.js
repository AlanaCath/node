var http = require('http');

http.createServer(function(req, res){
    res.end("Ola, devs")
}).listen(8090)

console.log("O servidor está rodando!");