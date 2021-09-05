const express = require("express");
const {
    newbook
} = require("../controllers/book")

const bookRouter = express.Router();

bookRouter.post("/" , newbook);

module.exports = bookRouter;
