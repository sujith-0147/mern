const mongoose = require("mongoose");

const connectdB = async () => {
    await mongoose.connect("mongodb://localhost:27017/devTinder");
};


module.exports=connectdB;