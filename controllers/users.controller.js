const Users = require('../models/Users.model')

module.exports.usersController = {
  getUsers: async (req, res) => {
    try {
      const userGet = await Users.find()
      return res.json(User)
    } catch (e) {
      console.log(e)
    }
  },
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
}
