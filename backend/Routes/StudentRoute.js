const express = require("express")
const { StudentModel } = require("../Models/StudentModel")
const { Adminrouter } = require("../Middleware/AdminAuth")
const StudentRouter=express.Router()


StudentRouter.post("/register",async(req,res)=>{
    try {
        let studentdata =new StudentModel(req.body)
        await studentdata.save()
        res.send({"msg":"Student Registered Successfully and Verification is pending by school"})
    } catch (error) {
        res.send({"msg":error.message})
        
    }
})


StudentRouter.get("/",Adminrouter,async(req,res)=>{
    try {
        let studentdata = await StudentModel.find({})
       
        res.send({"data":studentdata})
    } catch (error) {
        res.send({"msg":error.message})
        
    }
})
StudentRouter.patch("/:id",Adminrouter,async(req,res)=>{
    const {id} = req.params

    try {
        let studentdata = await StudentModel.find({_id:id})
       
        res.send({"msg":"user has been updated"})
    } catch (error) {
        res.send({"msg":error.message})
        
    }
})
StudentRouter.delete("/:id",Adminrouter,async(req,res)=>{
    const {id} = req.params
    try {
        let studentdata = await StudentModel.findByIdAndDelete({_id:id})
       
        res.status(200).res.send({"msg":"user has been deleted"})
    } catch (error) {
        res.send({"msg":error.message})
        
    }
})

module.exports={
    StudentRouter
}