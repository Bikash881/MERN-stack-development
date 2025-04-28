const express = require("express")
const app = express()


// connection vanney file import gareko
require("./database/connection.js")

app.get("/",function(req,res){
    res.send("Helllo World")
})

app.get("/about", (req,res)=>{
    res.send("Hello Programmers")
    })
    


app.listen(3000,function(){
    console.log("Project has started at port 3000")
})