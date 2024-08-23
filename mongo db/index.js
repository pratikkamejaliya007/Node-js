import express, { urlencoded } from 'express'
import cors from 'cors'
import User from './model/data.model.js'
// import User from './controller/data.controller'

const url='mongodb://localhost:27017/app-1'

const app=express()
const port=9090

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended : false}));

mongoose.connect(url)
.then(()=>{
    console.log("mongoDB connected")
})
.catch((error)=>{
    console.error("Error",error)
})


app.get("/",(req,res)=>{
    res.send("hello")
})


app.post("/add-user",async (req,res)=>{

    try{
        const {name,age}=req.query;
        
        // const newUser = new User({name,age});
        // await newUser.save();

        const result= await User.create({
            name,
            age
        });

        console.log(result)

        res.status(201).send("user added successfully");
    }catch(error){
        console.error(error)
        res.send(500).send("Error");
    }

})

app.get("/show", async (req,res)=>{
    
    const alluser= await User.find({});

    res.send(alluser)
})

app.delete("/user/:id",async(req,res)=>{

    try{
        const {id} = req.params;

        const result = await User.findByIdAndDelete(id);

        // const update= await User.findByIdAndUpdate()
    
        if(!result){
            res.status(404).send("user not found");
        }
    
        res.send(200).send(`user ${id} deleted`);
    
    } catch(err){
        res.status(500).send("not found");
    }

})

app.listen(port,()=>{
    console.log(`server is running at port no.${port}`);
})