const express=require('express')
const Book=require('./book.model');
const {postABook, getAllBooks, getSingleBook, updateBook, deleteABook}= require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router= express.Router();

//frontend=> backend server=> controller=> database=> send to server=> back to the frontend

// post a book
router.post('/create-book',verifyAdminToken, postABook)

//get all books
router.get("/", getAllBooks);

//single book endpoint
router.get("/:id", getSingleBook );

//update book data
router.put("/edit/:id",verifyAdminToken, updateBook);

router.delete("/:id",verifyAdminToken, deleteABook);


module.exports= router;