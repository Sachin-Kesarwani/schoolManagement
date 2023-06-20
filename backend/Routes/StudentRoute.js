const express = require("express")
const { StudentModel } = require("../Models/StudentModel")
const { Authentication } = require("../Middleware/Authentication")
const { AdminChecking } = require("../Middleware/AdminAuth")
// const { Adminrouter } = require("../Middleware/AdminAuth")
const StudentRouter=express.Router()


StudentRouter.post("/register",Authentication,async(req,res)=>{
     let data=req.body
    let fees={ january:false,
        february:false,
        march:false,
        april:false,
        may:false,
        june:false,
        july:false,
        august:false,
        september:false,
        october:false,
        november:false,
        december:false,
        delete_Admin:false}
        data={...data,...fees,status:false}
    try {
        let studentdata =new StudentModel(data)
        await studentdata.save()
        res.status(200).send({"msg":"Student Registered Successfully and Verification is pending by school"})
    } catch (error) {
        res.status(200).send({"msg":error.message})
        
    }
})
StudentRouter.patch("update/:id",Authentication,async(req,res)=>{
    const {id} = req.params
     let data=req.body
    try {
       await StudentModel.findByIdAndUpdate({_id:id},{data})
       
        res.send({"msg":"user has been updated"})
    } catch (error) {
        res.send({"msg":error.message})
        
    }
})

StudentRouter.get("/allStudents",AdminChecking,async(req,res)=>{
    try {
        let studentdata = await StudentModel.find()
       if(studentdata.length>0){
        res.status(200).send({"msg":"These are All Students",data:studentdata})
       }else{
        res.status(404).send({"msg":"Not Found",data:studentdata})
       }
     
    } catch (error) {
        res.status(400).send({msg:"Something went wrong"})
        
    }
})

StudentRouter.delete("deleteStudents/:id",AdminChecking,async(req,res)=>{
    const {id} = req.params
    try {
       await StudentModel.findByIdAndDelete({_id:id})
       
       res.status(200).res.send({"msg":"Student Have Been Deleted"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
        
    }
})

module.exports={
    StudentRouter
}