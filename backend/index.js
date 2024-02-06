const express=require("express");
const app=express();
require("./db/conn");



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port=process.env.PORT||3000;

app.get("/",(req,res)=>{
    console.log("Welcome to the home page of the MyNoteBook Web Application.");
    res.send("<h1>Welcome to the home page of the MyNoteBook Web Application.</h1>");
})


// Available Routes
app.use("/api/auth",require("./routes/auth"));
app.use("/api/notes",require("./routes/notes"));



app.listen(port,()=>{
    console.log(`Connection is live at port no. ${port}`);
})
