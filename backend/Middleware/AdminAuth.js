const express = require("express")
const Adminrouter = express.Router()
let jwt=require("jsonwebtoken");
const AdminModel = require("../Models/Admin");

// Adminrouter.use((req,res,next)=>{
// let {email,password}=req.body

// try {
//         if(email=="uzair@gmail.com" && password=="uzair"){
//         next()
//         }else{
//             res.status(400).send({"msg":"User not Authenticated"})
//         }
//     } catch (error) {
//         res.status(400).send({"msg":error.message})  
//     }

// })

// module.exports={
//     Adminrouter
// }

function AdminChecking(req,res,next){
    let token=req?.headers?.authorization?.split(" ")[1]
   jwt.verify(token, process.env.secretkey,async function(err, decoded) {
     // console.log(decoded)
    
     if(decoded){
      let storedadmin=await AdminModel.findOne({_id:decoded.adminid})
         
       if(storedadmin&&storedadmin.position==="Admin"||storedadmin.position==="Manager"){
      
           req.body.adminid=decoded.adminid
           next()
       }else{
           res.status(400).send({"msg":"Not Authorised"})
       }
     }else{
       res.status(400).send({"msg":"Not Authorized"})
     }
      
     });
  }
module.exports={AdminChecking}  