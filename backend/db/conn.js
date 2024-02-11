const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/MyNoteBook").then(()=>{
    console.log("Connected to Mongodb successfully! ...");
}).catch((err)=>{
    console.log("Connection to Mongodb is not successfull ...");
})