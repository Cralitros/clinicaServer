const db = require("../models");
const Listadiagnostico = db.listadiagnosticos;
const Op = db.Sequelize.Op;

// Create and Save a new Listadiagnostico
exports.create = (req, res) => {
     // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "no se encuentra la pagina!"
    });
    return;
  }

  // Create a Listadiagnostico
  const listadiagnosticos = {
    listadiagnostico: req.body.listadiagnostico,
    listasintomas:req.body.sistemaId,
    pacienteId:req.body.pacienteId,
    usuarioId:req.body.usuarioId,
  };
 

  // Save Listadiagnostico in the database
  Listadiagnostico.create(listadiagnosticos)
    .then(data => {
		  console.log(data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Listadiagnostico."
      });
    });
  
};

// Retrieve all Listadiagnostico by dni from the database.
exports.findbyId = (req, res) => {

  const id = req.body.id;


  /*var condition1 = dni ? { dni: { [Op.eq]: `${dni}` } } : null;
  var condition2 = password ? { password: { [Op.eq]: `${password}` } } : null;

  console.log(dni,password);*/

  Listadiagnostico.findByPk( id)
      .then(data => {
          
          res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message:
          err.message || "Some error occurred while retrieving Listadiagnostico."
      });
  });

};

// Retrieve all subsistema from the database.
exports.findAll = (req, res) => {


  Listadiagnostico.findAll()
      .then(data => {
          
          res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message:
          err.message || "Some error occurred while retrieving Listadiagnostico."
      });
  });

};

// Update a Subsistema by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Listadiagnostico.update(req.body, {
      where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Listadiagnostico was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Listadiagnostico with id=${id}. Maybe Listadiagnostico was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Listadiagnostico with id=" + id
    });
  });
  
};

// Delete a Persona with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Listadiagnostico.destroy({
      where: { id: id }
  })
  .then(num => {
      if (num == 1) {
          res.send({
          message: "Listadiagnostico was deleted successfully!"
          });
      } else {
          res.send({
          message: `Cannot delete Listadiagnostico with id=${id}. Maybe Listadiagnostico was not found!`
          });
      }
      })
      .catch(err => {
      res.status(500).send({
          message: "Could not delete Listadiagnostico with id=" + id
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
