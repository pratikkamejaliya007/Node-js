const mongoose=require("mongoose");

const User=mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    subject : {
        type : String,
        require : true
    }
},{timestamps : true});

const crud=mongoose.model("crud",User)

module.exports = crud