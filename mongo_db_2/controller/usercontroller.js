const crud = require("../model/user.model")

exports.showdata = async(req,res)=>{
    const data = await crud.find({});
    res.render("show", { data });
}

exports.insterdata = (req,res)=>{
    res.render("index");
}

exports.adddata = async(req,res)=>{
    const { name, subject } = req.body;
    console.log("Request body:", req.body); 

    if (!name || !subject) {
        return res.status(400).send("name and subject not found");
    }

    try {
        const result = await crud.create({ name, subject });
        res.status(201).redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
}

exports.deletedata= async(req,res)=>{
    const deleteid= await crud.findByIdAndDelete(req.query.id);
    deleteid ? res.redirect("back") : console.log("Data Not Deleted");
}

exports.updatedata = async(req,res)=>{
    const {id}=req.params;
    const update= await crud.findById(id)
    res.render("edit",{update});
}

exports.editdata = async(req,res)=>{
    const {id,name,subject}=req.body;
    try{
        await crud.findByIdAndUpdate(id,{name,subject});
        res.status(201).redirect("/")
    }catch(err){
        console.log("error  ")
    }
}
