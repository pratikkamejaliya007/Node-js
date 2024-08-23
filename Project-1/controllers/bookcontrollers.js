const Book=require("../model/book")

exports.getdata= async(req,res)=>{
    
    const Bookdata= await Book.find({})
    console.log(Bookdata)
    res.render("index",{Bookdata})
}

exports.add= (req,res)=>{
    res.render("add")
}

exports.adddata= async(req,res)=>{
    console.log(req.body);    
    try{
        const result = await Book.create(req.body);
        res.status(201).redirect("/")
    }catch(err){
        console.log("Error");
    }
}

exports.edit= async(req,res)=>{
    const book= await Book.findById(req.query.id)
    res.render("edit",{book})
}

exports.editdata= async(req,res)=>{
    try{
        await Book.findByIdAndUpdate(req.query.id,req.body)
        res.status(201).redirect("/")
    }catch(err){
        res.send(401).send("Data Not Updated")
    }
}

exports.deletedata= async(req,res)=>{
    try{
        await Book.findByIdAndDelete(req.query.id)
        res.status(200).redirect("/")
    }catch(err){
        res.status(401).send("Data Not Deleted")
    }
}