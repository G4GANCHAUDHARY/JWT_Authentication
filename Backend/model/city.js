const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const citySchema=new Schema({
    id : String,
    name :String,
    state : String
})

const city=mongoose.model("cities",citySchema);

module.exports=city;