module.exports = app => {
    const persona = require("../controllers/persona.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Persona
    router.post("/", persona.create);
  
    // Retrieve all Persona
    router.get("/", persona.findAll);
  
    // Retrieve a single Persona with id
    router.get("/:dni", persona.findDNI);
  
    // Retrieve a single Persona with dni
    //router.get("/:dni", persona.findDNI);
  
    // Update a Persona with dni
    router.put("/:id", persona.update);
  
    // Delete a Persona with id
    router.delete("/:id", persona.delete);
  
    // Delete all Personas
    router.delete("/", persona.deleteAll);
  
    app.use('/server/persona', router);
  };