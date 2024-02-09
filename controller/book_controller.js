const Book = require('../model/book-model');


function getBooks(req, res) {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
}


function addBook(req, res) {
    Book.create(req.body)
        .then(() => res.json('Books added!'))
        .catch(err => res.status(400).json('Error: ' + err));
}   

function deleteBook(req,res) {
    const id = req.params.id 
    Book.findByIdAndDelete(id)
    .then(() => res.json('Books deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
}

function updateBook(req,res) {
    const id = req.params.id 
    Book.put(id)
    .then(() => res.json('Book Updated!'))
    .catch(err => res.status(400).json('Error: ' + err));
}



module.exports = {
    getBooks,
    addBook,
    deleteBook , 
    updateBook
}