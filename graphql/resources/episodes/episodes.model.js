const mongoose = require('mongoose')

const EpisodeSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true
  },
  number: {
    type: Number,
    require: true
  },
  season: {
    type: Number,
    require: true
  },
  synopsis: {
    type: String
  },
  releaseDate: {
    type: Date  
  },
  photos: [String],
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Episode', EpisodeSchema)