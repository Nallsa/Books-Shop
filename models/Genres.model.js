const mongoose = require('mongoose')

const genresSchema = mongoose.Schema({
  genre: {
    type: String,
  },
})

const Genres = mongoose.model('Genres', genresSchema)

module.exports = Genres
