import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Username:{
        type : String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

const Userdata= mongoose.model("Userdata",userSchema);

export default Userdata ;

