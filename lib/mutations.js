'use strict'

const connectDb = require('./db')
//const { ObjectID } = require('mongodb')
const errorHandler = require ('./errorHandler')

module.exports = {
    insertValue: async (id, datos) => {
        let nameColl = 'vacio';
        let db;
        let newData;
        let dts = JSON.parse(datos);
        dts.currentDate=new Date();

        switch (id) {
            case "1":
                nameColl = 'Hand Held'
            break;
            case "2":
                nameColl = 'Botonera'
            break;
        }
        
        if (nameColl != 'vacio') {
            try {
                db = await connectDb ();
                let monitoreo = await db.collection(nameColl).insertOne(dts);
                newData = monitoreo.ops;
            } catch (error) {
                errorHandler(error)
            }
            return newData
        } else {
            newData = {
                aviso : "0x400",
                text : "El objeto no contenía identificador"
            }
            return newData
        }    
      }
}