const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var http = require('http');

const app = express();

var corsOptions = {
  origin: ["http://localhost:4200","http://localhost",
          "http://citasnow.s3-website-sa-east-1.amazonaws.com",
          "https://citasnow.s3-website-sa-east-1.amazonaws.com",
          "http://52.67.155.140","https://52.67.155.140",
          "http://ec2-52-67-155-140.sa-east-1.compute.amazonaws.com:3000/"]
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
//db.sequelize.sync();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Base de datos." });
});

require("./routes/cnivel.routes")(app);
require("./routes/cusuario.routes")(app);
/*require("./routes/mac.routes")(app);
require("./routes/entidad.routes")(app);
require("./routes/servicios.routes")(app);
require("./routes/persona.routes")(app);
require("./routes/programacion.routes")(app);
require("./routes/citas.routes")(app);
require("./routes/login.routes")(app);*/

// set port, listen for requests
const PORT = process.env.NODE_PORT || 3000;
const server= app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

