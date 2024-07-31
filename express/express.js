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

app.get("/", (req, res) => {
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

app.listen(3000, () => {
    console.log("server start");
});
