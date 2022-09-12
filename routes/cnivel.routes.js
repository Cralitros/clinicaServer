module.exports = app => {
    const nivel = require("../controllers/cnivel.controller.js");
  
    var router = require("express").Router();
  
    // Create a new nivel
    //router.post("/:mac/:entidad/:diai/:mesi/:anioi/:dia/:mes/:anio/:dian/:hora/:ciudadano/:dni/:codigoCita/:tramite", citas.create);
    router.post("/", nivel.create);

    // Retrieve all niveles 
    router.get("/todos", nivel.findAll);

    // Retrieve all niveles by id
    router.get("/id/:id", nivel.findID);

  
    // Update a nivel with id
    router.put("/:id", nivel.update);
  
    // Delete a nivell with id
    router.delete("/:id", nivel.delete);
  
    // Delete all Entidades
   // router.delete("/", nivel.deleteAll);
  
    app.use('/server/nivel', router);
  };