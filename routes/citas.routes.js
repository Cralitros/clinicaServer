module.exports = app => {
    const citas = require("../controllers/citas.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Citas
    //router.post("/:mac/:entidad/:diai/:mesi/:anioi/:dia/:mes/:anio/:dian/:hora/:ciudadano/:dni/:codigoCita/:tramite", citas.create);
    router.post("/", citas.create);

    // Retrieve all Citas 
    router.get("/", citas.findAll);
  
    //Retrieve all Citas por entidad por mac
    //router.get("/dni/:mac/:entidad/:dia/:mes/:anio/:dni", citas.findCitabyDNI);
    router.get("/dni/:mac/:entidad/:dia/:mes/:anio/:dni", citas.findCitabyDNI);

     // Retrieve Citas conteo por hora
    router.get("/count/:mac/:entidad/:dia/:mes/:anio/:hora", citas.countCitaHora);
     
    // Retrieve Citas conteo por codigo  similares
     router.get("/count/cupos/:codigocita", citas.countCupo);

    // Retrieve Citas conteo por hora
    router.get("/todos/:mac/:entidad", citas.findAllMacEntidad);

    // Retrieve Citas dni
    router.get("/dni/:dni/:diai/:mesi/:anioi", citas.findOnebyDNI);

    // Retrieve Citas codigo
    router.get("/codigo/:codigocita/:diai/:mesi/:anioi", citas.findOnebyCodigo);

    // Retrieve Citas codigo
    router.get("/nombre/:ciudadano/:diai/:mesi/:anioi", citas.findOnebyNombre);

    // Retrieve ya tiene Citas 
    router.get("/yatiene/:mac/:entidad/:dni/:dia/:mes/:anio", citas.yaTieneCita);

    // Retrieve All Citas 
    router.get("/citados/:ciudadano/:dni/:diai/:mesi/:anioi", citas.findOnebyNombreyDni);

    /*
    // Retrieve Citas si ya tiene cita para el dia que selecciona
    */
    // Update a Entidad with id
    router.put("/:id", citas.update);
  
    // Delete a Entidad with id
    router.delete("/:id", citas.delete);
  
    // Delete all Entidades
    router.delete("/", citas.deleteAll);
  
    app.use('/server/citas', router);
  };