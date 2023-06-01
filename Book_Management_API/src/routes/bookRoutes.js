const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');


// // Get all books
router.get('/', bookController.getAllBooks)


// Retrieve a specific book by ID
router.get('/:id', bookController.getOneBookById)


// // Create a new book
router.post('/', bookController.createBook)


// Update a book by ID
router.patch('/:id', bookController.updateBook)


// Delete a book by ID
router.delete('/:id', bookController.deleteBook)


module.exports = router;

