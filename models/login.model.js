module.exports = (sequelize, Sequelize) => {
    const Login = sequelize.define("login", {
      entidad: {
        type: Sequelize.STRING
      },
      pwd: {
        type: Sequelize.STRING
      },
      mac: {
        type: Sequelize.STRING
      }
    });
  
  return Login;
};