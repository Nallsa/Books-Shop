const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
  userText: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
  books: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'books',
  },
  text: String,
})

const Review = mongoose.model('review', reviewSchema)

module.exports = Review
