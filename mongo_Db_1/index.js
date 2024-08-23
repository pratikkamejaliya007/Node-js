import express from 'express'
import mongoose from 'mongoose'
import Userdata from './model/data.model.js'

const port=4040

const app=express()

app.use(express.json())

app.set("view engine","ejs");
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/bag')
.then(()=>console.log("mongodb connetcd"))
.catch((err)=>console.error(err));


app.get("/",async(req,res)=>{
    
    try{

        const data= await Userdata.find({})

        // console.log(data)

        res.render("index",{data})

    }catch(err){
        res.status(500).send("Error Fatching Data")
    }
})

app.get("/add",(req,res)=>{
    res.render("add")
})

app.post("/add", async(req,res)=>{
    
    const {user,password}=req.body;

    if( !user || !password){
        res.send("user and password not selected");
    }
    
    try{

        const newdata= await Userdata.create({
            Username:user,
            password
        })        

        // console.log(newdata)
            res.redirect("/")
        // res.status(201).send("user added successfully");

    }catch(err){
        console.error(err);
        res.send(500).send("Error");
    }
})

// delete

app.get("/datadelete/:id",async(req,res)=>{

    const {id} = req.params;

    console.log("ID received:", id);      

    try{
        let result= await Userdata.findByIdAndDelete(id);

        if(!result){
            res.send("Id Not Found");
        }else{
            res.redirect("/");
        }
    }catch(err){
        console.error("Not Deleted data",err);
        res.send(500).send("An error occurred while deleting the data")
    }

})

// update

app.get("/edit/:id",async(req,res)=>{

    const {id}=req.params;

    try{
        const result = await Userdata.findById(id)
        res.render("edit",{result});
    }catch(err){
        res.status(500).send("ID Not Found");
    }   
})

app.post("/update",async(req,res)=>{

    const {id}=req.body;

    try{
         await Userdata.findByIdAndUpdate(id ,{
            Username : req.body.user,
            password : req.body.password
        })
        
        // if(!result){
        //     res.send("Data Not Update");
        // }else{
            res.redirect("/");
        // }
    }catch(err){
        res.status(500).send("Data Not Found");
    }

})

app.listen(port,()=> console.log(`servert is Port No. ${port} running`));