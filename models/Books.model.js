const mongoose = require('mongoose')

const booksSchema = mongoose.Schema({
  booksName: {
    type: String,
    required: true,
  },
  genres: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genres',
  },
  bookRental: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
  booksReview: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'review',
    },
  ],
})

const Books = mongoose.model('Books', booksSchema)

module.exports = Books
