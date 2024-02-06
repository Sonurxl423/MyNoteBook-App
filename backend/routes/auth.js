const express=require("express");
const router=express.Router();
const UserModel=require("../models/User");

router.post("/",(req,res)=>{

    console.log(req.body);
    const User=new UserModel(req.body);
    User.save();
    res.send(req.body);
    // console.log("Welcome to the api/auth page of the MyNoteBook Web application.")
    // res.send("<h1>Welcome to the api/auth page of the MyNoteBook Web application.</h1>")m
})

module.exports=router;