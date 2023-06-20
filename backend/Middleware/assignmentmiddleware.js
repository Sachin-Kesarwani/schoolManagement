

let jwt=require("jsonwebtoken");
const AdminModel = require("../Models/Admin");
const { StudentModel } = require("../Models/StudentModel");
require("dotenv").config()


function assignmentmiddleware(req,res,next){
    let token=req?.headers?.authorization?.split(" ")[1]
   
    jwt.verify(token, process.env.secretkey,async function(err, decoded) {
   
      if(decoded){
       let storedadmin=await AdminModel.findOne({_id:decoded.adminid})
       
        if(storedadmin&&storedadmin.position==="Admin"||storedadmin.position==="Manager"||storedadmin.position==="Teacher"){
       
            req.body.teacherid=decoded.adminid
            next()
        }else{
            res.status(400).send({"msg":"Not Authorised"})
        }
      }else{
        res.status(400).send({"msg":"Not Authorized"})
      }
       
      });
}

async function CheckingStudentIsinourSchool(req,res,next){
let {studentid,student_class}=req.query
try {
   let data=await StudentModel.findOne({_id:studentid,class:student_class})

   if(data){
    next()
   }else{
    res.status(401).send({msg:"401 Unauthorized"})
   }
} catch (error) {
    res.status(400).send({msg:"Something Went Wrong"})
    
}
}

module.exports={assignmentmiddleware,CheckingStudentIsinourSchool}