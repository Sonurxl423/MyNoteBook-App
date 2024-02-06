const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    console.log("Welcome to the api/notes page of the MyNoteBook Web application.")
    res.send("<h1>Welcome to the api/notes page of the MyNoteBook Web application.</h1>")
})

module.exports=router;