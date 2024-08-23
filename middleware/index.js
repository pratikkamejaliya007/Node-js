const express=require('express');
const port=7000;
const app=express();

app.use(express.urlencoded());
app.use(express.static("public"));

app.set("view engine","ejs");

let studentdata=[
  {
    id:1,
    name:"vivek"
  },
  {
    id:2,
    name:"pratik"
  }
]



const middleware=async(req,resp,next)=>{

    if(req.query.age >= 18){
         next();
 
    } else {
      resp.redirect("/")
    }
 }

app.get("/",(req,res)=>{

    res.render("index",{studentdata});

})

app.get("/",(req,res)=>{
    
    res.render("show",{data})

})

app.post("/showdata",(req,res)=>{

    const {id,name}=req.body;

    let newdata={
        id,
        name
    }

    studentdata.push(newdata);

    res.redirect("/")

})

app.get("/deletedata",(req,res)=>{
    const id = req.query.userid;

    const data=studentdata.filter((el,i)=>{
     return el.id !=id;
    })
    studentdata=data;
    res.redirect("back")
})

app.get("/editdata",(req,res)=>{
   
  const id=req.query.editid;

  const data=studentdata.find(el=>el.id==id)
  
   
   res.render("edit",{
    data
   })
});

app.post("/updatedata",(req,res)=>{
    const {id,name}=req.body;
 
    const student_id=parseInt(id);
 
    const student=studentdata.find(el=>el.id===student_id);
 
    if(student){
     student.name=name;
    }
    res.redirect("/");
 });


 app.get("/home",middleware,(req,res)=>{
    res.render("home")
 })

 app.get("/admin",middleware,(req,res)=>{
    res.render("admin")
 })

app.get("/register",middleware,(req,res)=>{
    res.render("register")
})

 app.use(middleware);
 app.listen(port, console.log(`Server Started by port ${port} .....`));