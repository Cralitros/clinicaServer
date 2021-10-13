module.exports = (sequelize, Sequelize) => {
  const Citas = sequelize.define("citas", {
    entidad: {
      type: Sequelize.STRING
    },
    mac: {
      type: Sequelize.STRING
    },
    fecha: {
      type: Sequelize.STRING
    },
    fechai: {
      type: Sequelize.STRING
    },
    dia: {
      type: Sequelize.STRING
    },
    hora: {
      type: Sequelize.STRING
    },
    ciudadano: {
      type: Sequelize.STRING
    },
    dni: {
      type: Sequelize.STRING
    },
    codigocita: {
      type: Sequelize.STRING
    },
    tramite: {
      type: Sequelize.STRING
    },
    idencita: {
      type: Sequelize.STRING
    }

  });

return Citas;
};