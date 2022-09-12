const db = require("../models");
const Programacion = db.programacion;
const Op = db.Sequelize.Op;
const QueryTypes =db.Sequelize.QueryTypes;

// Create and Save a new Programacion
exports.create = (req, res) => {
  
     // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "no se encuentra la pagina!"
    });
    return;
  }

  const diai = req.params.diai;
  const mesi = req.params.mesi;
  const anioi = req.params.anioi;

  const fechai = `${diai}/${mesi}/${anioi}`;

  // Create a Programacion
  const programacion = {
    detalle: req.body.detalle,
    entidad: req.body.entidad,
    fechai: fechai,
    mac: req.body.mac,
  };
 

  // Save Programacion in the database
  Programacion.create(programacion)
    .then(data => {
		  console.log(data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Programacion."
      });
    });
  
};




// Retrieve all Programacion from the database.
exports.findAll = (req, res) => {
    const mac = req.query.mac;
    var condition = mac ? { mac: { [Op.like]: `%${mac}%` } } : null;

    Programacion.findAll({ where: condition })
        .then(data => {
            res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving Programacion."
        });
    });
  
};

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

// Find a single Programacion with an id
exports.findProgramacion = (req, res) => {
  console.log();
  const mac = req.params.mac;
  const entidad = req.params.entidad;

  const dia = req.params.dia;
  const mes = req.params.mes;
  const anio = req.params.anio;

  const fecha=dia+"/"+mes+"/"+anio;

  var condition1 = mac ? { 
                          mac: { [Op.like]: `%${mac}%` } 
                        } : null;
  var condition2 = entidad ? { 
                          entidad: { [Op.like]: `%${entidad}%` } 
                        } : null;

  var condition3 = fecha ? { 
                          fechai: { [Op.eq]: `${fecha}` } 
                        } : null;

  Programacion.findAll(
    { 
      where: [condition1, condition2, condition3],
      attributes: ['detalle'], 
    })
  .then(data => {
      
      res.send(data);
  })
  .catch(err => {
      res.status(500).send({
        message: "Error retrieving Programacion with id=" + id
      });
  });
};

exports.consultaCupos = (req, res) => {
  const dian = req.params.dian;
  const hora = req.params.hora;
  const mac = req.params.mac;
  const entidad = req.params.entidad;
  const dia = req.params.dia;
  const mes = req.params.mes;
  const anio = req.params.anio;
  const fecha = `${dia}/${mes}/${anio}`;

  
  //const anioi = req.params.anioi;

  qry=`SELECT JSON_EXTRACT(detalle, '$.${dian}.horas."${hora}"') AS cupos FROM programacions WHERE entidad='${entidad}' and fechai='${fecha}' AND mac LIKE '%${mac}%'`;
  
  cupos = db.sequelize.query(qry).then(data => {     
    res.send(data);
  });

  
}

exports.consultaMomentanea= (req, res) => {
  const dian = req.params.dian;
  const hora = req.params.hora;
  const cupos = req.params.cupos;
  const entidad = req.params.entidad;
  const dia = req.params.dia;
  const mes = req.params.mes;
  const anio = req.params.anio;
  const fecha = `${dia}/${mes}/${anio}`;
  const mac = req.params.mac;


  const diani = req.body.dian;
  const horai = req.body.hora;
  const cuposi = req.body.cupos;


  /*const dian = "lunes";
  const hora = '"8:00"';
  const cupos = "6";
  const entidad = "RENIEC";
  const dia='05';
  const mes='04';
  const anio='2021';
  const fecha = `${dia}/${mes}/${anio}`;
  const mac = "MAC Arequipa";*/
        //UPDATE programacions SET detalle = JSON_REPLACE(detalle,'$.miercoles.horas.8:00','2') WHERE entidad LIKE '%SUNAT%' and fechai ='26/04/2021' and mac LIKE '%MAC Arequipa%'
  //qry=`UPDATE programacions SET detalle = JSON_REPLACE(detalle,'$.${diani}.horas.${horai}','${cuposi}') WHERE entidad LIKE '%${entidad}%' and fechai ='${fecha}' and mac LIKE '${mac}'`;
  qry=`UPDATE programacions SET detalle = JSON_REPLACE(detalle,'$.${diani}.horas."${horai}"','${cuposi}') WHERE entidad LIKE '%${entidad}%' and fechai ='${fecha}' and mac LIKE '%${mac}%'`


  //query='UPDATE programacion SET detalle = JSON_REPLACE(detalle, '$.$dia.horas.$horal', '$cupo') WHERE entidad LIKE '%$entidad%' and fechai = '$fecha' and mac = '$mac'';

  console.log(qry);

  
  cars = db.sequelize.query(qry).then(data => {
    res.send(data);
  });

console.log(cars);
  //res.send(cars);
};

exports.findProgramacionporMacporEntidad = (req, res) => {
  console.log();
  const mac = req.params.mac;
  const entidad = req.params.entidad;

  var condition1 = mac ? { 
                          mac: { [Op.like]: `%${mac}%` } 
                        } : null;
  var condition2 = entidad ? { 
                          entidad: { [Op.like]: `%${entidad}%` } 
                        } : null;


  Programacion.findAll(
    { 
      where: [condition1, condition2],
      attributes: ['id', 'detalle'], 
    })
  .then(data => {
      
      res.send(data);
  })
  .catch(err => {
      res.status(500).send({
        message: "Error retrieving Programacion with id=" + id
      });
  });
};

// Update a Programacion by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Programacion.update(req.body, {
      where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Persona was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Programacion with id=${id}. Maybe Programacion was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Programacion with id=" + id
    });
  });
  
};

// Delete a Programacion with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Programacion.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
            message: "Programacion was deleted successfully!"
            });
        } else {
            res.send({
            message: `Cannot delete Programacion with id=${id}. Maybe Programacion was not found!`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Could not delete Programacion with id=" + id
        });
    });  
};

// Delete all Programacion from the database.
exports.deleteAll = (req, res) => {
  Programacion.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Programacion were deleted successfully!` });
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while removing all Programacion."
        });
    });
  
};
