const mongoose = require('mongoose')
require('dotenv').config({path: '.env'})

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Conexión exitosa con la base de datos')
  } catch(error) {
    console.log('Hay un error con la base de datos')
    console.log(error)
    process.exit(1)
  }
}