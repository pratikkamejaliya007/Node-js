
const express=require("express")

const bookcontroller = require("../controllers/bookcontrollers")

const router=express.Router()

router.get("/",bookcontroller.getdata)

router.get("/add",bookcontroller.add)

router.post("/add",bookcontroller.adddata)

router.get("/edit",bookcontroller.edit)

router.post("/edit",bookcontroller.editdata)

router.get("/delete",bookcontroller.deletedata)

module.exports = router