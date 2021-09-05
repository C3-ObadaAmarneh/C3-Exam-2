const mongoose = require("mongoose")

const books = []

const options = {
    /// ضل يعطيني غلط مش عارفوا 
    // useNewUrlParser = true,
    // useCreateIndex = true ,
    // useUnifiedTopology = true
}

mongoose.connect("mongodb://localhost:27017/exam" , options).then(()=>{
    console.log(" --> connected <-- ");
},(err)=>{
    console.log(err);
})

module.exports = {books}