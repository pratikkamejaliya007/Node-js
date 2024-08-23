const express = require("express")
const cors = require("cors")
const db=require("./db")
const app=express()
const routes = require("./route/book.route.js")
const port=5000

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors())

app.set("view engine","ejs");

app.get("/",routes)

app.get("/add",routes)

app.post("/add",routes);

app.get("/edit",routes)

app.post("/edit",routes)

app.get("/delete",routes)

app.listen(port,()=>console.log(`server is port no ${port} running`));