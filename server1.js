const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var http = require('http');

//app = module.exports.app = express();
const app = express();


var corsOptions = {
    origin: ["https://centrosmac.com/", "http://localhost:4200"]
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
//db.sequelize.sync();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

const db = require("./models");
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
    res.json({message: "Base de datos."});
});


require("./routes/mac.routes")(app);
require("./routes/entidad.routes")(app);
require("./routes/servicios.routes")(app);
require("./routes/persona.routes")(app);
require("./routes/programacion.routes")(app);
require("./routes/citas.routes")(app);
require("./routes/login.routes")(app);

// set port, listen for requests
const PORT = process.env.NODE_PORT || 8080;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

//const io = require('socket.io')(server);
const io = require("socket.io")(server, {
    cors: {
        origin: corsOptions,
        methods: ["GET", "POST"]
    }
});

io.on('connection', function (socket) {
    console.log("usuario conectado");
    socket.emit('test-event', new Date().toString());
    /*  console.log('Client connected...');
      client.on('join', function(data) {
         console.log(data);
         //client.emit('join', { datetime: new Date().getTime() });
         client.emit('messages',new Date().toString());
      });*/

});
