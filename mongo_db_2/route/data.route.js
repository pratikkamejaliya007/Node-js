const express = require("express");

const router=express.Router();

const usercontroller = require("../controller/usercontroller")

router.get('/',usercontroller.showdata)

router.get("/insertdata",usercontroller.insterdata)

router.post("/insertdata",usercontroller.adddata)

router.get("/delete",usercontroller.deletedata)

router.get("/update/:id",usercontroller.updatedata)

router.post("/edit",usercontroller.editdata)

module.exports=router