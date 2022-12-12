const Sequelize = require('sequelize')
// CONEXÃO COM O A BASE DE DADOS
const sequelize = new Sequelize('slowfu01', 'slowfu0101_add1', 'Dungeon0102',{
    host: "mysql.slowfu.com.br",
    dialect: 'mysql',
    query:{raw:true}
})
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}