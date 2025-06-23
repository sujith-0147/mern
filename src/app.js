const express = require("express");
const adminauth = require("./middlewares/auth"); // ✅ Corrected path
const connectdB=require("./config/database");
const app = express();
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
app.use("/admin", adminauth);

app.get("/admin/getalldata", (req, res) => {
    res.send("This is the admin page");
});

app.get("/admin/deletealldata", (req, res) => {
    res.send("This is the delete page");
});
app.use("/",(err,req,res,next)=>{
    if(err){
    res.status(500).send("This in valid");
    }

});


