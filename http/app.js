var http = require('http')

http.createServer(function(req, res){
    res.end("Hi!")
}).listen(8081)

console.log("Server created!")