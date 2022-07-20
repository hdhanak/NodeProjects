const path  = require('path')
const express = require("express");
const app = express()
const templatePath = path.join(__dirname,"../templates")

app.set("view engine","hbs")
app.set("views",templatePath)
// console.log(path.join(__dirname,"../public"));
// const staticPath =path.join(__dirname,"../public") 
// app.use(express.static(staticPath))


app.get("/",(req,res)=>{
    res.render("index",{
        name:"harshita"
    });
})

app.get("/",(req,res)=>{
    res.send("<h1>hello world from the thapa</h1>")
   
});
app.get("/about",(req,res)=>{
    // res.send("this is about page bhb...")
    res.json([
        {
        id:1,
        name:"harshita"
    },
    {
        id:2,
        name:"pratham"
    },

])
})
app.listen(8000 , ()=>{
    console.log("listing the port at 8000");
})