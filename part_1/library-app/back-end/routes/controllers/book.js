books = require("../../db")
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
    res.status(201)
    res.json(result) 
}).cath((err)=>{
    console.log(err);
})


} 

module.exports = {newBook}