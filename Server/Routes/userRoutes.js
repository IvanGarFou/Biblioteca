const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')

router.post('/', userController.createUser)
router.get('/', userController.getAllUsers)
router.get('/:id', userController.getOneUser)
router.patch('/:id', userController.editUser)

module.exports = router