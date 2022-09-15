const Genres = require('../models/Genres.model')

module.exports.genresController = {
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
