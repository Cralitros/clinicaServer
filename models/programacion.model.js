module.exports = (sequelize, Sequelize) => {
    const Programacion = sequelize.define("programacion", {
      detalle: {
        type: Sequelize.STRING
      },
      entidad: {
        type: Sequelize.STRING
      },
      fechai: {
        type: Sequelize.STRING
      },
      mac: {
        type: Sequelize.STRING
      }
    });
  
  return Programacion;
};