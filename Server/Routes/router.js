const express = require('express')
const router = express.Router()
const bookRouter = require('./bookRoutes')

router.use('/', bookRouter)

module.exports = router