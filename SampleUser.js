const express=require("express");
const userRouter=express.Router();

const isAdmin=true;



userRouter.get("/sampleUser/getdata",(req,res)=>{
    res.json([ {user1 : "Mabu Subhani"} , {  user2 : "Shaik" }   ] )})


module.exports=userRouter
