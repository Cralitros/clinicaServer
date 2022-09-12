module.exports = app => {
    const usuario = require("../controllers/cusuario.controller.js");
  
    var router = require("express").Router();
  
    // Create a new nivel
    //router.post("/:mac/:entidad/:diai/:mesi/:anioi/:dia/:mes/:anio/:dian/:hora/:ciudadano/:dni/:codigoCita/:tramite", citas.create);
    router.post("/", usuario.create);

    // Retrieve all niveles 
    router.get("/", usuario.findAll);

    // Retrieve all niveles by id
    router.get("/:id", usuario.findDNI);

  
    // Update a nivel with id
    router.put("/:id", usuario.update);
  
    // Delete a nivell with id
    router.delete("/:id", usuario.delete);
  
    // Delete all Entidades
   // router.delete("/", nivel.deleteAll);
  
    app.use('/server/usuario', router);
  };