const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  isBlocked: {
    type: Boolean,
    required: true,
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Books',
      
    },
  ],
})

const Users = mongoose.model('Users', userSchema)

module.exports = Users
