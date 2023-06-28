const express = require("express")
const { StudentModel } = require("../Models/StudentModel")
const { Authentication, presentationOFstudent } = require("../Middleware/Authentication")
const { AdminChecking } = require("../Middleware/AdminAuth")
// const { Adminrouter } = require("../Middleware/AdminAuth")
const StudentRouter=express.Router()


StudentRouter.post("/register",Authentication,presentationOFstudent,async(req,res)=>{
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
        delete_Admin:false,
       
        transport_driver: "",
        transport_conductor: "",
        class_teacher:"",
        class_teacher_id: "",
    }

    if(data.transport){
      let transport_fees={
        transport_fees_january:false,
        transport_fees_february:false,
        transport_fees_march:false,
        transport_fees_april:false,
        transport_fees_may:false,
        transport_fees_june:false,
        transport_fees_july:false,
        transport_fees_august:false,
        transport_fees_september:false,
        transport_fees_october:false,
        transport_fees_november:false,
        transport_fees_december:false,
      }
  
        let distance=parseInt(Number(data.transport_to)/5)
        transport_fees.transport_per_month_fees=400+(200*distance)
     
      data={...data,...fees,...transport_fees,status:false}
    }else{
      delete data.transport_from
      delete data.transport_to
      data={...data,...fees,status:false}
    }
       
    try {
    
        let studentdata =new StudentModel(data)
     
        await studentdata.save()
     
        res.status(200).send({"msg":"Registered Successfully and Verification is pending by school"})
    } catch (error) {
        res.status(400).send({"msg":"Someting went wrong"})
        
    }
})
StudentRouter.patch("/update/:id",AdminChecking,async(req,res)=>{
    const {id} = req.params
     let data=req.body
     console.log(data)
    try {
       await StudentModel.findByIdAndUpdate({_id:id},{data})
       
        res.status(200).send({"msg":"Student some data updated"})
    } catch (error) {
        res.status(400).send({"msg":"Something Went Wrong"})
        
    }
})
StudentRouter.get("/allStudents/:userid",Authentication,async(req,res)=>{
    let {userid}=req.params
      try {
        let allstudent=await StudentModel.find({userid})
        res.status(200).send({"msg":"Your Childrens",data:allstudent})
      } catch (error) {
        res.status(400).send({msg:"Something went wrong"})
      }
})

StudentRouter.get("/EnrolledAllStudents",AdminChecking,async(req,res)=>{
  
    try {
        let studentdata = await StudentModel.find({status:true})
       if(studentdata.length>0){
        res.status(200).send({"msg":"These are Enrolled Students",data:studentdata})
       }else{
        res.status(404).send({"msg":"Not Found",data:studentdata})
       }
     
    } catch (error) {
        res.status(400).send({msg:"Something went wrong"})
        
    }
})
StudentRouter.get("/processedAllStudents",AdminChecking,async(req,res)=>{
  
  try {
      let studentdata = await StudentModel.find({status:false})
     if(studentdata.length>0){
      res.status(200).send({"msg":"These are in Process",data:studentdata})
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