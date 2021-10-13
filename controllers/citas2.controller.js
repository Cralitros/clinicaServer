const db = require("../models");
const Citas = db.citas;
const Op = db.Sequelize.Op;


// Create and Save a new Cita
exports.create = (req, res) => {
     // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "no se encuentra la pagina!"
    });
    return;
  }

  const diaa = req.params.diaa;
  const mesa = req.params.mesa;
  const anioa = req.params.anioa;
  const fecha = `${diaa}/${mesa}/${anioa}`;

  const diai = req.params.diai;
  const mesi = req.params.mesi;
  const anioi = req.params.anioi;
  const fechai = `${diai}/${mesi}/${anioi}`;

  // Create a Cita
  const citas = {
    entidad: req.body.entidad,
    mac: req.body.mac,
    fechai: fechai,
    fecha: fecha,
    dia: req.body.dia,
    hora: req.body.hora,
    ciudadano: req.body.ciudadano,
    dni: req.body.dni,
    codigoCita: req.body.codigoCita,
    tramite: req.body.tramite,
  };

  
 

  // Save Cita in the database
  Citas.create(citas)
    .then(data => {
		  console.log(data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Cita."
      });
    });
  
};

exports.verificarCitaDNI = (req, res) => {

  const dia = req.params.dia;
  const mes = req.params.mes;
  const anio = req.params.anio;
  const fecha = `${dia}/${mes}/${anio}`;

  const entidad = req.query.entidad;
  const mac = req.query.mac;
  const dni = req.query.dni;
  
  var condition1 = dni ? { dni: { [Op.eq]: `${dni}` } } : null;
  var condition2 = fecha ? { fecha: { [Op.eq]: `${fecha}` } } : null;
  var condition3 = entidad ? { entidad: { [Op.like]: `%${entidad}%` } } : null;
  var condition4 = mac ? { mac: { [Op.like]: `%${mac}%` } } : null;

  Citas.findAll({ where: {condition1,condition2,condition3,condition4}})
      .then(data => {
          res.send(data);
          
  })
  .catch(err => {
      res.status(500).send({
          message:
          err.message || "Some error occurred while retrieving Cita."
      });
  });
};

// Retrieve all Citas from the database.
exports.countCitaHora = (req, res) => {
  const dia = req.params.dia;
  const mes = req.params.mes;
  const anio = req.params.anio;
  const fecha = dia+"/"+mes+"/"+anio;

  const entidad = req.query.entidad;
  const mac = req.query.mac;
  const hora = req.query.hora;
  
  var condition1 = entidad ? { entidad: { [Op.like]: `%${entidad}%` } } : null;
  var condition2 = mac ? { mac: { [Op.like]: `%${mac}%` } } : null;
  var condition3 = fecha ? {fecha: { [Op.like]: fecha } } : null;
  var condition4 = hora ? { hora: { [Op.like]: hora } } : null;

   var dat0={entidad: { [Op.like]: `%${entidad}%`}, 
                         mac: { [Op.like]: `%${mac}%`},
                         fecha: { [Op.like]: fecha } ,
                         hora: { [Op.like]: hora } 
                        };

  Citas.count({ where: {condition1,condition2,condition3,condition4}})
      .then(data => {
          res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message:
          err.message || "Some error occurred while retrieving Cita."
      });
  });

};


// Retrieve all Citas from the database.
exports.findAllMacEntidad = (req, res) => {

  const diai = req.params.diai;
  const mesi = req.params.mesi;
  const anioi = req.params.anioi;
  const fechai = diai+"/"+mesi+"/"+anioi;

  const entidad = req.query.entidad;
  const mac = req.query.mac;

  var condition1 = entidad ? { entidad: { [Op.like]: `%${entidad}%` } } : null;
  var condition2 = mac ? { mac: { [Op.like]: `%${mac}%` } } : null;
  var condition3 = fechai ? { fechai: { [Op.eq]: `${fechai}` } } : null;

  Citas.findAll({ where: {condition1,condition2,condition3},
                  order: [
                    ['hora', 'ASC'],
                  ],
                  })
      .then(data => {
          res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message:
          err.message || "Some error occurred while retrieving Cita."
      });
  });
  
};


exports.findOnebyDNI = (req, res) => {
  const diai = req.params.diai;
  const mesi = req.params.mesi;
  const anioi = req.params.anioi;
  const fechai = diai+"/"+mesi+"/"+anioi;
  const dni = req.params.dni;

  var condition1 = dni ? { dni: { [Op.eq]: `${dni}` } } : null;
  var condition2 = fechai ? { fechai: { [Op.eq]: `${fechai}` } } : null;

  Citas.findAll({ where: {condition1,condition2}})
      .then(data => {
          res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message:
          err.message || "Some error occurred while retrieving Cita."
      });
  });
};
exports.findOnebyCodigo = (req, res) => {
  const diai = req.params.diai;
  const mesi = req.params.mesi;
  const anioi = req.params.anioi;
  const fechai = diai+"/"+mesi+"/"+anioi;

  const codigo = req.params.codigo;
  
  var condition1 = codigo ? { codigo: { [Op.eq]: `${codigo}` } } : null;
  var condition2 = fechai ? { fechai: { [Op.eq]: `${fechai}` } } : null;

  Citas.findAll({ where: {condition1,condition2}})
      .then(data => {
          res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message:
          err.message || "Some error occurred while retrieving Cita."
      });
  });
};
exports.findOnebyNombre= (req, res) => {
  const diai = req.params.diai;
  const mesi = req.params.mesi;
  const anioi = req.params.anioi;
  const fechai = diai+"/"+mesi+"/"+anioi;

  const ciudadano = req.params.ciudadano;
  

  var condition1 = ciudadano ? { ciudadano: { [Op.like]: `%${ciudadano}%` } } : null;
  var condition2 = fechai ? { fechai: { [Op.eq]: `${fechai}` } } : null;

  Citas.findAll({ where: {condition1,condition2}})
      .then(data => {
          res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message:
          err.message || "Some error occurred while retrieving Cita."
      });
  });
};



// Find a single Cita with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Citas.findByPk(id)
          .then(data => {
            res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message: "Error retrieving Cita with id=" + id
        });
    });
};

// Update a Cita by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    codigoCita.update(req.body, {
        where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Cita was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Cita with id=${id}. Maybe Cita was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Cita with id=" + id
      });
    });
  
};

// Delete a Cita with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    codigoCita.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
            message: "Cita was deleted successfully!"
            });
        } else {
            res.send({
            message: `Cannot delete Cita with id=${id}. Maybe Cita was not found!`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Could not delete Cita with id=" + id
        });
    });  
};

// Delete all Cita from the database.
exports.deleteAll = (req, res) => {
  codigoCita.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Cita were deleted successfully!` });
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while removing all Cita."
        });
    });
  
};
