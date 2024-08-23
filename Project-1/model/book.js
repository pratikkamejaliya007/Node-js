const mongoose=require("mongoose")

const BookSchema=mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    publishedyear : {
        type : Number,
        required : true
    },
    pages : {
        type :Number,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    publishedcopies : {
        type : Number,
        required : true
    }
},{timestamps : true});

const Book=mongoose.model("Book",BookSchema);

module.exports = Book