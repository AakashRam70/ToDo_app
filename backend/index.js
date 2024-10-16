const express = require("express");
const PORT = 3200;
const app = express();

app.use(express.json());

app.post("/todos", function(req,res){

})

app.get("/todos", function(req,res){

})

app.post("/completed", function(req,res){

})

app.listen(function () {
    `port is running in ${PORT}`
})