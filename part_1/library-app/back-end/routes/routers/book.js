const express = require("express");
const {
    newBook , 
    getBooks,
} = require("../controllers/book")

const bookRouter = express.Router();

bookRouter.post("/" , newBook);
bookRouter.get("/" , getBooks )
module.exports = bookRouter;
