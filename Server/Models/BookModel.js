const mongoose = require('mongoose')

// DEFINIR LA ESTRUCTURA DEL DOCUMENTO QUE SE VA A CREAR
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    author: {
        type: String
    },
    publish_date:{
        type: Date
    }
})
const Book = mongoose.model("Book", bookSchema)
module.exports = Book