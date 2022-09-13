const db = require("../models");
const Paciente = db.paciente;
const Op = db.Sequelize.Op;

// Create and Save a new Usuario
exports.create = (req, res) => {
     // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "no se encuentra la pagina!"
    });
    return;
  }

  // Create a Usuario
  const paciente = {
    nombre: req.body.nombre,
    appaterno: req.body.appaterno,
    apmaterno: req.body.nombre,
    sexo: req.body.sexo,
    dni: req.body.dni,
    fechaNacimiento: req.body.fechaNacimiento,
    peso: req.body.peso,
    talla: req.body.talla,
    usuarioId:req.body.usuarioId,
  };
 

  // Save Paciente in the database
  Paciente.create(paciente)
    .then(data => {
		  console.log(data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Paciente."
      });
    });
  
};

// Retrieve all Paciente by dni from the database.
exports.findDNI = (req, res) => {

  const dni = req.body.dni;

  var condition1 = dni ? { dni: { [Op.eq]: `${dni}` } } : null;


  console.log(dni,password);

  Paciente.findAll( {where: [condition1]})
      .then(data => {
          res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message:
          err.message || "Some error occurred while retrieving Paciente."
      });
  });

};

// Retrieve all Paciente from the database.
exports.findAll = (req, res) => {

  Paciente.findAll()
      .then(data => {
          
          res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message:
          err.message || "Some error occurred while retrieving Paciente."
      });
  });

};

// Update a Paciente by the id in the request
exports.update = (req, res) => {
  const dni = req.params.dni;
  Paciente.update(req.body, {
      where: { dni: dni }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Paciente was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Paciente with id=${id}. Maybe Paciente was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Paciente with id=" + id
    });
  });
  
};

// Delete a Paciente with the specified id in the request
exports.delete = (req, res) => {
  const dni = req.params.dni;

  Paciente.destroy({
      where: { dni: dni }
  })
  .then(num => {
      if (num == 1) {
          res.send({
          message: "Paciente was deleted successfully!"
          });
      } else {
          res.send({
          message: `Cannot delete Paciente with id=${id}. Maybe Paciente was not found!`
          });
      }
      })
      .catch(err => {
      res.status(500).send({
          message: "Could not delete Paciente with id=" + id
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
