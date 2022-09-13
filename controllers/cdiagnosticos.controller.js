const db = require("../models");
const Diagnostico = db.diagnostico;
const Op = db.Sequelize.Op;

// Create and Save a new Diagnostico
exports.create = (req, res) => {
     // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "no se encuentra la pagina!"
    });
    return;
  }

  // Create a Diagnostico
  const diagnostico = {
    diagnostico: req.body.diagnostico,
    caracteristica: req.body.caracteristica,
    definicion: req.body.definicion,
    rc: req.body.rc,
    ep: req.body.ep,
    noc: req.body.noc,
    nic: req.body.nic,
    usuarioId:req.body.usuarioId
  };
 

  // Save Diagnostico in the database
  Diagnostico.create(diagnostico)
    .then(data => {
		  console.log(data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Diagnostico."
      });
    });
  
};

// Retrieve all Diagnostico by dni from the database.
exports.findbyId = (req, res) => {

  const id = req.body.id;


  /*var condition1 = dni ? { dni: { [Op.eq]: `${dni}` } } : null;
  var condition2 = password ? { password: { [Op.eq]: `${password}` } } : null;

  console.log(dni,password);*/

  Diagnostico.findByPk( id)
      .then(data => {
          
          res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message:
          err.message || "Some error occurred while retrieving Diagnostico."
      });
  });

};

// Retrieve all Diagnostico from the database.
exports.findAll = (req, res) => {


  Diagnostico.findAll()
      .then(data => {
          
          res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message:
          err.message || "Some error occurred while retrieving Diagnostico."
      });
  });

};

// Update a Diagnostico by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Diagnostico.update(req.body, {
      where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Diagnostico was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Diagnostico with id=${id}. Maybe Diagnostico was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Diagnostico with id=" + id
    });
  });
  
};

// Delete a Diagnostico with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Diagnostico.destroy({
      where: { id: id }
  })
  .then(num => {
      if (num == 1) {
          res.send({
          message: "Diagnostico was deleted successfully!"
          });
      } else {
          res.send({
          message: `Cannot delete Diagnostico with id=${id}. Maybe Diagnostico was not found!`
          });
      }
      })
      .catch(err => {
      res.status(500).send({
          message: "Could not delete Diagnostico with id=" + id
      });
  });  
};




// Retrieve all Personas from the database.
/*exports.findAll = (req, res) => {
    const dni = req.query.dni;
    var condition = dni ? { dni: { [Op.like]: `%${dni}%` } } : null;

    Persona.findAll({ where: condition })
        .then(data => {
            res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving Personas."
        });
    });
  
};
*/
/*exports.findDNI = (req, res) => {
  console.log();
  const dni = req.params.dni;
 
  var condition1 = dni ? { 
                          dni: { [Op.like]: `%${dni}%` } 
                        } : null;
  
  Persona.findAll(
    { 
      where: [condition1],
      order: [
        ['nombre', 'ASC'],
      ],
    })
  .then(data => {
      
      res.send(data);
  })
  .catch(err => {
      res.status(500).send({
        message: "Error retrieving Entidad with id=" + id
      });
  });
};
*/
// Find a single Persona with an id
/*exports.findDNI = (req, res) => {
    const dni = req.params.dni;

    

    var condition = dni ? { dni: { [Op.like]: `%${dni}%` } } : null;

    Persona.findAll({ where: condition })
          .then(data => {
            res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message: "Error retrieving Persona with id=" + id
        });
    });
};*/

// Update a Persona by the id in the request
/*exports.update = (req, res) => {
  const id = req.params.id;
  Persona.update(req.body, {
      where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Persona was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Persona with id=${id}. Maybe Persona was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Persona with id=" + id
    });
  });
  
};

// Delete a Persona with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Persona.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
            message: "Mac was deleted successfully!"
            });
        } else {
            res.send({
            message: `Cannot delete Persona with id=${id}. Maybe Persona was not found!`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Could not delete Persona with id=" + id
        });
    });  
};

// Delete all Personas from the database.
exports.deleteAll = (req, res) => {
    Persona.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Persona were deleted successfully!` });
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while removing all Persona."
        });
    });
  
};*/
