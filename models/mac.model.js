module.exports = (sequelize, Sequelize) => {
    const Mac = sequelize.define("mac", {
      mac: {
        type: Sequelize.STRING
      },
      ciudad: {
        type: Sequelize.STRING
      },
      activo:{
        type: Sequelize.BOOLEAN
      }
    });
  
  return Mac;
};