const mongoose = require("mongoose")

//Configuração mongoose
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/teste", {
    useNewUrlParser: true
}).then(function(){
    console.log("Database connected!")
}).catch(function(err){
    console.log("Error to connect db mongo: " + err)
})


//Model - Usuários

const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    } 
})

mongoose.model('usuarios', UsuarioSchema)
const Usuario = mongoose.model('usuarios')

new Usuario({
    nome: "Vitor",
    sobrenome: "Lima",
    email: "email@email.com",
    idade: 19,
    pais: "Brasil"
}).save().then(function(){
    console.log("User created!")
}).catch(function(err){
    console.log("Error to created user: " + err)
})