const { MongoClient } = require('mongodb');
const {
    DB_USER,
    DB_PASSWD,
    DB_NAME
} = process.env

const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWD}@clusterdlp-9jaba.mongodb.net/test?retryWrites=true&w=majority`
let connection

async function connectDB () {
    if (connection) return connection
    let client
    try {
      client = await MongoClient.connect(mongoUrl, {
        useNewUrlParser: true
      })
      connection = client.db(DB_NAME)
    } catch (error) {
      console.error("Error de conexion AtlasDB", mongoUrl, error)
      process.exit(1)
    }
    return connection
  }
  
module.exports = connectDB