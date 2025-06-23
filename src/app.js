const express = require("express");
const adminauth = require("./middlewares/auth"); // ✅ Corrected path
const connectdB=require("./config/database");
const User=require("./models/user");
const app = express();
app.post("/signup",async (req,res)=>{
     
const userobj={
    firstname:"Rama",
    lastname:"sujith",
    emailid:"dudduramasujith7@gmail.com",
    password:"Ramasujith1.",
    gender:"male"
}
 const user=new User(userobj);
 await user.save();
 res.send("sucessfully completed");
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

