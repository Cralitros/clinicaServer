module.exports = (sequelize, Sequelize) => {
    const Entidad = sequelize.define("entidad", {
      entidad: {
        type: Sequelize.STRING
      },
      sigla: {
        type: Sequelize.STRING
      },
      localidades: {
        type: Sequelize.STRING
      },
      activo:{
        type: Sequelize.BOOLEAN
      }
    });
  
  return Entidad;
};