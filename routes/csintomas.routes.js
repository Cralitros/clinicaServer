module.exports = app => {
    const sintomas = require("../controllers/csintomas.controller.js");
  
    var router = require("express").Router();
  
    // Create a new nivel
    //router.post("/:mac/:entidad/:diai/:mesi/:anioi/:dia/:mes/:anio/:dian/:hora/:ciudadano/:dni/:codigoCita/:tramite", citas.create);
    router.post("/", sintomas.create);

    // Retrieve all niveles 
    router.get("/todos", sintomas.findAll);

    // Retrieve all niveles by id
    router.get("/id/:id", sintomas.findbyId);

  
    // Update a nivel with id
    router.put("/:id", sintomas.update);
  
    // Delete a nivell with id
    router.delete("/:id", sintomas.delete);
  
    // Delete all Entidades
   // router.delete("/", nivel.deleteAll);
  
    app.use('/server/sintomas', router);
  };