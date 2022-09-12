const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
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
//db.usuario.hasOne(db.nivel);
/*db.mac = require("./mac.model.js")(sequelize, Sequelize);
db.login = require("./login.model.js")(sequelize, Sequelize);
db.entidad = require("./entidad.model.js")(sequelize, Sequelize);
db.servicios = require("./servicios.model.js")(sequelize, Sequelize);
db.persona = require("./persona.model.js")(sequelize, Sequelize);
db.programacion = require("./programacion.model.js")(sequelize, Sequelize);
db.citas = require("./citas.model.js")(sequelize, Sequelize);*/

module.exports = db;