const db = require("../models");
const Citas = db.citas;
const Programacion = db.programacion;
const Op = db.Sequelize.Op;

const async = require('async')

// Create and Save a new Servicio
debugger;
exports.create = async (req, res) => {
  debugger;
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "no se encuentra la pagina!"
    });
    return;
  }
  debugger;
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
    fechai: req.body.fechai,
    fecha: req.body.fecha,
    dia: req.body.dia,
    hora: req.body.hora,
    ciudadano: req.body.ciudadano,
    dni: req.body.dni,
    codigocita: req.body.codigocita,
    tramite: req.body.tramite,
    idencita: req.body.idencita,
  };

  //;
  cupos = await this.countCupoIn(citas.codigocita);
  console.log("Consulta");
  console.log(cupos);
  console.log("insercion");

  if (cupos === "1") {
    console.log("dentro");
  /*  debugger;
    console.log("dentro");
    cupos2 = Number(citas.codigocita.substring(citas.codigocita.length - 1, citas.codigocita.length)) + 1;
    citas.codigocita = `${citas.codigocita.substring(0, citas.codigocita.length-1)}${cupos2}`;
    console.log("citas.codigocita");
    console.log(citas.codigocita);

    totalCupos = await this.consultaCupos(citas.dia, citas.hora, citas.entidad, citas.fechai, citas.mac, res);
    totalCupos = totalCupos - 1;
    await this.consultaMomentanea(citas.entidad, citas.mac, citas.fechai, citas.dia, citas.hora, totalCupos, res);
    console.log("totalCupos");
    console.log(totalCupos);*/

      console.log("Cupo de cita ocupado");
     // res.send("Cupo de cita ocupado")
      //return;

      res.status(200).send({
        idencita: "0"
      });
    
    return;
    
  }
  console.log(citas);
  // Save Servicio in the database
  Citas.create(citas)
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Cita."
      });
    });

};


exports.consultaMomentanea = async (entidad, mac, fechai, dian, hora, cupos, res) => {
  qry = `UPDATE programacions SET detalle = JSON_REPLACE(detalle,'$.${dian}.horas.${hora}','${cupos}') WHERE entidad LIKE '%${entidad}%' and fechai ='${fechai}' and mac LIKE '%${mac}%'`

  console.log(qry);
  return cars = await db.sequelize.query(qry).then(async data => {
    console.log(data);
    return await data;
  });
  console.log(cars);

};
exports.consultaCupos = async (dian, hora, entidad, fechai, mac, res) => {

  qry = `SELECT JSON_EXTRACT(detalle, '$.${dian}.horas.${hora}') AS cupos FROM programacions WHERE entidad='${entidad}' and fechai='${fechai}' AND mac LIKE '%${mac}%'`;

  return cupos = await db.sequelize.query(qry).then(async data => {
    console.log(data);
    return await data;
  });


}

// Retrieve all Servicios from the database.
exports.findAll = (req, res) => {
  const mac = req.query.mac;

  debugger;
  // const entidad = req.query.entidad;
  var condition = mac ? {
    mac: {
      [Op.like]: `%${mac}%`
    }
  } : null;

  Citas.findAll({
      where: condition
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Citas."
      });
    });

};

// Find a single Servicios with an id
exports.findCitabyDNI = (req, res) => {
  const dia = req.params.dia;
  const mes = req.params.mes;
  const anio = req.params.anio;
  const fecha = `${dia}/${mes}/${anio}`;

  const entidad = req.params.entidad;
  const mac = req.params.mac;
  const dni = req.params.dni;

  var condition4 = dni ? {
    dni: {
      [Op.eq]: `${dni}`
    }
  } : null;
  var condition3 = fecha ? {
    fecha: {
      [Op.eq]: `${fecha}`
    }
  } : null;
  var condition1 = mac ? {
    mac: {
      [Op.like]: `%${mac}%`
    }
  } : null;
  var condition2 = entidad ? {
    entidad: {
      [Op.like]: `%${entidad}%`
    }
  } : null;

  //Citas.findAll({ where: [condition1,condition2,condition3,condition4]})
  Citas.findAll({
      where: [condition1, condition2, condition3, condition4]

    })
    .then(data => {

      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Cita with id=" + entidad
      });
    });
};

exports.countCitaHora = (req, res) => {
  const dia = req.params.dia;
  const mes = req.params.mes;
  const anio = req.params.anio;
  const fecha = dia + "/" + mes + "/" + anio;

  const entidad = req.params.entidad;
  const mac = req.params.mac;
  const hora = `${req.params.hora}`;

  var condition1 = entidad ? {
    entidad: {
      [Op.like]: `%${entidad}%`
    }
  } : null;
  var condition2 = mac ? {
    mac: {
      [Op.like]: `%${mac}%`
    }
  } : null;
  var condition3 = fecha ? {
    fecha: {
      [Op.eq]: fecha
    }
  } : null;
  var condition4 = hora ? {
    hora: {
      [Op.eq]: hora
    }
  } : null;

  Citas.count({
      where: [condition1, condition2, condition3, condition4]
    })
    .then(data => {
      const num = `${data}`;
      res.send(num);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Cita."
      });
    });

};

exports.findAllMacEntidad = (req, res) => {

  const diai = req.params.diai;
  const mesi = req.params.mesi;
  const anioi = req.params.anioi;
  const fechai = diai + "/" + mesi + "/" + anioi;

  const entidad = req.params.entidad;
  const mac = req.params.mac;

  var condition1 = entidad ? {
    entidad: {
      [Op.like]: `%${entidad}%`
    }
  } : null;
  var condition2 = mac ? {
    mac: {
      [Op.like]: `%${mac}%`
    }
  } : null;
  var condition3 = fechai ? {
    fechai: {
      [Op.eq]: `${fechai}`
    }
  } : null;

  Citas.findAll({
      where: [condition1, condition2, condition3],
      order: [
        ['hora', 'ASC'],
      ],
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Cita."
      });
    });

};

