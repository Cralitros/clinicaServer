module.exports = app => {
    const listadiagnostico = require("../controllers/clistadiagnosticos.controller.js");
  
    var router = require("express").Router();
  
    // Create a new nivel
    //router.post("/:mac/:entidad/:diai/:mesi/:anioi/:dia/:mes/:anio/:dian/:hora/:ciudadano/:dni/:codigoCita/:tramite", citas.create);
    router.post("/", listadiagnostico.create);

    // Retrieve all niveles 
    router.get("/todos", listadiagnostico.findAll);

    // Retrieve all niveles by id
    router.get("/id/:id", listadiagnostico.findbyId);

  
    // Update a nivel with id
    router.put("/:id", listadiagnostico.update);
  
    // Delete a nivell with id
    router.delete("/:id", listadiagnostico.delete);
  
    // Delete all Entidades
   // router.delete("/", nivel.deleteAll);
  
    app.use('/server/listadiagnostico', router);
  };