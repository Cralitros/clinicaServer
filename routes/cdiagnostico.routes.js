module.exports = app => {
    const diagnostico = require("../controllers/cdiagnosticos.controller.js");
  
    var router = require("express").Router();
  
    // Create a new nivel
    //router.post("/:mac/:entidad/:diai/:mesi/:anioi/:dia/:mes/:anio/:dian/:hora/:ciudadano/:dni/:codigoCita/:tramite", citas.create);
    router.post("/", diagnostico.create);

    // Retrieve all niveles 
    router.get("/todos", diagnostico.findAll);

    // Retrieve all niveles by id
    router.get("/id/:id", diagnostico.findbyId);

  
    // Update a nivel with id
    router.put("/:id", diagnostico.update);
  
    // Delete a nivell with id
    router.delete("/:id", diagnostico.delete);
  
    // Delete all Entidades
   // router.delete("/", nivel.deleteAll);
  
    app.use('/server/diagnostico', router);
  };