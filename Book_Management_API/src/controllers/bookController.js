const Book=require('../models/bookModel');

//Get details of all books
exports.getAllBooks=async(req,res)=>{
    try {
        const book=await Book.find();
        res.send(book);
    } catch (error) {
        res.status(500).json({error:'Books not found. Internal Server Error'})
    }
}

//find a book by ID
exports.getOneBookById=async(req,res)=>{
    try {
        const book=await Book.findById(req.params.id);
        if(book){
            res.send(book);
        }
        else{
            res.status(404).json({error:"Book Not Found"})
        }
        
    } catch (error) {
        res.status(500).json({error:'Internal Server Error'})
    }
}

//create a new book
exports.createBook=async(req,res)=>{
    try {
        const book= new Book(req.body);
        await book.save();
        res.status(200).send(book);
        
    } catch (error) {
        res.status(500).json({error:'Internal Server Error'})
    }
}


//update a book
exports.updateBook=async(req,res)=>{
    try {
        const book=await Book.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(book){
            res.send(book);
        }
        else{
            res.status(404).json({error:"Book Not Found"})
        }
        
    } catch (error) {
        res.status(500).json({error:'Internal Server Error'})
    }
}


//delete a book
exports.deleteBook=async(req,res)=>{
    try {
        const book=await Book.findByIdAndDelete(req.params.id);
        if(book){
            res.status(204);
        }
        else{
            res.status(404).json({error:"Book Not Found"})
        }
        
    } catch (error) {
        res.status(500).json({error:'Internal Server Error'})
    }
}