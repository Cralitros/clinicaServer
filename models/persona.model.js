module.exports = (sequelize, Sequelize) => {
    const Persona = sequelize.define("persona", {
      dni: {
        type: Sequelize.STRING
      },
      pnombre: {
        type: Sequelize.STRING
      },
      snombre: {
        type: Sequelize.STRING
      },
      apellidop: {
        type: Sequelize.STRING
      },
      apellidom: {
        type: Sequelize.STRING
      },
      correo: {
        type: Sequelize.STRING
      },
      telefono:{
        type: Sequelize.STRING
      }
    });
  
  return Persona;
};