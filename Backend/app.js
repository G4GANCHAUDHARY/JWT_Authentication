const express=require("express");
const app=express();
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Users");
const loginroute=require("./routes/login");
const regroute=require("./routes/register");
const cityroute=require("./routes/cities");


app.use("/",loginroute);
app.use("/register",regroute);
app.use("/city",cityroute);

app.listen(5000);