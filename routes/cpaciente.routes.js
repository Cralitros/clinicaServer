module.exports = app => {
    const paciente = require("../controllers/cpaciente.controller.js");
  
    var router = require("express").Router();
  
    // Create a new nivel
    //router.post("/:mac/:entidad/:diai/:mesi/:anioi/:dia/:mes/:anio/:dian/:hora/:ciudadano/:dni/:codigoCita/:tramite", citas.create);
    router.post("/", paciente.create);

    // Retrieve all niveles 
    router.get("/todos", paciente.findAll);

    // Retrieve all niveles by id
    router.get("/id/:id", paciente.findDNI);

  
    // Update a nivel with id
    router.put("/:id", paciente.update);
  
    // Delete a nivell with id
    router.delete("/:id", paciente.delete);
  
    // Delete all Entidades
   // router.delete("/", nivel.deleteAll);
  
    app.use('/server/paciente', router);
  };