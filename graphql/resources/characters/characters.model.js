const mongoose = require('mongoose')

const CharacterSchema = mongoose.Schema({
  fullname: {
    type: String,
    require: true,
    trim: true
  },
  alias: {
    type: String,
    require: true,
    trim: true
  },
  race: {
    type: String,
    trim: true
  },
  age: {
    type: Number    
  },
  birthday: {
    type: Date
  },
  status: {
    type: String
  },  
  height: {
    type: Number
  },
  photo: {
    type: String
  },
  firstApparition: {
    type: Date
  },
  about: {
    type: String
  },
  /** Relación con un documento */
  power: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Power'      
  },
  occupations: [String],
  /** Collección de documentos relacionados */
  appearsIn: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Episode' 
  }],
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Character', CharacterSchema)