'use strict'

const connectDb = require('./db')
const { ObjectID } = require('mongodb')
const errorHandler = require ('./errorHandler')

module.exports = {
    insertValue: async (id, datos) => {
        let nameColl = 'vacio';
        let db;

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
                db = await connectDb ()
                totInformes = await db.collection(nameColl).find().toArray()
            } catch (error) {
                errorHandler(error)
            }
            return totInformes
        } else {
            totInformes = {
                aviso : "0x400",
                text : "El objeto no contenía identificador"
            }
            return totInformes
        }    
    
        try {
          db = await connectDb()
          monitoreo = await db.collection('courses').insertOne(newCourse)
          newData._id = monitoreo.insertedId
        } catch (error) {
          errorHandler(error)
        }
    
        return newData
      }
}