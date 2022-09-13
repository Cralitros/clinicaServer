module.exports = (sequelize, Sequelize) => {
    const Sintomas = sequelize.define("sintomas", {
      sintoma: {
        type: Sequelize.TEXT
      },
      estado: {
        type: Sequelize.TEXT
      },
    });
  
  return Sintomas;
};