const express = require('express'),
    pug = require('pug'),
    path = require('path'),
    publicDir = express.static(`${__dirname}/public`),
    viewDir = `${__dirname}/views`;
// se crea express y el path 
let app = express(); // se inicializa express

const bodyParser = require('body-parser');

app
    .set('views', viewDir)
    .set('view engine', 'pug')
    .set("views", path.join(__dirname, "views")) // se coloca la carpeta views como el directorio
    .set('port', process.env.PORT || 3000) // se establece el puerto para la recepcion del servidor
    .use(publicDir) 
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended: false
    }))
    .all('*', (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    })

var server = require("./server"); // se crea una instancia de la clase. 
server.iniciar(app); // se inicia el metodo que se tiene en la clase server y se le envia la configuracion de app