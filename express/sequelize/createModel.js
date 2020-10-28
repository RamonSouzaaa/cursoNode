const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

/*Postagem.create({
    titulo: "Test post",
    conteudo: "Welcome back"
})*/

const Usuario = sequelize.define('usuarios', {
    nome: {
        type : Sequelize.STRING
    },
    sobrenome : {
        type: Sequelize.STRING
    },
    idade : {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: 'Victor',
    sobrenome: 'Lima',
    idade: 18,
    email: 'vitorlima@email.com'
})

//Usuario.sync({force: true})
//Postagem.sync({force: true})