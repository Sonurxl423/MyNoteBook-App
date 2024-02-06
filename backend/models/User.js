const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    age:{
        type:Number,
        required:true
    }
})

const UserModel=new mongoose.model("UserModel",UserSchema);
module.exports=UserModel;