import express from 'express';

import cors from 'cors';

const port=3000;

const app=express()

app.use(cors())

const data=[
    {
        id : 1,
        name :'pratik',
        age : 19
    },
    {
        id : 1,
        name :'pratik',
        age : 19
    },
    {
        id : 1,
        name :'pratik',
        age : 19
    }
]

app.get("/",(req,res)=>{
    res.send(data);
})

app.post("/",(req,res)=>{
    const { id , name , age} = req.body

    const newobj={
        id,
        name,
        age
    }

    data.push(newobj);    

})

console.log(data)

app.listen(port,()=>{
    console.log(`server is port no. ${port}`)
})