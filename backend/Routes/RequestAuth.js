
let {Router}=require("express")
const RequestModel = require("../Models/RequestModel")
const {Authentication}= require("../Middleware/Authentication")
const {AdminChecking}=require("../Middleware/AdminAuth")
const { StudentModel } = require("../Models/StudentModel")
let mongoose=require("mongoose")
let requestRoute=Router()

requestRoute.get("/",(req,res)=>{
    res.status(200).send({"msg":"RequestRout"})
})

requestRoute.get("/all/:studentid",Authentication,async(req,res)=>{
        let {studentid}=req.params
        try {
            let alldata=await RequestModel.find({student_id:studentid})
            res.status(200).send({msg:"Successfully get",requests:alldata})
        } catch (error) {
            res.status(400).send({msg:"Something went wrong"})
        }
})
requestRoute.get("/all",AdminChecking,async(req,res)=>{

    try {
        let alldata=await RequestModel.find({status:false,cancel_request:false})
    console.log(alldata)
        if(alldata.length==0){
            res.status(200).send({msg:"No Raised Requests",requests:[]})
        }else{
            res.status(200).send({msg:"Raised Requests",requests:alldata})
        }
        
    } catch (error) {
        res.status(400).send({msg:"Something went wrong"})
    }
})
requestRoute.post("/add",Authentication,async(req,res)=>{
    //sample={
    // userid:{type:String,require:true},
    // student_id:{type:String,require:true},
    // category:{type:String,require:true},
    // previous_data:String||number,
    // new_data:String||number,
    // reason_message:{type:String,require:true}
    // }
    let requestdata=req.body
   requestdata.cancel_request=false
   requestdata.status=false
    try {
        
        let savedata=await RequestModel(requestdata)
        savedata.save()

        res.status(200).send({msg:"Successfully added Request",data:savedata})
    } catch (error) {
        res.status(400).send({msg:"Something went wrong"})
    }
})
requestRoute.patch("/update/:reqid",AdminChecking,async(req,res)=>{
    let data=req.body
    // data={category:"name",new_data:"Aman",pre_data:"Sachin",aproved_change:true||false}
    let {reqid}=req.params
  delete data.reqid

    try {
       if(data.aproved_change==true){
        let category=data.category
     delete data.aproved_change
     let newdataTochange=data.new_data
     if(data.category=="aadhar"||data.category==="contact"||data.category==="class"){
        newdataTochange=Number(newdataTochange)
     }
 
    
        let updateit={[category]:newdataTochange}
      console.log(updateit,data.student_id)
        await StudentModel.findByIdAndUpdate({_id:data.student_id},updateit)
        await RequestModel.findByIdAndUpdate({_id:reqid},{status:true})
        let alldata=await StudentModel.find({_id:data.student_id})
       res.status(200).send({msg:"Successfully Updated",alldata})
       }else{
        await RequestModel.findByIdAndUpdate({_id:reqid},{cancel_request:true})
        res.status(200).send({msg:"Request cancelled",reqid})
       }
      
        
    } catch (error) {
        console.log(error)
       res.status(400).send({msg:"Something went wrong"})
    }
})
requestRoute.patch("/reopenRequest/:reqid", Authentication, async (req, res) => {
    const { reason_message } = req.body;
    const { reqid } = req.params;
   
  
    if (!reason_message) {
      return res.status(400).send({ error: "Missing reason_message in the request" });
    }
  
    try {
      const updatedRequest = await RequestModel.findByIdAndUpdate(
        reqid,
        { cancel_request: false, status: false, reason_message },
        { new: true } // This option returns the updated document instead of the original one
      );
  
      if (!updatedRequest) {
        return res.status(404).send({ error: "Request not found" });
      }
  
      res.status(200).send({ msg: "Reopen Request", updatedRequest });
    } catch (error) {
     
      res.status(500).send({ error: "Something went wrong" });
    }
  });
  
module.exports=requestRoute