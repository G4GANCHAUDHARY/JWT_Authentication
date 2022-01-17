const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const citySchema=new Schema({
    id : {type: String, required:true, unique:true},
    name : {type: String, required:true, unique:true},
    state : {type: String, required:true}
})

const city=mongoose.model("cities",citySchema);

module.exports=city;