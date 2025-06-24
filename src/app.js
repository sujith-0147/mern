const express = require("express");
const adminauth = require("./middlewares/auth");
const connectdB=require("./config/database");
const User=require("./models/user");
const app = express();
app.use(express.json());
 
app.post("/signup",async (req,res)=>{
    //  console.log(req.body);

 const user=new User(req.body);
 await user.save();
 res.send("sucessfully completed");
});


app.get("/user",async (req,res)=>{

   const user= await User.find({email:req.body.email});
   if(user.length===0){
    res.send("Not found");
   }
   else{
   res.send(user);
   }

});
app.get("/feed",async (req,res)=>{

   const user= await User.find({});
   if(user.length===0){
    res.send("Not found");
   }
   else{
   res.send(user);
   }

});
app.delete("/user",async(req,res)=>{
    const userId=req.body.userId;
   const user= await User.findByIdAndDelete(userId);
res.send("user id deleteted");
});
app.patch("/user",async(req,res)=>{
    const userId=req.body.userId;
    const user=await User.findByIdAndUpdate(userId,{email:"ramasujith7@gmail.com"},{
     runValidators:true   
    });
    res.send("user updated sucessfully");


});





connectdB()
    .then(() => {
        console.log("Database connected successfully");
        app.listen(5000, () => {
    console.log("hi woeldd");
});
    })
    .catch((err) => {
        console.log("Database connection failed");
        console.error(err); // optional: log the error
    });

