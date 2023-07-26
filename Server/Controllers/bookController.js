let books = [];

exports.getAllBooks = (req, res) =>{
    res.json(books)
}

exports.createBooks = (req, res) => {
    const {title, author} = req.body
    const newBook = {title, author}
    books.push(newBook)
    res.status(201).json(newBook)
}

exports.deleteBook = (req, res) => {
    const {id} = req.params
    books = books.filter((book, index) => index != id)
    res.sendStatus(204)
}
