const db = require("../models");
const Servicios = db.servicios;
const Op = db.Sequelize.Op;

// Create and Save a new Servicio
exports.create = (req, res) => {
     // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "no se encuentra la pagina!"
    });
    return;
  }

  // Create a Servicio
  const servicios = {
    servicios: req.body.servicios,
    entloc: req.body.entloc,
    activo: req.body.activo,
  };
 

  // Save Servicio in the database
  Servicios.create(servicios)
    .then(data => {
		  console.log(data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the servicio."
      });
    });
  
};




// Retrieve all Servicios from the database.
exports.findAll = (req, res) => {
    const servicios = req.query.servicios;
   // const entidad = req.query.entidad;
    var condition = servicios ? { servicios: { [Op.like]: `%${servicios}%` } } : null;

    Servicios.findAll({ where: condition })
        .then(data => {
            res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving Servicios."
        });
    });
  
};

// Find a single Servicios with an id
exports.findServicios = (req, res) => {
  console.log();
  const mac = req.params.mac;
  const entidad = req.params.entidad;
  var condition1 = mac ? { 
                          entloc: { [Op.like]: `%${mac}%` } 
                        } : null;
  var condition2 = entidad ? { 
                          entloc: { [Op.like]: `%${entidad}%` } 
                        } : null;
  Servicios.findAll(
    { 
      where: [condition1, condition2],
      order: [
        ['servicios', 'ASC'],
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

// Find a single Servicios with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Servicios.findByPk(id)
          .then(data => {
            res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message: "Error retrieving Servicios with id=" + id
        });
    });
};

// Update a Servicios by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Servicios.update(req.body, {
        where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Servicios was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Servicios with id=${id}. Maybe Servicios was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Servicios with id=" + id
      });
    });
  
};

// Delete a Servicios with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Servicios.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
            message: "Servicios was deleted successfully!"
            });
        } else {
            res.send({
            message: `Cannot delete Servicios with id=${id}. Maybe Servicios was not found!`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Could not delete Servicios with id=" + id
        });
    });  
};

// Delete all Servicios from the database.
exports.deleteAll = (req, res) => {
  Servicios.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Servicios were deleted successfully!` });
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while removing all Servicios."
        });
    });
  
};
