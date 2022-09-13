module.exports = (sequelize, Sequelize) => {
    const Paciente = sequelize.define("paciente", {
      nombre: {
        type: Sequelize.STRING
      },
      appaterno: {
        type: Sequelize.STRING
      },
      apmaterno: {
        type: Sequelize.STRING
      },
      sexo: {
        type: Sequelize.BOOLEAN
      },
      dni: {
        type: Sequelize.STRING
      },
      fechaNacimiento: {
        type: Sequelize.DATEONLY
      },
      peso: {
        type: Sequelize.FLOAT
      },
      talla: {
        type: Sequelize.FLOAT
      }
    });
  
  return Paciente;
};