exports.yaTieneCita = (req, res) => {
  const dia = req.params.dia;
  const mes = req.params.mes;
  const anio = req.params.anio;
  const fechai = dia + "/" + mes + "/" + anio;
  const dni = req.params.dni;
  const entidad = req.params.entidad;
  const mac = req.params.mac;

  var condition1 = dni ? {
    dni: {
      [Op.eq]: `${dni}`
    }
  } : null;
  var condition2 = fechai ? {
    fechai: {
      [Op.eq]: `${fechai}`
    }
  } : null;
  var condition3 = entidad ? {
    entidad: {
      [Op.like]: `%${entidad}%`
    }
  } : null;
  var condition4 = mac ? {
    mac: {
      [Op.like]: `${mac}`
    }
  } : null;

  Citas.findAll({
      where: [condition1, condition2, condition3, condition4],
      order: [
        ['id', 'desc'],
      ],
    }).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Cita."
      });
    });
};
exports.countCupoIn = async (cod) => {
  const codigocita = cod;
  // console.log(codigocita);
  var condition1 = codigocita ? {
    codigocita: {
      [Op.eq]: `${codigocita}`
    }
  } : null;
  //console.log(condition1);
  return await Citas.count({
      where: condition1
    })
    .then(async data => {
      //console.log(data);
      const num = `${data}`;
      //res.send(num);
      return await num;
    })
    .catch(err => {
      /*res.status(500).send({
          message:
          err.message || "Some error occurred while retrieving Cita."
      });*/
    });

}
exports.countCupo = (req, res) => {
  const codigocita = req.params.codigocita;
  console.log(codigocita);
  var condition1 = codigocita ? {
    codigocita: {
      [Op.eq]: `${codigocita}`
    }
  } : null;
  console.log(condition1);
  Citas.count({
      where: condition1
    })
    .then(data => {
      console.log(data);
      const num = `${data}`;
      res.send(num);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Cita."
      });
    });

}

exports.findOnebyDNI = (req, res) => {
  const diai = req.params.diai;
  const mesi = req.params.mesi;
  const anioi = req.params.anioi;
  const fechai = diai + "/" + mesi + "/" + anioi;
  const dni = req.params.dni;

  var condition1 = dni ? {
    dni: {
      [Op.eq]: `${dni}`
    }
  } : null;
  var condition2 = fechai ? {
    fechai: {
      [Op.eq]: `${fechai}`
    }
  } : null;

  Citas.findAll({
      where: [condition1, condition2],
      order: [
        ['id', 'desc'],
      ],
    }).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Cita."
      });
    });
};

exports.findOnebyCodigo = (req, res) => {
  const diai = req.params.diai;
  const mesi = req.params.mesi;
  const anioi = req.params.anioi;
  const fechai = diai + "/" + mesi + "/" + anioi;

  const codigocita = req.params.codigocita;

  var condition1 = codigocita ? {
    codigocita: {
      [Op.eq]: `${codigocita}`
    }
  } : null;
  var condition2 = fechai ? {
    fechai: {
      [Op.eq]: `${fechai}`
    }
  } : null;

  console.log(condition2);
  console.log(condition1);
  debugger;

  Citas.findAll({
      where: [condition1, condition2],
      order: [
        ['id', 'desc'],
      ],
    }).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Cita."
      });
    });
};

exports.findOnebyNombre = (req, res) => {
  const diai = req.params.diai;
  const mesi = req.params.mesi;
  const anioi = req.params.anioi;
  const fechai = diai + "/" + mesi + "/" + anioi;

  const ciudadano = req.params.ciudadano;


  var condition1 = ciudadano ? {
    ciudadano: {
      [Op.like]: `%${ciudadano}%`
    }
  } : null;
  var condition2 = fechai ? {
    fechai: {
      [Op.eq]: `${fechai}`
    }
  } : null;

  Citas.findAll({
      where: [condition1, condition2],
      order: [
        ['id', 'desc'],
      ],
    }).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Cita."
      });
    });
};


exports.findOnebyNombreyDni = (req, res) => {

  const ciudadano = req.params.ciudadano;
  const dni = req.params.dni;
  const diai = req.params.diai;
  const mesi = req.params.mesi;
  const anioi = req.params.anioi;
  const fechai = diai + "/" + mesi + "/" + anioi;



  var condition1 = ciudadano ? {
    ciudadano: {
      [Op.like]: `%${ciudadano}%`
    }
  } : null;
  var condition2 = dni ? {
    dni: {
      [Op.eq]: dni
    }
  } : null;
  var condition3 = fechai ? {
    fechai: {
      [Op.eq]: fechai
    }
  } : null;

  Citas.findAll({
      where: [condition1, condition2, condition3],
      order: [
        ['fecha', 'desc'],
      ],
    }).then(data => {
      console.log(data);
      debugger;
      if (data === '[]') {
        res.send(0);
        //debugger
      } else {
        res.send(data);
        // debugger
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Cita."
      });
    });
};

// Find a single Servicios with an id
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

// Update a Servicios by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Citas.update(req.body, {
      where: {
        id: id
      }
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

// Delete a Servicios with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Citas.destroy({
      where: {
        id: id
      }
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

// Delete all Servicios from the database.
exports.deleteAll = (req, res) => {
  Citas.destroy({
      where: {},
      truncate: false
    })
    .then(nums => {
      res.send({
        message: `${nums} Cita were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all Cita."
      });
    });

};