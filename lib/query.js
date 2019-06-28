'use strict'

const connectDb = require('./db')
const { ObjectID } = require('mongodb')
const errorHandler = require ('./errorHandler')

module.exports = {
    getTotDatos: async (datos) => {
        let nameColl = 'vacio';
        let db;
        let totInformes;

        switch (datos) {
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
    },
    getMenu: async (datos) => {
        let nameColl = 'Menu Seleccion';
        let db;
        let idFind;
        let totMenu = [];

        switch (datos) {
            case "1":
                idFind = 'Hand Held'
            break;
            case "2":
                idFind = 'Botonera'
            break;
        }
        
        if (nameColl == 'Menu Seleccion') {
            try {
                db = await connectDb ()
                totMenu = await db.collection(nameColl).find({
                    nombre_proyecto: idFind
                }).toArray()
            } catch (error) {
                errorHandler(error)
            }
            return totMenu
        }        
    }
};