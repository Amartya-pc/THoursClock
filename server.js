const express = require('express')

const ejs = require('ejs');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// app.set(`view engine`, `ejs`);
// app.use(express.static('public'))
// app.use(express.static('public/'))




app.get("/",function(req,res){
    app.use("/public", express.static(__dirname + "/public"));
    res.sendFile(__dirname+"/index.html")
})



app.listen('3000',()=>{
    console.log("Server started")
})