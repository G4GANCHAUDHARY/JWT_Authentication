const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Users");
const city=require("./model/city");
const data=require("./data.json");

city.insertMany(data);