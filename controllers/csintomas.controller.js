const db = require("../models");
const Sintoma = db.sintomas;
const Op = db.Sequelize.Op;

// Create and Save a new Sintoma
exports.create = (req, res) => {
     // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "no se encuentra la pagina!"
    });
    return;
  }

  // Create a Sintoma
  const sintoma = {
    sintoma: req.body.sintoma,
    estado: req.body.estado,
    subsistemasId:req.body.subsistemasId,
    usuarioId:req.body.usuarioId,
  };
 

  // Save Sintoma in the database
  Sintoma.create(sintoma)
    .then(data => {
		  console.log(data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Sintoma."
      });
    });
  
};

// Retrieve all Sintoma by dni from the database.
exports.findbyId = (req, res) => {

  const id = req.body.id;


  /*var condition1 = dni ? { dni: { [Op.eq]: `${dni}` } } : null;
  var condition2 = password ? { password: { [Op.eq]: `${password}` } } : null;

  console.log(dni,password);*/

  Sintoma.findByPk( id)
      .then(data => {
          
          res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message:
          err.message || "Some error occurred while retrieving Sintoma."
      });
  });

};

// Retrieve all Sintoma from the database.
exports.findAll = (req, res) => {


  Sintoma.findAll()
      .then(data => {
          
          res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message:
          err.message || "Some error occurred while retrieving Sintoma."
      });
  });

};

// Update a Sintoma by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Sintoma.update(req.body, {
      where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Sintoma was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Sintoma with id=${id}. Maybe Sintoma was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Sintoma with id=" + id
    });
  });
  
};

// Delete a Sintoma with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Sintoma.destroy({
      where: { id: id }
  })
  .then(num => {
      if (num == 1) {
          res.send({
          message: "Sintoma was deleted successfully!"
          });
      } else {
          res.send({
          message: `Cannot delete Sintoma with id=${id}. Maybe Sintoma was not found!`
          });
      }
      })
      .catch(err => {
      res.status(500).send({
          message: "Could not delete Sintoma with id=" + id
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
