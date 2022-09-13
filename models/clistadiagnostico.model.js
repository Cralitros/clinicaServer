module.exports = (sequelize, Sequelize) => {
    const Listadiagnostico = sequelize.define("Listadiagnostico", {
      listadiagnostico: {
        type: Sequelize.TEXT
      },
      listasintomas: {
        type: Sequelize.TEXT
      }
    });
  
  return Listadiagnostico;
};