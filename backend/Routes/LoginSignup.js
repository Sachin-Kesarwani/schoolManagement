


let {Router}=require("express")
const  SignupModel = require("../Models/LogSignup")
let userRoute=Router()
const path = require('path');
const session = require('express-session');
var bcrypt = require('bcryptjs');

var jwt = require('jsonwebtoken');
const {Authentication }= require("../Middleware/Authentication");
const { AdminChecking } = require("../Middleware/AdminAuth");

require("dotenv").config()
userRoute.get("/",(req,res)=>{
    res.status(200).send({"msg":"Sinup and Login Basic Route"})
})

userRoute.get("/allusers",AdminChecking,async(req,res)=>{
 
try {
    let allusers=await SignupModel.find()
    if(allusers.length>0){
        res.status(200).send({msg:"These Are All Users",data:allusers})
    }else{
        res.status(404).send({msg:"Not Found",data:[]})
    }
  
} catch (error) {
    res.status(400).send({msg:"Something Went Wrong"})
}
})


userRoute.post("/signup",async(req,res)=>{
    let data=req.body
   
    try {
     
        let storeddata=await SignupModel.find({email:data.email})
      
        if(storeddata.length==0){
          data.position="User"
        
            bcrypt.hash(data.password, 8,async function(err, hash) {
                data.password=hash
                console.log(data)
                let postdata=new SignupModel(data)
                await postdata.save()
                let storeddata=await SignupModel.findOne({email:data.email})
                delete data.password
             
                let token = jwt.sign({ userid: storeddata._id,position:storeddata.position}, process.env.secretkey,{ expiresIn: "7d" });

                 res.status(200).send({"msg":"Successfully Signup",data:data,token:token})
            });
        }else{
            res.status(400).send({"msg":"User Exist , Please Login "})
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({"msg":"Something went wrong in Signup"})
    }
 })


userRoute.post("/login",async(req,res)=>{
    let data=req.body
   
    try {
    
        let storeddata=await SignupModel.find({email:data.email})
        console.log(storeddata)
        if(storeddata.length>0){
          
            bcrypt.compare(data.password,storeddata[0].password, function(err, result) {
               console.log(result,"result")
                if(result){
                    let data=storeddata[0]
        
                  
                     let token = jwt.sign({ userid: data._id,position:data.position}, process.env.secretkey,{ expiresIn: "7d" });
                     res.status(200).send({"msg":"Successfully Login",storeddata,token,token})
                }else{
                    res.status(400).send({"msg":"password is wrong"})
                }
            });

        
        }else{
            res.status(400).send({"msg":"You have not Signup till now"})
        }
    } catch (error) {
        res.status(400).send({"msg":"Something went wrong in login"})
    }


})

userRoute.patch("/passwordUpdate",Authentication,async(req,res)=>{
  
let data=req.body
//data={token,password,updated_password}
    try {
        bcrypt.hash(data.updated_password, 8,async function(err, hash) {
            data.password=hash
            console.log(data,"data")
            await SignupModel.findByIdAndUpdate({_id:data.userid},{password:data.password})
            let storeddata=await SignupModel.findOne({_id:data.userid})
            delete storeddata.password
         console.log(storeddata,"storeddata")
            let token = jwt.sign({ userid: storeddata._id,position:storeddata.position}, process.env.secretkey,{ expiresIn: "7d" });
            
             res.status(200).send({"msg":"Successfully Updated Password",data:storeddata,token:token})
        });
       
    } catch (error) {
        res.status(400).send({"msg":"Something Went Wrong"})   
    }
})

///////////////////////////////





 
 





userRoute.get("/details",Authentication,(req,res)=>{
    let token=req?.headers?.authorization?.split(" ")[1]
   
    jwt.verify(token, process.env.secretkey, function(err, decoded) {
     
        res.send(decoded)
      });

   
})
module.exports=userRoute