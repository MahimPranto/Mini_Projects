var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

let books = [];

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/books', function (req, res){
    res.json(books);
});

app.post('/books', function(req, res){
    const { title = '', author = '', publishedDate = '' } = req.body;
    const iso8601regex = /^\d{4}-\d{2}-\d{2}$/;

    if (!title || !author) {
        res.status(400).json({ message: 'Title and author are required.' });
    }
    else if(!iso8601regex.test(publishedDate)) {
        res.status(400).json({message: 'Invalid publication date format. Must be in ISO 8601 format (YYYY-MM-DD).'});
    }
    else {
        const id = Date.now().toString();
        const book = { id, title, author, publishedDate };
        books.push(book);
        res.json(book);
    }
});

app.delete('/books/:id', function(req, res){
    const id = req.params.id;
    const index = books.findIndex(function(book) {
        return book.id === id;
    });

    if (index === -1) {
        res.status(404).json({ message: 'Book not found.' });
    } else {
        books.splice(index, 1);
        res.json({ message: 'Book deleted successfully.' });
    }
});

app.listen(3000, function(){
    console.log('Server is listening on port 3000.')
});
