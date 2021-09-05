const  books  = require("../../db")

const newBook = () =>{

const  {title , author, pages, publisher, published_at} = req.body

const  NewbookCreate ={
title: title,
author:  author,
pages:  pages,
publisher: publisher ,
published_at:  published_at
}

NewbookCreate.save
.then((result) =>{
    books.push(NewbookCreate)
    res.status(201)
    res.json(result) 
}).cath((err)=>{
    console.log(err);
})


} 

const getBooks = ()=> {
    res.status(200)
    res.json(books)
}

module.exports = {newBook , getBooks}