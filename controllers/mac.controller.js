const db = require("../models");
const Mac = db.mac;
const Op = db.Sequelize.Op;

// Create and Save a new Mascota
exports.create = (req, res) => {
     // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "no se encuentra la pagina!"
    });
    return;
  }

  // Create a MAC
  const mac = {
    mac: req.body.mac,
    ciudad: req.body.ciudad,
    activo: req.body.activo,
  };
 

  // Save MAC in the database
  Mac.create(mac)
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




// Retrieve all MACs from the database.
exports.findAll = (req, res) => {
    const mac = req.query.mac;
    var condition = mac ? { mac: { [Op.like]: `%${mac}%` } } : null;

    Mac.findAll({ where: condition })
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

// Find a single MAC with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Mac.findByPk(id)
          .then(data => {
            res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message: "Error retrieving MAC with id=" + id
        });
    });
};

// Update a Mascota by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Mac.update(req.body, {
        where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "MAC was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update MAC with id=${id}. Maybe MAC was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating MAC with id=" + id
      });
    });
  
};

// Delete a Mascota with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Mac.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
            message: "Mac was deleted successfully!"
            });
        } else {
            res.send({
            message: `Cannot delete Mac with id=${id}. Maybe Mac was not found!`
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
        res.send({ message: `${nums} Mac were deleted successfully!` });
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while removing all Mac."
        });
    });
  
};
