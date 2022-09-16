const Genres = require('../models/Genres.model')

module.exports.genresController = {
  getGenres: async (req, res) => {
    try {
      const getGenres = await Genres.find({})
      return res.json(getGenres)
    } catch (e) {
      console.log(e)
    }
  },
  postGenres: async (req, res) => {
    try {
      const { genre } = req.body
      const genresPost = await Genres.create({
        genre,
      })
      return res.json(genresPost)
    } catch (e) {
      console.log(e)
    }
  },
}
