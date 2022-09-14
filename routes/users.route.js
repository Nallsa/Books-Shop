const { Router } = require('express')
const { usersController } = require('../controllers/users.controller')

const router = Router()

router.get('/users', usersController.getUsers)
router.post('/users', usersController.postUsers)

module.exports = router
