

// K6snh8a2cWA1QVuL

const express = require("express");
const mongoose = require("mongoose");

const app = express();

//middleware
app.use("/",(req, res , next)=>{
    res.send("it is working");
})

mongoose.connect("mongodb+srv://admin:K6snh8a2cWA1QVuL@cluster0.ltrkq.mongodb.net/")
.then(() => console.log("connected to mongoD"))
.then(() => {
    app.listen(5000);
})

.catch((err)=> console.log((err)));