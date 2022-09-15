const { Router } = require('express')
const { booksController } = require('../controllers/books.controller')

const router = Router()

router.get('/books', booksController.getBooks)
router.post('/books', booksController.postBooks)
router.delete('/books/:id', booksController.deleteBooks)

module.exports = router
