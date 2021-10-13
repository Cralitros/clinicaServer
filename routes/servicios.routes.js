module.exports = app => {
    const servicios = require("../controllers/servicios.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Entidad
    router.post("/", servicios.create);
  
    // Retrieve all Entidades
    router.get("/", servicios.findAll);
  
    // Retrieve a single Entidad with id
   // router.get("/:id", entidad.findOne);

     // Retrieve Entidades with MAC
    router.get("/:mac/:entidad", servicios.findServicios);
  
    // Update a Entidad with id
    router.put("/:id", servicios.update);
  
    // Delete a Entidad with id
    router.delete("/:id", servicios.delete);
  
    // Delete all Entidades
    router.delete("/", servicios.deleteAll);
  
    app.use('/server/servicios', router);
  };