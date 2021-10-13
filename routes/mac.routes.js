module.exports = app => {
    const mac = require("../controllers/mac.controller.js");
  
    var router = require("express").Router();
  
    // Create a new MAC
    router.post("/", mac.create);
  
    // Retrieve all MAC
    router.get("/", mac.findAll);
  
    // Retrieve a single MAC with id
    router.get("/:id", mac.findOne);
  
    // Update a MAC with id
    router.put("/:id", mac.update);
  
    // Delete a MAC with id
    router.delete("/:id", mac.delete);
  
    // Delete all MACs
    router.delete("/", mac.deleteAll);
  
    app.use('/server/macs', router);
  };