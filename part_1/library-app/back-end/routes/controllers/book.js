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

const specificBook = () => {
    const book_id = req.params.book_id
   const foundspecBook =  books.filter((elem,i)=>{
        return elem._id === book_id
    })
if(foundspecBook) {
    res.status(200)
    res.json(foundspecBook)
}else{
    res.status(404)
    res.json("error")    
}
}

module.exports = {newBook , getBooks , specificBook } 