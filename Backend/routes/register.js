const express=require("express");
const router=express.Router();
const { body, validationResult } = require('express-validator');
const users=require("../model/user");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const saltRounds = 10;
const bodyParser=require("body-parser");



router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


router.post("/",body("username"),body("email").isEmail(),body("password"),async (req,res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        bcrypt.hash(req.body.password, saltRounds, async function(err, hash) {
            try{
                const user=await users.create({
                    username:req.body.username,
                    email:req.body.email,
                    password:hash
                })
                res.json({
                    status:"success",
                    data:user
                })
            }catch(err){
                res.json({
                    status:"Failed to hash",
                    message:err.message
                })
            }
        });
    } catch(e){
        res.json({
            status:"Failed to Post",
            message:e.message
        })
    }
})

module.exports=router;