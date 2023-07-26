const express =  require('express')
const router = express.Router()
const bookController = require('../Controllers/bookController')

router.get('/books', bookController.getAllBooks)
router.post('/books', bookController.createBooks)
router.delete('/books/:id', bookController.deleteBook)

module.exports = router