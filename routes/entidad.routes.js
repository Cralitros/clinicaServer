module.exports = app => {
    const entidad = require("../controllers/entidad.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Entidad
    router.post("/", entidad.create);
  
    // Retrieve all Entidades
    router.get("/", entidad.findAll);
  
    // Retrieve a single Entidad with id
   // router.get("/:id", entidad.findOne);

     // Retrieve Entidades with MAC
    router.get("/:mac", entidad.findEntidades);

    router.get("/:mac/:ent", entidad.findEntidadesMAC);
  
    // Update a Entidad with id
    router.put("/:id", entidad.update);
  
    // Delete a Entidad with id
    router.delete("/:id", entidad.delete);
  
    // Delete all Entidades
    router.delete("/", entidad.deleteAll);
  
    app.use('/server/entidades', router);
  };