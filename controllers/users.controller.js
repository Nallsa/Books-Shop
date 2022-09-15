const Users = require('../models/Users.model')
const Books = require('../models/Books.model')
// const Review = require("../models/Reviews.model");

module.exports.usersController = {
  postUsers: async (req, res) => {
    try {
      const { userName, isBlocked } = req.body
      const userPost = await Users.create({
        userName,
        isBlocked,
      })
      return res.json(userPost)
    } catch (e) {
      console.log(e)
    }
  },
  deleteUsers: async (req, res) => {
    try {
      const userDelete = await Users.findByIdAndRemove(req.params.id)
      return res.json(userDelete)
    } catch (e) {
      console.log(e)
    }
  },
  patchUsers: async (req, res) => {
    try {
      const { userName, isBlocked } = req.body
      const usersPatch = await Users.findByIdAndUpdate(req.params.id, {
        isBlocked,
      })
      res.json(usersPatch)
    } catch (err) {
      res.json(err)
    }
  },
  addBooks: async (req, res) => {
    try {
      const { clientID } = req.body
      const client = await Users.findById(clientID)
      if (!client.isBlocked) {
        const books = await Books.findById(req.params.id)
        if (!books.bookRental) {
          const client = await Users.findById(clientID)
          if (client.books.length < 3) {
            await Users.findByIdAndUpdate(clientID, {
              $addToSet: { books: req.params.id },
            })
            await Books.findByIdAndUpdate(req.params.id, {
              bookRental: clientID,
            })
            res.json('Книга арендована')
          } else {
            res.json('Нельзя арендовать больше 3-х книг одновременно')
          }
        } else {
          res.json('Эта книга уже арендована другим пользователем')
        }
      } else {
        res.json('Вы заблокированы')
      }
    } catch (err) {
      res.json(err)
    }
  },
  delBooks: async (req, res) => {
    try {
      await Books.findByIdAndUpdate(req.params.id, {
        bookRental: null,
      })
      const usersPatch = await Users.findByIdAndUpdate(req.params.id, {
        $pull: { books: req.params.id },
      })
      res.json(usersPatch)
    } catch (err) {
      res.json(err)
    }
  },
  getUsers: async (req, res) => {
    try {
      const userGet = await Users.find().populate(['books'])
      console.log(userGet)
      res.json(userGet)
      log
    } catch (e) {
      console.log(e)
    }
  },
}
