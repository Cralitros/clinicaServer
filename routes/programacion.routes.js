module.exports = app => {
    const programacion = require("../controllers/programacion.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Programacion
    router.post("/", programacion.create);
  
    // Retrieve all Programacion
    router.get("/", programacion.findAll);

    // Retrieve  Programacion Cupos
    router.get("/:mac/:entidad/:dia/:mes/:anio/:dian/:hora", programacion.consultaCupos);

    // Retrieve a single Programacion with mac y entidad
    router.get("/:mac/:entidad", programacion.findProgramacionporMacporEntidad);

    // Retrieve all Programacion de otra manera
    //router.get("/", programacion.consultaMomentanea);
    router.put("/:mac/:entidad/:dia/:mes/:anio/:dian/:hora/:cupos", programacion.consultaMomentanea);
  
    // Retrieve a single Programacion with mac entidad y fecha
    router.get("/:mac/:entidad/:dia/:mes/:anio", programacion.findProgramacion);

  
  
    // Retrieve a single Persona with dni
    //router.get("/:dni", persona.findDNI);
  
    // Update a Programacion with dni
    router.put("/:id", programacion.update);
  
    // Delete a Programacion with id
    router.delete("/:id", programacion.delete);
  
    // Delete all Programacions
    router.delete("/", programacion.deleteAll);
  
    app.use('/server/programacion', router);
  };