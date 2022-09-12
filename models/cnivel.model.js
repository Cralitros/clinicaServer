module.exports = (sequelize, Sequelize) => {
    const Nivel = sequelize.define("nivel", {
      nivel: {
        type: Sequelize.STRING
      }
    });
  
  return Nivel;
  };