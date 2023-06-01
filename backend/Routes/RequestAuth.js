
let {Router}=require("express")
const RequestModel = require("../Models/RequestModel")
const Authentication = require("../Middleware/Authentication")
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
    let requestdata=req.body
    console.log(requestdata)
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
    console.log(data,reqid)
    try {
       awi
    } catch (error) {
        res.send("error")
    }
})
module.exports=requestRoute