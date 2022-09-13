module.exports = (sequelize, Sequelize) => {
    const Subsistemas = sequelize.define("subsistemas", {
      subsistema: {
        type: Sequelize.TEXT
      }
    });
  
  return Subsistemas;
};