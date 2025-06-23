const express = require("express");
const adminauth = require("./middlewares/auth"); // ✅ Corrected path

const app = express();

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

app.listen(5000, () => {
    console.log("hi woeldd");
});
