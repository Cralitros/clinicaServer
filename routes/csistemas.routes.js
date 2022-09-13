module.exports = app => {
    const sistemas = require("../controllers/csistemas.controller.js");
  
    var router = require("express").Router();
  
    // Create a new nivel
    //router.post("/:mac/:entidad/:diai/:mesi/:anioi/:dia/:mes/:anio/:dian/:hora/:ciudadano/:dni/:codigoCita/:tramite", citas.create);
    router.post("/", sistemas.create);

    // Retrieve all niveles 
    router.get("/todos", sistemas.findAll);

    // Retrieve all niveles by id
    router.get("/id/:id", sistemas.findbyId);

  
    // Update a nivel with id
    router.put("/:id", sistemas.update);
  
    // Delete a nivell with id
    router.delete("/:id", sistemas.delete);
  
    // Delete all Entidades
   // router.delete("/", nivel.deleteAll);
  
    app.use('/server/sistemas', router);
  };