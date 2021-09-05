const express = require("express");
const {
    newBook , 
    getBooks,
    specificBookget,
    specificBookdelete
} = require("../controllers/book")

 
const bookRouter = express.Router();

bookRouter.post("/" , newBook);
bookRouter.get("/" , getBooks )
bookRouter.get("/:book_id", specificBookget)
bookRouter.delete("/:book_id", specificBookdelete)

module.exports = bookRouter;
