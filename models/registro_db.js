const db = require('./db')
const Registro = db.sequelize.define('cadastro', {
    id:{
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nickname:{
        type: db.Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: db.Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type: db.Sequelize.STRING,
        allowNull: false
    }
})
// Registro.sync({force:true})
module.exports = Registro