
let jwt=require("jsonwebtoken")
require("dotenv").config()
let SignupModel=require("../Models/LogSignup");
const AdminModel = require("../Models/Admin");
const { StudentModel } = require("../Models/StudentModel");
function Authentication(req,res,next){

 let token=req?.headers?.authorization?.split(" ")[1]
 jwt.verify(token, process.env.secretkey,async function(err, decoded) {
 console.log(decoded)
  
   if(decoded){
    let storeduser=await SignupModel.findOne({_id:decoded.userid})
       
     if(storeduser){
         req.body.userid=decoded.userid
         next()
     }else{
         res.status(400).send({"msg":"User Not Found"})
     }
   }else{
     res.status(400).send({"msg":"Not Authorized"})
   }
    
   });
}

 async function  presentationOFstudent(req,res,next){
  let {name}=req.body
  try {
    let storeddata=await StudentModel.find({name:name})
   
    if(storeddata.length>0){
       res.status(200).send({msg:"Student Already Registered , Verfication is in Process"})
    }else{
      next()
    }
  } catch (error) {
    res.status(400).send({msg:"Something went wrong"})
  }
 }


module.exports={Authentication, presentationOFstudent}