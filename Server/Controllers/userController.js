const User = require('../Models/UserModel')

exports.createUser = async (req, res) => {
    const newUser = new User({ ...req.body })
    const insertedUser = await newUser.save()
    return res.status(201).json(insertedUser)
}
exports.getAllUsers = async (req, res) => {
    const users = await User.find()
    return res.status(200).json(users)
}
exports.getOneUser = async (req, res) => {
    const { username } = req.params
    const user = await User.findOne({
        userName: username
    })
    return res.status(200).json(user)
}
exports.editUser = async (req, res) => {
    const { id } = req.params
    await User.updateOne({_id: id}, {...req.body}) 
    const updatedUser = await User.findById(id)
    return res.status(200).json(updatedUser)
}