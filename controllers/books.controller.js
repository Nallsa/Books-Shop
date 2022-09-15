const Books = require('../models/Books.model')

module.exports.booksController = {
  getBooks: async (req, res) => {
    try {
      const booksGet = await Books.find({}).populate(['bookRental', 'genres'])
      return res.json(booksGet)
    } catch (e) {
      console.log(e)
    }
  },
  postBooks: async (req, res) => {
    try {
      const { booksName, genre, bookRental } = req.body
      if (bookRental.isBlocked !== true) {
        const booksPost = await Books.create({
          booksName,
          genre,
          bookRental,
        })
        return res.json(booksPost)
      }
    } catch (e) {
      console.log(e)
    }
  },
  deleteBooks: async (req, res) => {
    try {
      const booksDelete = await Books.findByIdAndDelete(req.params.id)
      return res.json(booksDelete)
    } catch (e) {
      console.log(e)
    }
  },
}
