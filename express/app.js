const express = require("express")
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html")
})

app.get("/blog", function(req, res){
    res.send("Welcome to the my page blog")
})

app.get("/ola/:nome", function(req, res){
    res.send("Hi, " + req.params.nome)
})

app.listen(8081, function(){
    console.log("Server created!")
}) //create server with express
