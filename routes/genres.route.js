const { Router } = require('express')
const { genresController } = require('../controllers/genres.controller')

const router = Router()

router.get('/genres', genresController.getGenres)
router.post('/genres', genresController.postGenres)

module.exports = router
