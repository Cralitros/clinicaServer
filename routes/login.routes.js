module.exports = app => {
    const login = require("../controllers/login.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Persona
    //router.post("/", login.create);
  
    // Retrieve all Persona
    router.post("/", login.findAll);
  
    // Retrieve a single Persona with id
    /*router.get("/:dni", persona.findDNI);
  
    // Retrieve a single Persona with dni
    //router.get("/:dni", persona.findDNI);
  
    // Update a Persona with dni
    router.put("/:id", persona.update);
  
    // Delete a Persona with id
    router.delete("/:id", persona.delete);
  
    // Delete all Personas
    router.delete("/", persona.deleteAll);*/
  
    app.use('/server/login', router);
  };