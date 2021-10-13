const db = require("../models");
const Entidad = db.entidad;
const Op = db.Sequelize.Op;

// Create and Save a new Entidad
exports.create = (req, res) => {
     // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "no se encuentra la pagina!"
    });
    return;
  }

  // Create a Entidad
  const entidad = {
    entidad: req.body.entidad,
    sigla: req.body.sigla,
    localidades: req.body.localidades,
    activo: req.body.activo,
  };
 

  // Save Entidad in the database
  Entidad.create(entidad)
    .then(data => {
		  console.log(data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the MAC."
      });
    });
  
};




// Retrieve all Entidades from the database.
exports.findAll = (req, res) => {
    const mac = req.query.mac;
   // const entidad = req.query.entidad;
    var condition = mac ? { localidades: { [Op.like]: `%${mac}%` } } : null;

    Entidad.findAll({ where: condition })
        .then(data => {
            res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving MACs."
        });
    });
  
};

// Find a single Entidad with an id
exports.findEntidades = (req, res) => {
  const mac = req.params.mac;
  var condition = mac ? { localidades: { [Op.like]: `%${mac}%` } } : null;
  Entidad.findAll(
    { 
      where: condition, 
      order: [
        ['entidad', 'ASC'],
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
exports.findEntidadesMAC = (req, res) => {
  const mac = req.params.mac;
  const ent = req.params.ent;

  var condition = mac ? { localidades: { [Op.like]: `%${mac}%` } } : null;
  var condition2 = ent ? { entidad: { [Op.like]: `%${ent}%` } } : null;
  Entidad.findAll(
    { 
      where: [condition,condition2], 
      order: [
        ['entidad', 'ASC'],
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

// Find a single Entidad with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Entidad.findByPk(id)
          .then(data => {
            res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message: "Error retrieving Entidad with id=" + id
        });
    });
};

// Update a Entidad by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Entidad.update(req.body, {
        where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Entidad was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Entidad with id=${id}. Maybe Entidad was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Entidad with id=" + id
      });
    });
  
};

// Delete a Entidad with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Entidad.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
            message: "Entidad was deleted successfully!"
            });
        } else {
            res.send({
            message: `Cannot delete Entidad with id=${id}. Maybe Entidad was not found!`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Could not delete Mac with id=" + id
        });
    });  
};

// Delete all Mascotas from the database.
exports.deleteAll = (req, res) => {
    Mac.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Entidad were deleted successfully!` });
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while removing all Mac."
        });
    });
  
};
