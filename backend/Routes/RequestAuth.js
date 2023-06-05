
let {Router}=require("express")
const RequestModel = require("../Models/RequestModel")
const Authentication = require("../Middleware/Authentication")
const { StudentModel } = require("../Models/StudentModel")
let requestRoute=Router()

requestRoute.get("/",(req,res)=>{
    res.status(200).send({"msg":"RequestRout"})
})

requestRoute.get("/all:/studentid",Authentication,async(req,res)=>{
        
        try {
            let alldata=await RequestModel.find({student_id})
            res.status(200).send({msg:"Successfully get",requests:alldata})
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
        res.status(200).send({msg:"Successfully added Request"})
    } catch (error) {
        res.status(400).send({msg:"Something went wrong"})
    }
})




requestRoute.patch("/update/:reqid",async(req,res)=>{
    let data=req.body
    let {reqid}=req.params
    console.log(data)
    try {
       if(data.aproved_change==true){
        let category=data.category
      
        let newdataTochange=data.new_data
        let updateit={[category]:newdataTochange}
    
        await StudentModel.findByIdAndUpdate({_id:data.student_id},updateit)
        await RequestModel.findByIdAndUpdate({_id:reqid},{status:true})
       res.status(200).send({msg:"Successfully Updated"})
       }else{
        await RequestModel.findByIdAndUpdate({_id:reqid},{cancel_request:true})
        res.status(200).send({msg:"Request cancelled"})
       }
      
        
    } catch (error) {
        console.log(error)
       res.status(400).send({msg:"Something went wrong"})
    }
})
requestRoute.patch("/reopenRequest/:reqid",async(req,res)=>{
    let {reason_message}=req.body
    let {reqid}=req.params
  
    try {

        await RequestModel.findByIdAndUpdate({_id:reqid},{cancel_request:false,status:false,reason_message})
       res.status(200).send({msg:"Successfully Reopen Request"})
     
      
        
    } catch (error) {
      
       res.status(400).send({msg:"Something went wrong"})
    }
})
module.exports=requestRoute