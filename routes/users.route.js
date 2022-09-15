const { Router } = require('express')
const { usersController } = require('../controllers/users.controller')

const router = Router()

router.get('/users', usersController.getUsers)
router.post('/users', usersController.postUsers)
router.patch('/users/:id', usersController.patchUsers)
router.patch('/users/books/:id', usersController.addBooks)
router.delete('/users/books/:id', usersController.delBooks)

module.exports = router
