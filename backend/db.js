const mongoose = require('mongoose');
const mongoUrl="mongodb://mussafarariaz:mussafara123@ac-avsipt6-shard-00-00.wkdeizt.mongodb.net:27017,ac-avsipt6-shard-00-01.wkdeizt.mongodb.net:27017,ac-avsipt6-shard-00-02.wkdeizt.mongodb.net:27017/projectmern?ssl=true&replicaSet=atlas-hg88so-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.set('strictQuery', true);
const mongoDb=async()=>{
 await mongoose.connect(mongoUrl,{useNewUrlParser:true},async(err,result)=>{
  if(err) console.log("error")
  
  else{
  console.log("Connected!");
  const fetch_data=await mongoose.connection.db.collection("FoodData2");
  fetch_data.find({}).toArray( async function (err,data){
   const food_category=await mongoose.connection.db.collection("FoodCategory");
   food_category.find({}).toArray(function(err,categorydata){
    if(err) console.log("error found")
   else {
    global.food_item=data;
    global.food_cat_data=categorydata;
    
   

   }

   })

   

  })
  }
 });

}
module.exports=mongoDb;
