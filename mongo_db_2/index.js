const express = require("express");
const db = require("./db");
const crud = require("./model/user.model");
const cors = require("cors");

const datarouter = require("./route/data.route");

const port = 4040;

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.get("/",datarouter);

app.get("/insertdata",datarouter);

app.post("/insertdata",datarouter);

app.get("/delete", datarouter);

app.get("/update/:id", datarouter);

app.post("/edit",datarouter);

// 

// app.get("/helo",userrouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
