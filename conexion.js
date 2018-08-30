const Sequelize = require('sequelize')
  UsuarioModel= require('./models/usuarios');
 



const sequelize = new Sequelize('parcialFinalWeb2', 'postgres', 'admin', {
  dialect: 'postgres',
});


const Usuarios = UsuarioModel(sequelize, Sequelize);





sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  })


module.exports = {
  Usuarios

  


}
