const express =  require('express')
const router = express.Router()
const bookController = require('../Controllers/bookController')

router.get('/books', bookController.getAllBooks)
router.get('/books/:id', bookController.getOneBook)
router.post('/books', bookController.createBooks)
router.patch('/books/:id', bookController.updateBook)
router.delete('/books/:id', bookController.deleteBook)

module.exports = router