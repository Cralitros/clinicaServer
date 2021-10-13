module.exports = (sequelize, Sequelize) => {
    const Servicios = sequelize.define("servicios", {
      servicios: {
        type: Sequelize.STRING
      },
      entloc: {
        type: Sequelize.STRING
      },
      activo:{
        type: Sequelize.BOOLEAN
      }
    });
  
  return Servicios;
};