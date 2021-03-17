const mongoose = require('mongoose')

const CharacterSchema = mongoose.Schema({
  fullname: {
    type: String,
    require: true,
    trim: true
  },
  alias: {
    type: String,
    trim: true
  },
  race: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Character', CharacterSchema)