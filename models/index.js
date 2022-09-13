const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.nivel=require("./cnivel.model.js")(sequelize, Sequelize);

db.usuario=require("./cusuario.model.js")(sequelize, Sequelize);
db.nivel.hasMany(db.usuario);

db.sistemas=require("./csistemas.model.js")(sequelize, Sequelize);
db.usuario.hasMany(db.sistemas);

db.subsistemas=require("./csubsistemas.model.js")(sequelize, Sequelize);
db.sistemas.hasMany(db.subsistemas);
db.usuario.hasMany(db.subsistemas);

db.sintomas=require("./csintomas.model.js")(sequelize, Sequelize);
db.subsistemas.hasMany(db.sintomas);
db.usuario.hasMany(db.sintomas);

db.diagnostico=require("./cdiagnosticos.model.js")(sequelize, Sequelize);
db.usuario.hasMany(db.diagnostico);

db.paciente=require("./cpaciente.model.js")(sequelize, Sequelize);
db.usuario.hasMany(db.paciente);

db.listadiagnosticos=require("./clistadiagnostico.model.js")(sequelize, Sequelize);
db.paciente.hasMany(db.listadiagnosticos);
db.usuario.hasMany(db.listadiagnosticos);

//db.usuario.hasOne(db.nivel);
/*db.mac = require("./mac.model.js")(sequelize, Sequelize);
db.login = require("./login.model.js")(sequelize, Sequelize);
db.entidad = require("./entidad.model.js")(sequelize, Sequelize);
db.servicios = require("./servicios.model.js")(sequelize, Sequelize);
db.persona = require("./persona.model.js")(sequelize, Sequelize);
db.programacion = require("./programacion.model.js")(sequelize, Sequelize);
db.citas = require("./citas.model.js")(sequelize, Sequelize);*/

module.exports = db;