const mongoose = require("mongoose")

const db=mongoose.connect("mongodb://localhost:27017/first")
.then(()=> console.log("Mongo Db Connected"))
.catch((err)=> console.error(err));

module.exports = db;