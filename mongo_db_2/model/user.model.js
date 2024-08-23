const mongoose=require("mongoose");

const User=mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    subject : {
        type : String,
        required : true
    }
},{timestamps : true});

const crud=mongoose.model("crud",User)

module.exports = crud