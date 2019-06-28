'use strict'

require ('dotenv').config()
const express = require ('express');
const cors = require ('cors');
const app = express();
const port = process.env.port || 4000;
const Query = require ('./lib/query.js');
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/informe', (req, res) => {

});

app.get('/consulta', async (req, res) => {
    let mensaje
    if (req.body.accion==='total') {
        mensaje = await Query.getTotDatos(req.body.identificador)
    } else if (req.body.accion==='menu') {
        mensaje = await Query.getMenu(req.body.identificador)
    } else if (req.body.accion==='monitoreo') {
        mensaje = await Query.getMonitoreo(req.body.identificador,req.body.selector)
    } else {
        mensaje={
            aviso : "0x400",
            text : "El objeto no contenía identificador"
        }
    }
    if (mensaje.hasOwnProperty("aviso")) {
        res.json({respuesta:400,mensaje:mensaje})
    } else {
        res.json({respuesta:200,mensaje:mensaje})
    }
});

app.listen (port, () => {
    console.log(`El servidor se está ejecutando en http://localhost:${port}`)
})