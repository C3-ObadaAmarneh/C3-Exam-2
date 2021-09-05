const express = require("express");
const {
    newBook , 
    getBooks,
    specificBook,
} = require("../controllers/book")


const bookRouter = express.Router();

bookRouter.post("/" , newBook);
bookRouter.get("/" , getBooks )
bookRouter.get("/:book_id", specificBook)
module.exports = bookRouter;
