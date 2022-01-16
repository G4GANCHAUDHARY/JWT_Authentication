const express=require("express");
const app=express();
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Users");
const loginroute=require("./routes/login");
const regroute=require("./routes/register");


app.use("/",loginroute)
app.use("/register",regroute)

app.listen(5000);