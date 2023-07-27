const Book = require('../Models/BookModel')

exports.getAllBooks = async(req, res) =>{
   const books = await Book.find()
   return res.status(200).json(books)
}
exports.getOneBook = async(req, res) =>{
    const { id } = req.params;
    const book = await Book.findById(id)
    return res.status(200).json(book)
}
exports.createBooks = async (req, res) => {
    const newBook = new Book({...req.body})
    const insertedBook = await newBook.save()
    return res.status(201).json(insertedBook)
}
exports.updateBook = async(req, res)=>{
    const { id } = req.params;
    await Book.updateOne({_id: id}, {...req.body})
    const updatedBook = await Book.findById(id)
    return res.status(200).json(updatedBook)
}

exports.deleteBook = async(req, res) => {
   const { id } = req.params
   const bookToDelete = await Book.findByIdAndDelete(id)
   return res.status(202).json(bookToDelete)
}
