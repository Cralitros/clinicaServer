module.exports = app => {
    const subsistemas = require("../controllers/csubsistemas.controller.js");
  
    var router = require("express").Router();
  
    // Create a new nivel
    //router.post("/:mac/:entidad/:diai/:mesi/:anioi/:dia/:mes/:anio/:dian/:hora/:ciudadano/:dni/:codigoCita/:tramite", citas.create);
    router.post("/", subsistemas.create);

    // Retrieve all niveles 
    router.get("/todos", subsistemas.findAll);

    // Retrieve all niveles by id
    router.get("/id/:id", subsistemas.findbyId);

  
    // Update a nivel with id
    router.put("/:id", subsistemas.update);
  
    // Delete a nivell with id
    router.delete("/:id", subsistemas.delete);
  
    // Delete all Entidades
   // router.delete("/", nivel.deleteAll);
  
    app.use('/server/subsistemas', router);
  };