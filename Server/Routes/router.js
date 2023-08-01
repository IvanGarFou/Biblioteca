const express = require('express')
const router = express.Router()
const bookRouter = require('./bookRoutes')
const userRouter = require('./userRoutes')

router.use('/books', bookRouter)
router.use('/users', userRouter)
module.exports = router