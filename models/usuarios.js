module.exports = (sequelize, type) => {
    return sequelize.define('usuarios', {
        id_usuario: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nombre: type.STRING,
        apellido: type.STRING,
        cedula: type.STRING,
        nacionalidad: type.STRING,
        telefono: type.STRING,
        celular: type.STRING,
        fecha_nacimiento: type.DATEONLY,
        edad: type.INTEGER
        


    },{
        tableName: 'usuarios',
        createdAt:false,
        updatedAt:false
    })
}