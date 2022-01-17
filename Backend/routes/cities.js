const express=require("express");
const city=require("../model/city");
const router=express.Router();
const cors=require("cors");

router.use(cors());


router.get("/",async (req,res)=>{
    try{
        const cities=await city.find();
        res.json({
            status:"Success",
            data: cities
        })
    } catch(e){
        res.json({
            status:"Failed",
            message: e.message
        })
    }

})


module.exports=router;