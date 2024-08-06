const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

var studentData = [
    {
        id: 1,
        name: "pratik"
    },
    {
        id: 2,
        name: "gautam"
    }
];

app.set("view engine", "ejs");

app.get("/show", (req, res) => {
    res.render("index", {
        student: studentData
    });
});

app.post("/insertData", (req, res) => {
    const { id, name } = req.body;

    const i= parseInt(id) ? parseInt(id) : id 

    let obj = {
        id:i,
        name
    };

    studentData.push(obj);
    res.redirect("/");
});

app.get("/deleteData", (req, res) => {
    const id = parseInt(req.query.userid , 10);

    const data = studentData.filter((el) => el.id != id);

    studentData = data;

    res.redirect("back");
});

app.get("/edit",(req,res)=>{

    const id = parseInt(req.query.userid , 10);

    const data=studentData.find(el => el.id == id)

    if(data){
        res.render("edit",{
            data : data
        })
    }else{
        res.redirect("/")
    }

})

app.post("/update", (req, res) => {
    const id = parseInt(req.query.userid, 10);
    const { name } = req.body;

    studentData = studentData.map((el) => {
        if (el.id === id) {
            return { id, name }; // Update the student with the new name
        }
        return el; // Return unchanged student objects
    });

    res.redirect("/");
});

app.listen(3000, () => {
    console.log("server start");
});
