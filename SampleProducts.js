const express=require("express");
const router=express.Router();

const isAdmin=true;


router.get("/sampleProducts/getdata",(req,res)=>{
    res.json([ {Product1 : "Base"} , {  product2 : "ball" }   ] )})


module.exports=router
