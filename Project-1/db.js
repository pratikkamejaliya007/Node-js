const mongoose=require("mongoose");

const db = mongoose.connect("mongodb://localhost:27017/project-1")
.then(()=>console.log("Mongo Db Conntected"))
.catch((err)=> console.error(err))

module.exports = db ;