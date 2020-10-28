const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Database conected!")
}).catch(function(err){
    console.log("Error to connect database: "+err)
})