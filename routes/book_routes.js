const express = require('express');
const router = express.Router();
const { getBooks, addBook, deleteBook , updateBook } = require('../controller/book_controller');


router.get('/',getBooks)
router.post('/',addBook)
router.delete('/:id',deleteBook)
router.put('/:id' , updateBook)

module.exports = router;