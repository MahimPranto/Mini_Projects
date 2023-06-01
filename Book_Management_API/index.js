const mongoose = require('mongoose');
const express = require('express');
const router=require('./src/routes/bookRoutes')
const app = express();
const dotenv=require('dotenv').config();



app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/books',router)


// Connect to MongoDB
  mongoose
  .connect(process.env.DATABASE)
  .then(()=>{
    app.listen(process.env.RUNNING_PORT, function() {
      console.log("Server running on port "+ process.env.RUNNING_PORT);
    });
  })
  .catch((error)=>{
    console.log(error);
  })
  