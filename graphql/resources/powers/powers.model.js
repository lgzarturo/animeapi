const mongoose = require('mongoose')

const PowerSchema = mongoose.Schema({
  power: {
    type: String,
    require: true,
    trim: true
  },
  type: {
    type: String,
    require: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Power', PowerSchema)