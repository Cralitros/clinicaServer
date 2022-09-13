module.exports = (sequelize, Sequelize) => {
    const Sistemas = sequelize.define("sistemas", {
      sistema: {
        type: Sequelize.TEXT
      }
    });
  
  return Sistemas;
};