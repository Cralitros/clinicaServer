module.exports = (sequelize, Sequelize) => {
    const Diagnosticos = sequelize.define("diagnosticos", {
      diagnostico: {
        type: Sequelize.TEXT
      },
      caracteristica: {
        type: Sequelize.TEXT
      },
      definicion: {
        type: Sequelize.TEXT
      },
      rc: {
        type: Sequelize.TEXT
      },
      ep: {
        type: Sequelize.TEXT
      },
      noc: {
        type: Sequelize.TEXT
      },
      nic: {
        type: Sequelize.TEXT
      },
    });
  
  return Diagnosticos;
};