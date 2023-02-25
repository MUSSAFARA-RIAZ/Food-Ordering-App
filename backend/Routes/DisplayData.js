const express=require("express");
const router=express.Router();
router.post('/fooddata',(req,res)=>{
 try{
  // 
  res.send([global.food_item,global.food_cat_data])
 }
 catch(error){
  console.log(error.message);
  res.send("error occuered");


 }
})

module.exports=router;

