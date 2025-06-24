const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minLength:4,
        maxLength:100,
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        lowercase:true,
        required: true,
        unique:true,
        trim:true
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min:18,

    },
    gender: {
        type: String,
        validate(value){

            if(!["male","female","others"].includes(value) ){
                throw new Error("grnder not valid");
                
            }
        },
        
    },
    photoUrl:{
        type:String,
        default:"https://freepngimg.com/thumb/hinduism/30434-5-hanuman-hd.png",
    },
    about:{
        type:String,
        default:"I am looking good"

    },
    skills:{
        type:[String]
    }
},{
    timestamps:true,
});

const User = mongoose.model("User", userschema);
module.exports = User;
