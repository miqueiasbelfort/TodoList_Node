const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {

    sequelize.authenticate()
    console.log('Conectamos ao MySQL')

} catch(err){
    console.log(`Não foi possivel conectar: ${err}`)
}

module.exports = sequelize