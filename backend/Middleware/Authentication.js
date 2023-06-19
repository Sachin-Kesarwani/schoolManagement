
let jwt=require("jsonwebtoken")
require("dotenv").config()
let SignupModel=require("../Models/LogSignup");
const AdminModel = require("../Models/Admin");
function Authentication(req,res,next){

 let token=req?.headers?.authorization?.split(" ")[1]
 jwt.verify(token, process.env.secretkey,async function(err, decoded) {
   // console.log(decoded)
  
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


module.exports={Authentication}