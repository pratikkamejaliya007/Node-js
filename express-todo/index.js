const express=require("express");

const app=express();

app.use(express.urlencoded());

app.set("view engine","ejs");

let data=[
    {
        id:1,
        name:'Task Submit'
    },
    {
        id:2,
        name:'Go to gym'
    }
]

const middleware = async(req,res,next)=>{
    
    if(req.query.age >= 18){
        next();
    }else{
        res.redirect("/")
    }
}



app.get("/",(req,res)=>{
    res.render("index",{data});
    // console.log(data)
})

app.post("/addData",(req,res)=>{

    const {id,name}=req.body;

    let student_data={
        id : parseInt(id),
        name
    }

    data.push(student_data)

    res.redirect("/")
})

app.get("/delete",(req,res)=>{

    const id = req.query.userid;

    const newdata=data.filter(el => el.id != id);

    data=newdata;

    res.redirect('back')

})

app.get("/edit", (req, res) => {
    const id = parseInt(req.query.userid);
    const update_data = data.find(el => el.id === id);
  
    res.render("edit", {
      data: update_data
    });
  });
  
  app.post('/update', (req, res) => {
    const { id, name } = req.body;
    const data_id = parseInt(id);
    const student = data.find(el => el.id === data_id);
  
    if (student) {
      student.name = name;
    }
  
    res.redirect("/");
  });
  
app.use(middleware);

app.listen(3000,console.log("server start"));

